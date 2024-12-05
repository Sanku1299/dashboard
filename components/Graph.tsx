"use client";

// import { TrendingUp } from "lucide-react";
// import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";
// const chartData = [
//   { {name: '0', uv: 75, pv: 2400, amt: 2400} },
//   { per: "25", percentile: 82 },
//   { per: "50", percentile: 69 },
//   { per: "75", percentile: 91 },
//   { per: "100", percentile: 84 },
// ];

// const chartConfig = {
//   percentile: {
//     label: "Your Percentile",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig;

// export function Graph() {
//   return (
//     <div className="pt-5">
//       <Card>
//         <CardHeader>
//           <h1 className="font-bold text-lg">Comparison Graph</h1>
//           <CardDescription className="text-sm pt-2 font-medium text-gray-600">
//             <span className="font-bold">You scored 40% percentile</span> which
//             is lower than the <br />
//             average percentile 72% of all engineers who took this assignment
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <ChartContainer config={chartConfig} data={chartData}>
//             <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
//               <CartesianGrid vertical={false} strokeDasharray={0} />
//               <XAxis
//                 dataKey="name"
//                 tickLine={false}
//                 axisLine={false}
//                 tickMargin={8}
//                 tickFormatter={(value) => value.slice(0, 3)}
//               />
//               <ChartTooltip
//                 cursor={false}
//                 content={<ChartTooltipContent hideLabel />}
//               />
//               <Line
//                 dataKey="desktop"
//                 type="natural"
//                 stroke="var(--color-desktop)"
//                 strokeWidth={2}
//                 dot={{
//                   fill: "var(--color-desktop)",
//                 }}
//                 activeDot={{
//                   r: 6,
//                 }}
//               />
//             </LineChart>
//           </ChartContainer>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "0",
    uv: 23,
  },
  {
    name: "25",
    uv: 50,
  },
  {
    name: "50",
    uv: 60,
  },
  {
    name: "75",
    uv: 80,
  },
  {
    name: "100",
    uv: 75,
  },
];

export function Graph() {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
