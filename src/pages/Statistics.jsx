import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Statistics = () => {
    const data = [
        { name: 'Your Donation', value: 30 },
        { name: 'Total Donation', value: 70 },
      ];
      const COLORS = ['#00C49F', '#FF444A'];
      return (
        <div className='w-4/5 mx-auto flex justify-center'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    );
};

export default Statistics;