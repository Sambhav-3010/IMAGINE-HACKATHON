"use client"

import { useEffect, useState } from "react"
import { TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

// Generate random value between min and max
const getRandomValue = (min: number, max: number) => 
  Math.floor(Math.random() * (max - min + 1)) + min

export default function Component() {
  const [data, setData] = useState([
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ])

  useEffect(() => {
    // Update data every 2 seconds
    const interval = setInterval(() => {
      setData(currentData => {
        // Remove first item and add new item
        const newData = [...currentData.slice(1)]
        const months = ["January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December"]
        
        // Get next month
        const lastMonth = currentData[currentData.length - 1].month
        const currentMonthIndex = months.indexOf(lastMonth)
        const nextMonthIndex = (currentMonthIndex + 1) % 12
        
        // Add new data point
        newData.push({
          month: months[nextMonthIndex],
          desktop: getRandomValue(50, 350)
        })
        
        return newData
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
        <div className="mb-28 p-4 rounded-lg flex justify-center items-center">
        <Card className="max-w-sm">
            <CardHeader className="pb-4">
                <CardTitle className="text-base">Line Chart - Real-time</CardTitle>
                <CardDescription className="text-sm">Live updates every 2s</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
                <ChartContainer config={chartConfig} className="h-[200px]">
                <LineChart
                    accessibilityLayer
                    data={data}
                    margin={{
                    left: 12,
                    right: 12,
                    top: 5,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                    fontSize={12}
                    />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                    dataKey="desktop"
                    type="linear"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                    />
                </LineChart>
                </ChartContainer>
            </CardContent>
                <CardFooter className="pt-0">
                    <div className="flex items-center gap-2 text-sm font-medium leading-none">
                    Web3 running successfully <TrendingUp className="h-4 w-4" />
                    </div>
                </CardFooter>
            </Card>
            <div>
                <div className="text-sm text-white mt-2 p-10">
                    <h1 className="text-4xl">Realtime Web3 perfomance monitoring.</h1>
                    <p className="py-4 text-base">Monitor your web3 application performance in realtime with our easy to use dashboard.</p>
                </div>
            </div>
        </div>
    </>
    
  )
}

