import { Button } from '@/components/ui/button';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

type tabsType = 'subcription' | 'revenue';

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<tabsType>('revenue');

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
    <div className="my-5 mx-1">
      <div className="flex gap-2 mx-3">
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

      {children}
    </div>
  );
};

export default DashboardLayout;
