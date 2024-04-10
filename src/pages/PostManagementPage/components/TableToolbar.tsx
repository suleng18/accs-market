import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ListFilter } from 'lucide-react';
const TableToolbar = () => {
  return (
    <div className="flex items-center justify-between py-3 border px-2">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search posts..."
          value={''}
          onChange={() => {}}
          className="h-10 w-[150px] lg:w-[250px]"
        />
        <Button variant={'outline'}>
          <ListFilter />
        </Button>
      </div>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  );
};

export default TableToolbar;
