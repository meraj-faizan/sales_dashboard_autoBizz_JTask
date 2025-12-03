import { Info } from "lucide-react";

const Tooltip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) => (
  <div className="relative inline-block group">
    {children}
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max p-2 text-xs text-white bg-secondary rounded-lg shadow-lg z-50">
      {content}
    </div>
  </div>
);

const FilterInput = ({
  icon: Icon,
  label,
  tooltip,
  handleChange,
  ...props
}: React.ComponentProps<"input"> & {
  icon: React.ElementType;
  label: string;
  tooltip: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex flex-col space-y-1">
    <label
      htmlFor={props.name}
      className="flex items-center text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1"
    >
      <Icon className="w-4 h-4 mr-2 text-primary" />
      {label}
      <Tooltip content={tooltip}>
        <Info className="w-3 h-3 ml-1 text-gray-400 hover:text-primary/90 transition cursor-help" />
      </Tooltip>
    </label>
    <input
      {...props}
      onChange={handleChange}
      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 shadow-sm text-sm placeholder-gray-400"
    />
  </div>
);

export default FilterInput;
