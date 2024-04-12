import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = {
  title: string;
  email: string;
  color: string;
  date: Date;
};

const SettingsPage = () => {
  const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    color: yup
      .string()
      .required('Color is required')
      .matches(/^#[0-9A-F]{6}$/i, 'Must be a valid hex color'),
    date: yup.date().default(undefined).required('Date is required'),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    console.log(data);
    console.log(event);
  };

  const watchedDate = watch('date');
  const watchedColor = watch('color');

  const handleColorChange = (newColor: string) => {
    setValue('color', newColor);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:max-w-[800px] m-auto pt-24 sm:max-w-[80%] xs:max-w-[80%]"
    >
      <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1 ">
        <div className="">
          <Label htmlFor="title" className="block w-full ml-1 text-base font-semibold text-left">
            Title
          </Label>
          <Input {...register('title')} />
          {errors.title && (
            <span className="block w-full text-sm text-left text-red-600">
              {errors.title.message}
            </span>
          )}
        </div>
        <div>
          <Label htmlFor="email" className="block w-full ml-1 text-base font-semibold text-left">
            Email
          </Label>
          <Input {...register('email')} />
          {errors.email && (
            <span className="block w-full text-sm text-left text-red-600">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <Label htmlFor="color" className="block w-full ml-1 text-base font-semibold text-left">
            Background Color:
          </Label>
          <div className="flex items-center">
            <Input
              className="w-[80%]"
              {...register('color')}
              value={watchedColor}
              onChange={(e) => handleColorChange(e.target.value)}
            />
            <Input
              className="w-[20%]"
              value={watchedColor}
              {...register('color')}
              type="color"
              onChange={(e) => handleColorChange(e.target.value)}
            />
          </div>
          {errors.color && (
            <span className="block w-full text-sm text-left text-red-600">
              {errors.color.message}
            </span>
          )}
        </div>
        <div>
          <Label htmlFor="date" className="block w-full ml-1 text-base font-semibold text-left">
            Active date:
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !watchedDate && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {watchedDate ? format(watchedDate, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                {...register('date')}
                selected={watchedDate}
                onSelect={(selectedDate) => {
                  if (!selectedDate) return;
                  setValue('date', selectedDate, { shouldValidate: true });
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.date && (
            <span className="block w-full text-sm text-left text-red-600">
              {errors.date.message}
            </span>
          )}
        </div>
      </div>

      <div className="mt-10">
        <Button className="w-40" type="submit" variant="destructive" size="sm">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SettingsPage;
