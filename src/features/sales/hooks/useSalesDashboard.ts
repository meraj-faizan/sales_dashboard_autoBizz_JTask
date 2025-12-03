import { useEffect, useState } from "react";
import {
  useGetAuthorizationTokenMutation,
  useGetSalesDataQuery,
} from "../sales.api";
import { ISalesQuery } from "../sales.interface";
import { setToken } from "@/features/auth/store/auth.slice";
import { useAppDispatch } from "@/redux/hook";

const INITIAL_QUERY: ISalesQuery = {
  startDate: "2025-01-01",
  endDate: "2025-01-01",
  sortBy: "date",
  sortOrder: "asc",
  priceMin: "",
  email: "",
  phone: "",
};

export const useSalesDashboard = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [query, setQuery] = useState<ISalesQuery>(INITIAL_QUERY);
  const dispatch = useAppDispatch();

  const [getAuthorization, { isLoading: isAuthLoading, error: authError }] =
    useGetAuthorizationTokenMutation();

  const {
    data,
    isLoading: isSalesLoading,
    isFetching: isSalesFetching,
    error: salesError,
    refetch,
  } = useGetSalesDataQuery(query, {
    skip: !authToken,
  });

  const isLoading = isAuthLoading || isSalesLoading || isSalesFetching;
  const error = authError || salesError;

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await getAuthorization({
          tokenType: "frontEndTest",
        }).unwrap();
        setAuthToken(response.token);
        dispatch(setToken(response.token));
      } catch (err) {
        console.error("Auth Token Fetch Error:", err);
      }
    };

    if (!authToken) {
      fetchToken();
    }
  }, [authToken, dispatch, getAuthorization]);

  const handleFilterChange = (newFilters: Partial<ISalesQuery>) => {
    setQuery((prev) => ({
      ...prev,
      ...newFilters,
      before: undefined,
      after: undefined,
    }));
  };

  const handleSort = (key: "date" | "price") => {
    setQuery((prev) => ({
      ...prev,
      sortOrder:
        prev.sortBy === key && prev.sortOrder === "asc" ? "desc" : "asc",
      sortBy: key,
      before: undefined,
      after: undefined,
    }));
  };

  const handlePagination = (direction: "next" | "prev") => {
    const { before, after } = data?.pagination || {};

    if (direction === "next" && after) {
      setQuery((prev) => ({ ...prev, after, before: undefined }));
    } else if (direction === "prev" && before) {
      setQuery((prev) => ({ ...prev, before, after: undefined }));
    }
  };

  return {
    sales: data?.results.Sales || [],
    totalSales: data?.results.TotalSales || [],
    pagination: data?.pagination,
    currentQuery: query,

    isLoading,
    error,
    isAuthenticated: Boolean(authToken),

    handleFilterChange,
    handleSort,
    handlePagination,
    refetch,
  };
};
