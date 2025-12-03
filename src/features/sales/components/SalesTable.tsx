import { ISale, ISalesQuery } from "../sales.interface";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"; // Added ArrowUpDown

interface SalesTableProps {
  sales: ISale[];
  currentQuery: ISalesQuery;
  onSort: (key: "date" | "price") => void;
}

const getSortIcon = (key: "date" | "price", query: ISalesQuery) => {
  if (query.sortBy !== key) {
    // Show a neutral icon if the column is sortable but not currently sorted
    return <ArrowUpDown size={14} className="text-gray-400" />;
  }
  // Show the directional icon if the column is the active sort key
  return query.sortOrder === "asc" ? (
    <ArrowUp size={14} />
  ) : (
    <ArrowDown size={14} />
  );
};

export const SalesTable = ({
  sales,
  currentQuery,
  onSort,
}: SalesTableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
            onClick={() => onSort("date")}
            title="Sort by Date"
          >
            <div className="flex items-center space-x-1">
              <span>Date</span>
              {getSortIcon("date", currentQuery)}
            </div>
          </th>
          <th
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
            onClick={() => onSort("price")}
            title="Sort by Price"
          >
            <div className="flex items-center space-x-1">
              <span>Price</span>
              {getSortIcon("price", currentQuery)}
            </div>
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Phone
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {sales.map((sale) => (
          <tr key={sale._id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 truncate max-w-[100px]">
              {sale._id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(sale.date).toLocaleString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              ${sale.price.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {sale.customerEmail}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {sale.customerPhone}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
