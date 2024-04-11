import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

const SettingsPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  // const labelInput = (nameLabel: string) => (
  //   <Label htmlFor={nameLabel} className="block w-full ml-1 text-lg font-semibold text-left">
  //     {`${nameLabel.slice(0, 1).toLocaleUpperCase()}${nameLabel.slice(1)}`}
  //   </Label>
  // );

  return (
    <div className="max-w-[800px] m-auto pt-24">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Label htmlFor="title" className="block w-full ml-1 text-base font-semibold text-left">
            Title
          </Label>
          <Input name="title" id="title" type="text" />
        </div>
        <div>
          <Label htmlFor="title" className="block w-full ml-1 text-base font-semibold text-left">
            Email
          </Label>
          <Input name="email" id="email" type="email" />
        </div>
        <div>
          <Label htmlFor="title" className="block w-full ml-1 text-base font-semibold text-left">
            Background Color:
          </Label>
          <div className="flex items-center">
            <Input className="w-[80%]" name="title" id="title" type="text" />
            <Input className="w-[20%]" name="title" id="title" type="color" />
          </div>
        </div>
        <div>
          <Label htmlFor="title" className="block w-full ml-1 text-base font-semibold text-left">
            Active date:
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mt-10">
        <Button className="w-40" type="submit" variant="destructive" size="sm" onClick={() => {}}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
