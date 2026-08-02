import { PieChart, Pie, Cell } from "recharts";

function AttendanceChart() {
    const data = [
        { name: "Attended", value: 25 },
        { name: "Not Attended", value: 5 }
    ];

    return (
        <PieChart width={300} height={300}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
            >
                {data.map((entry, index) => (
                    <Cell key={index} />
                ))}
            </Pie>
        </PieChart>
    );
}

export default AttendanceChart;