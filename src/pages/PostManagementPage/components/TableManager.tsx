import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IPost } from '@/types';
import { Eye } from 'lucide-react';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
interface TableManagerProps {
  data: IPost[] | undefined;
}
const TableManager: FC<TableManagerProps> = ({ data }) => {
  const naigate = useNavigate();
  const handleClick = useCallback(
    (id: number) => {
      naigate(`${id}`);
    },
    [naigate]
  );
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center font-bold text-sm">Id</TableHead>
          <TableHead className="text-center font-bold">User Id</TableHead>
          <TableHead className=" font-bold">Title</TableHead>
          <TableHead className="font-bold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-center text-base">{item.id}</TableCell>
            <TableCell className="font-medium text-center text-base">{item.userId}</TableCell>
            <TableCell className="font-medium text-start text-base">{item.title}</TableCell>
            <TableCell className="font-medium text-start text-base">
              <Button size={'icon'} variant={'ghost'} onClick={() => handleClick(item.id)}>
                <Eye />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableManager;
