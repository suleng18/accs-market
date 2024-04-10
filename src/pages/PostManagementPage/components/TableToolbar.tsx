import { Input } from '@/components/ui/input';
import React from 'react';

const TableToolbar = () => {
  return (
    <div className="flex items-center justify-between my-2">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search posts..."
          value={''}
          onChange={() => {}}
          className="h-12 w-[150px] lg:w-[250px]"
        />
        {/* {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title="Status"
            options={statuses}
          />
        )} */}
        {/* {table.getColumn('priority') && (
          <DataTableFacetedFilter
            column={table.getColumn('priority')}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )} */}
      </div>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  );
};

export default TableToolbar;
