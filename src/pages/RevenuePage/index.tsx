import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { colors, dataRevenue } from '@/constants';
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const RevenuePage = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
      </CardHeader>
      <CardContent className="pl-2xl:h-[500px] lg:h-[400px] sm:h-[350px] xs:h-[300px]">
        <ResponsiveContainer width="100%" height={'100%'}>
          <BarChart data={dataRevenue}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]}>
              {dataRevenue.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenuePage;
