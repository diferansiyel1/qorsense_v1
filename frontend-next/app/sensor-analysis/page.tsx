"use client";

import { MetricCard } from "@/components/MetricCard";
import { Charts } from "@/components/Charts";
import { AnalysisMetrics } from "@/types";

// Mock data for demonstration
const mockSensorData = Array.from({ length: 100 }, (_, i) => Math.sin(i * 0.1) + Math.random() * 0.2);
const mockMetrics: AnalysisMetrics = {
    bias: 0.021,
    slope: 0.003,
    noise_std: 1.15,
    hysteresis: 0.48,
    hurst: 0.92,
    hurst_r2: 0.95,
    snr_db: 15,
    complexity: 0.5,
    prediction_error: 0.1
};

export default function SensorAnalysisPage() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4 text-sm font-medium">
                <a className="text-[#92adc9] hover:text-white transition-colors" href="#">Qorsense</a>
                <span className="text-[#92adc9]">/</span>
                <a className="text-[#92adc9] hover:text-white transition-colors" href="#">Sensor Analysis</a>
                <span className="text-[#92adc9]">/</span>
                <span className="text-white">Sensor ID #4A5568</span>
            </div>

            <div className="flex flex-wrap justify-between gap-3 mb-8">
                <div className="flex min-w-72 flex-col gap-1">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Sensor Analysis Detail</h1>
                    <p className="text-[#92adc9] text-base font-normal leading-normal">Detailed performance metrics for Sensor ID #4A5568</p>
                </div>
                <button className="flex h-11 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-5 bg-gradient-to-r from-primary-start to-primary-end text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                    <span className="truncate">New Report</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-1 bg-slate-gray p-6 rounded-xl flex flex-col items-center justify-center border border-slate-gray/50 hover:border-primary/50 transition-colors">
                    <p className="text-white text-lg font-medium leading-normal mb-4">Sensor Health Score</p>
                    <div className="relative w-48 h-48">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4A5568" strokeDasharray="100, 100" strokeWidth="3"></path>
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#D69E2E" strokeDasharray="82, 100" strokeLinecap="round" strokeWidth="3" transform="rotate(-90 18 18)"></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl font-bold text-status-yellow">82</span>
                        </div>
                    </div>
                    <p className="text-[#92adc9] text-sm mt-4">Status: Warning</p>
                </div>

                <div className="lg:col-span-2 grid grid-cols-2 xl:grid-cols-3 gap-4">
                    <MetricCard title="Bias" value="0.021" subValue="+0.1%" status="Green" />
                    <MetricCard title="Slope" value="0.003" subValue="+0.4%" status="Green" />
                    <MetricCard title="Noise" value="1.15%" subValue="-0.2%" status="Red" />
                    <MetricCard title="Hysteresis" value="0.48%" subValue="+0.05%" status="Green" />
                    <MetricCard title="DFA" value="0.92" subValue="+0.11%" status="Green" />
                </div>
            </div>

            <Charts data={mockSensorData} windowSize={10} metrics={mockMetrics} />
        </div>
    );
}
