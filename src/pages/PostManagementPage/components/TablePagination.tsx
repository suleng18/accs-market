import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { IParams, IPost } from '@/types';
import { ChevronLeftIcon, ChevronRightIcon, ChevronFirst, ChevronLast } from 'lucide-react';
import { FC } from 'react';
interface TablePaginationProps {
  filters: Required<IParams>;
  total: number;
  isLoading: boolean;
  itemSelected: IPost[];
  handleChangePerPage: (value: number) => void;
  handleChangePage: (value: number) => void;
}

const TablePagination: FC<TablePaginationProps> = ({
  filters,
  total,
  isLoading,
  itemSelected,
  handleChangePage,
  handleChangePerPage,
}) => {
  return (
    <div className="flex items-center justify-between  px-2 py-3 w-full border border-t-0">
      <div className="flex-1 text-sm text-muted-foreground">
        {itemSelected.length} of {filters._limit} row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${filters._limit}`}
            onValueChange={(value) => handleChangePerPage(Number(value))}
            disabled={isLoading}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={filters._limit} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {filters._page} of {Math.ceil(total / filters._limit)}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => handleChangePage(1)}
            disabled={filters._page === 1 || isLoading}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronFirst className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => handleChangePage(filters._page - 1)}
            disabled={filters._page === 1 || isLoading}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => handleChangePage(filters._page + 1)}
            disabled={filters._page === Math.ceil(total / filters._limit) || isLoading}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => handleChangePage(Math.ceil(total / filters._limit))}
            disabled={filters._page === Math.ceil(total / filters._limit) || isLoading}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronLast className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
