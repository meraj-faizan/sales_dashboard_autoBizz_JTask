import { SalesPagination } from "../sales.interface";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  pagination: SalesPagination | undefined;
  onPaginate: (direction: 'next' | 'prev') => void;
}

export const SalesPaginationControls = ({ pagination, onPaginate }: PaginationControlsProps) => {
  const hasBefore = Boolean(pagination?.before);
  const hasAfter = Boolean(pagination?.after);

  return (
    <div className="flex justify-end space-x-3 mt-4">
      <button
        onClick={() => onPaginate('prev')}
        disabled={!hasBefore}
        className={`flex items-center p-2 border rounded-lg transition ${
          hasBefore ? 'bg-primary text-white hover:bg-primary/90 hover:scale-90' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        <ChevronLeft size={20} className="mr-1" /> Previous
      </button>

      <button
        onClick={() => onPaginate('next')}
        disabled={!hasAfter}
        className={`flex items-center p-2 border rounded-lg transition ${
          hasAfter ? 'bg-primary text-white hover:bg-primary/90 hover:scale-90' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next <ChevronRight size={20} className="ml-1" />
      </button>
    </div>
  );
};