import { ISalesQuery } from "../sales.interface";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

import { Calendar, DollarSign, Mail, Phone } from "lucide-react";
import FilterInput from "./FilterInput";

interface SalesFilterProps {
  currentQuery: ISalesQuery;
  onFilterChange: (filters: Partial<ISalesQuery>) => void;
}

export const SalesFilter = ({
  currentQuery,
  onFilterChange,
}: SalesFilterProps) => {
  const [localFilters, setLocalFilters] = useState({
    startDate: currentQuery.startDate,
    endDate: currentQuery.endDate,
    priceMin: currentQuery.priceMin,
    email: currentQuery.email,
    phone: currentQuery.phone,
  });

  const debouncedFilters = useDebounce(localFilters, 500);

  useEffect(() => {
    const changedFilters: Partial<ISalesQuery> = {};
    if (debouncedFilters.startDate !== currentQuery.startDate)
      changedFilters.startDate = debouncedFilters.startDate;
    if (debouncedFilters.endDate !== currentQuery.endDate)
      changedFilters.endDate = debouncedFilters.endDate;
    if (debouncedFilters.priceMin !== currentQuery.priceMin)
      changedFilters.priceMin = debouncedFilters.priceMin;
    if (debouncedFilters.email !== currentQuery.email)
      changedFilters.email = debouncedFilters.email;
    if (debouncedFilters.phone !== currentQuery.phone)
      changedFilters.phone = debouncedFilters.phone;

    if (Object.keys(changedFilters).length > 0) {
      onFilterChange(changedFilters);
    }
  }, [debouncedFilters, onFilterChange, currentQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: type === "number" ? (value ? Number(value) : "") : value,
    }));
  };

  return (
    <div className="p-4 md:p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Filter Sales Data
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-1 md:col-span-1">
          <FilterInput
            icon={Calendar}
            label="Start Date"
            tooltip="Filter sales starting from this date."
            type="date"
            name="startDate"
            value={localFilters.startDate}
            handleChange={handleChange}
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <FilterInput
            icon={Calendar}
            label="End Date"
            tooltip="Filter sales up to this date."
            type="date"
            name="endDate"
            value={localFilters.endDate}
            handleChange={handleChange}
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <FilterInput
            icon={DollarSign}
            label="Min Price"
            tooltip="Only show sales with a minimum price."
            type="number"
            name="priceMin"
            value={localFilters.priceMin ?? ""}
            placeholder="e.g., 5000"
            handleChange={handleChange}
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <FilterInput
            icon={Mail}
            label="Email"
            tooltip="Filter by customer email address."
            type="email"
            name="email"
            value={localFilters.email ?? ""}
            placeholder="customer@example.com"
            handleChange={handleChange}
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <FilterInput
            icon={Phone}
            label="Phone"
            tooltip="Filter by customer phone number."
            type="tel"
            name="phone"
            value={localFilters.phone ?? ""}
            placeholder="e.g., 5551234567"
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
