"use client";

import { MetricCard } from "@/components/MetricCard";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';

const data = [
    { time: '12 AM', value: 0.24 },
    { time: '1 AM', value: 0.28 },
    { time: '2 AM', value: 0.32 },
    { time: '3 AM', value: 0.35 },
    { time: '4 AM', value: 0.38 },
    { time: '5 AM', value: 0.42 },
    { time: '6 AM', value: 0.45 },
    { time: '7 AM', value: 0.48 },
    { time: '8 AM', value: 0.52 },
    { time: '9 AM', value: 0.55 },
    { time: '10 AM', value: 0.58 },
    { time: '11 AM', value: 0.62 },
    { time: '12 PM', value: 0.65 },
    { time: '1 PM', value: 0.72 },
    { time: '2 PM', value: 0.75 },
    { time: '3 PM', value: 0.78 },
    { time: '4 PM', value: 0.82 },
    { time: '5 PM', value: 0.85 },
    { time: '6 PM', value: 0.88 },
    { time: '7 PM', value: 0.92 },
    { time: '8 PM', value: 0.95 },
];

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-white text-3xl font-bold mb-2">Welcome back, Engineer</h1>
                    <p className="text-muted-foreground">Here's an overview of the system performance.</p>
                </div>
                <div className="flex items-center gap-2 bg-slate-gray/50 px-3 py-1.5 rounded-full border border-slate-gray">
                    <div className="w-2 h-2 rounded-full bg-status-green animate-pulse"></div>
                    <span className="text-status-green text-sm font-medium">System Status: Normal</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <MetricCard
                    title="Total Sensors Monitored"
                    value="24"
                    subValue="+2 since last week"
                    status="Green"
                />
                <MetricCard
                    title="Critical Alerts"
                    value="2"
                    subValue="Action required"
                    status="Red"
                />
                <MetricCard
                    title="Average System Health"
                    value="87%"
                    subValue="-3% from yesterday"
                    status="Red"
                />
            </div>

            <div className="bg-slate-gray rounded-xl p-6 border border-slate-gray/50">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-1">Global Sensor Deviation</h2>
                        <p className="text-muted-foreground text-sm">Aggregate deviation from baseline across all sensors.</p>
                    </div>
                    <div className="flex bg-[#1a2634] rounded-lg p-1">
                        <button className="px-4 py-1.5 text-sm font-medium text-white bg-primary rounded-md shadow-sm">Last 24h</button>
                        <button className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-white transition-colors">Last 7d</button>
                        <button className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-white transition-colors">Last 30d</button>
                    </div>
                </div>

                <div className="mb-6">
                    <span className="text-4xl font-bold text-white">0.21%</span>
                    <span className="text-status-green text-lg font-medium ml-2">+0.02%</span>
                </div>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1a202c', border: 'none', borderRadius: '8px', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#7C3AED"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                            />
                            <XAxis
                                dataKey="time"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                interval={3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
