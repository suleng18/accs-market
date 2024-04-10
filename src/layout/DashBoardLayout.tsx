import { Button } from '@/components/ui/button';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

type tabsType = 'subcription' | 'revenue';

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<tabsType>('subcription');

  const listButton = useMemo(
    () =>
      [
        {
          id: 'subcription',
          text: 'Subcription',
        },
        {
          id: 'revenue',
          text: 'Revenue',
        },
      ] as const,
    []
  );
  const handleClick = useCallback(
    (value: tabsType) => {
      navigate(value);
      setValue(value);
    },
    [navigate]
  );
  return (
    <div className="my-5  flex flex-col gap-4 px-10 ">
      <h3 className="text-3xl font-bold tracking-tight text-start">Dashboard</h3>
      <div className="flex gap-2 ">
        {listButton.map((item) => (
          <Button
            size={'sm'}
            key={item.id}
            variant={value === item.id ? 'default' : 'outline'}
            onClick={() => handleClick(item.id)}
            className="px-10 rounded-full"
          >
            {item.text}
          </Button>
        ))}
      </div>
      <div className="my-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
