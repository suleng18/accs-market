import { useDebounce } from '@/assets/hooks/useDebounce';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { ListFilter, Plus } from 'lucide-react';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';

interface TableToolbarProps {
  value: string;
  setValue: (value: string) => void;
  setFilters: React.Dispatch<
    React.SetStateAction<{
      _page: number;
      _limit: number;
      userId: string | null;
      title: string | null;
    }>
  >;
  filters: {
    _page: number;
    _limit: number;
    userId: string | null;
    title: string | null;
  };
}
const TableToolbar: FC<TableToolbarProps> = ({ value, setValue, setFilters, filters }) => {
  const [valueSearch, setValueSearch] = useState(filters.title || filters.userId || '');

  const debouncedValueSearch = useDebounce(valueSearch, 500);

  const valueFilter = useMemo(
    () => [
      { id: 'userId', text: 'User ID' },
      { id: 'title', text: 'Title' },
    ],
    []
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValueSearch(e.target.value),
    []
  );

  useEffect(() => {
    if (debouncedValueSearch.trim() && !!debouncedValueSearch.trim()) {
      setFilters((prev) => ({
        ...prev,
        userId: value === 'userId' ? debouncedValueSearch.trim() : null,
        title: value === 'title' ? debouncedValueSearch.trim() : null,
      }));
    } else {
      if (!valueSearch) {
        setFilters((prev) => ({
          ...prev,
          userId: null,
          title: null,
        }));
      }
    }
  }, [debouncedValueSearch, value, valueSearch, setFilters]);
  return (
    <div className="flex items-center justify-between py-3 border px-2">
      <div className="flex items-center space-x-1">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger
            className={cn('flex items-center gap-2 w-[105px]')}
            aria-label="Select account"
          >
            <SelectValue placeholder="Select an account">
              <span className={cn('ml-2')}>
                {valueFilter.find((item) => item.id === value)?.text}
              </span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {valueFilter.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.text}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder="Search posts..."
          value={valueSearch}
          onChange={handleChange}
          className="h-10 w-[150px] lg:w-[250px]"
        />
      </div>
      <div className="flex items-center gap-3">
        <Button variant={'outline'}>
          <ListFilter />
        </Button>
        <Button variant={'secondary'} className="w-20 bg-green-600 hover:bg-green-400">
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default TableToolbar;
