"use client";

import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { useSalesDashboard } from "@/features/sales/hooks/useSalesDashboard";
import { SalesFilter } from "@/features/sales/components/SalesFilter";
import { SalesChart } from "@/features/sales/components/SalesChart";
import { SalesTable } from "@/features/sales/components/SalesTable";
import { SalesPaginationControls } from "@/features/sales/components/SalesPaginationControls";

const DashboardPage = () => {
  const {
    sales,
    totalSales,
    pagination,
    currentQuery,
    isLoading,
    error,
    isAuthenticated,
    handleFilterChange,
    handleSort,
    handlePagination,
  } = useSalesDashboard();

  if (error) {
    const errorMessage = error
      ? (error as { data: { error: string } }).data.error
      : String(error);
    return (
      <div className="p-5 text-red-600">
        <h1 className="text-xl font-bold">Error Loading Dashboard</h1>
        <p>
          A critical error occurred while fetching data or authorization:{" "}
          {errorMessage || String(error)}
        </p>
      </div>
    );
  }

  // Handle Loading State
  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-full min-h-screen">
        <p className="text-xl font-medium">Processing Data...</p>
      </div>
    );
  }

  // Handle Empty Data State
  const isEmpty = sales.length === 0 && totalSales.length === 0;

  return (
    <div className="space-y-6 p-4">
      <Breadcrumbs
        manual={[
          { label: "Dashboard", href: "/" },
          { label: "Home", href: "/" },
        ]}
      />
      <h1 className="text-3xl font-bold text-gray-800">
        Sales Analytics Dashboard 📊
      </h1>

      <SalesFilter
        currentQuery={currentQuery}
        onFilterChange={handleFilterChange}
      />

      {isEmpty ? (
        <div className="text-center p-10 border border-gray-200 rounded-lg bg-white">
          <p className="text-lg text-gray-500">
            No sales data found for the selected filters.
          </p>
        </div>
      ) : (
        <>
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Total Sales Over Time
            </h2>
            <SalesChart data={totalSales} />
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Sales Details</h2>
            <div className="w-[255px] sm:w-full overflow-hidden overflow-x-auto">
              <SalesTable
                sales={sales}
                currentQuery={currentQuery}
                onSort={handleSort}
              />
            </div>

            <SalesPaginationControls
              pagination={pagination}
              onPaginate={handlePagination}
            />
          </section>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
