// @ts-nocheck
"use client"

import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Skeleton } from "@/components/ui/skeleton";

const generateData = () => [
  { name: "Ene", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Feb", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Mar", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Abr", total: Math.floor(Math.random() * 50) + 10 },
  { name: "May", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Jun", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Jul", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Ago", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Sep", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Oct", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Nov", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Dic", total: Math.floor(Math.random() * 50) + 10 },
];

export default function Overview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Generate data on the client-side to avoid hydration mismatch
    setData(generateData());
  }, []);

  if (!data.length) {
    return (
        <div className="h-[350px] w-full">
            <Skeleton className="h-full w-full" />
        </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
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
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
