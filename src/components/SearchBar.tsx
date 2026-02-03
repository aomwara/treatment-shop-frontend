import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (v: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative mb-6 md:mb-8">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Find Treatment"
        className="
          w-full border rounded-xl
          px-4 py-3 md:py-4 md:text-lg
          focus:outline-none focus:ring-2 focus:ring-gray-300
        "
      />

       <Search
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
}

export default SearchBar;