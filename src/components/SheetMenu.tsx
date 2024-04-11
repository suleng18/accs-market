import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={'outline'} size={'sm'} className="2xl:hidden sm:block ">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
