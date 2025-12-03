import { ISalesQuery } from "../sales.interface";
import { useDebounce } from "@/hooks/useDebounce"; 
import {  useEffect, useState } from "react";

interface SalesFilterProps {
  currentQuery: ISalesQuery;
  onFilterChange: (filters: Partial<ISalesQuery>) => void;
}

export const SalesFilter = ({ currentQuery, onFilterChange }: SalesFilterProps) => {
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
    if (debouncedFilters.startDate !== currentQuery.startDate) changedFilters.startDate = debouncedFilters.startDate;
    if (debouncedFilters.endDate !== currentQuery.endDate) changedFilters.endDate = debouncedFilters.endDate;
    if (debouncedFilters.priceMin !== currentQuery.priceMin) changedFilters.priceMin = debouncedFilters.priceMin;
    if (debouncedFilters.email !== currentQuery.email) changedFilters.email = debouncedFilters.email;
    if (debouncedFilters.phone !== currentQuery.phone) changedFilters.phone = debouncedFilters.phone;
    
    if (Object.keys(changedFilters).length > 0) {
        onFilterChange(changedFilters);
    }
  }, [debouncedFilters, onFilterChange, currentQuery]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setLocalFilters(prev => ({ 
        ...prev, 
        [name]: type === 'number' ? (value ? Number(value) : "") : value 
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-gray-50 p-4 rounded-lg">
      <input 
        type="date" 
        name="startDate" 
        value={localFilters.startDate} 
        onChange={handleChange} 
        placeholder="Start Date"
        className="p-2 border rounded" 
      />
      <input 
        type="date" 
        name="endDate" 
        value={localFilters.endDate} 
        onChange={handleChange} 
        placeholder="End Date" 
        className="p-2 border rounded"
      />
      <input 
        type="number" 
        name="priceMin" 
        value={localFilters.priceMin ?? ""} 
        onChange={handleChange} 
        placeholder="Min Price" 
        className="p-2 border rounded"
      />
      <input 
        type="email" 
        name="email" 
        value={localFilters.email ?? ""} 
        onChange={handleChange} 
        placeholder="Customer Email" 
        className="p-2 border rounded"
      />
      <input 
        type="tel" 
        name="phone" 
        value={localFilters.phone ?? ""} 
        onChange={handleChange} 
        placeholder="Phone Number" 
        className="p-2 border rounded"
      />
    </div>
  );
};