"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FilterDropdownProps {
  category: string;
  setCategory: (value: string) => void;
  options: string[];
  className?: string;
}

export const FilterDropdown = ({
  category,
  setCategory,
  options,
  className,
}: FilterDropdownProps) => {
  return (
    <Select value={category} onValueChange={setCategory}>
      <SelectTrigger className={cn("!h-auto py-2", className)}>
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
