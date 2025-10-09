import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({ ratings }) => {

    return (
        <div>
            <ResponsiveContainer width='100%' height={300}  >
                <BarChart data={ratings} layout="vertical">
                    <XAxis type='number' dataKey="count" />
                    <YAxis type="category" dataKey="name" />
                    <Bar dataKey="count" fill='green' />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;