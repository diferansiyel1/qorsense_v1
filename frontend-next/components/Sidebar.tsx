"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, PieChart, FileText, Settings, Box } from "lucide-react";

const navItems = [
    {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Sensor Analysis",
        href: "/sensor-analysis",
        icon: PieChart,
    },
    {
        title: "Reports",
        href: "/reports",
        icon: FileText,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="flex w-64 flex-col bg-[#111a22] p-4 text-white h-screen fixed left-0 top-0 border-r border-slate-gray/50">
            <div className="flex-grow">
                <div className="flex items-center gap-3 p-2 mb-8">
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-start to-primary-end rounded-lg shadow-lg shadow-primary/20">
                        <Box className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Qorsense</span>
                </div>
                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                                    isActive
                                        ? "bg-gradient-to-r from-primary-start to-primary-end shadow-md shadow-primary/20"
                                        : "hover:bg-slate-gray/50 text-gray-400 hover:text-white"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "w-5 h-5 transition-colors",
                                        isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                                    )}
                                />
                                <p className={cn(
                                    "text-sm font-medium leading-normal transition-colors",
                                    isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                                )}>
                                    {item.title}
                                </p>
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="border-t border-slate-gray/50 pt-4 mt-4">
                <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-gray/50 transition-colors cursor-pointer">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-slate-gray"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAP2X7ema6KvBnOjwm6HMoL5ZtHOJm-G57mySRhKlNaF_-GDd_KVwbrPXdHnFb5ETJWUf5Sd_puLS4_eLpoySHMEtcB560CRazXtRlv8NyW2Z0c1JLBGyRw1XL2CfPIlK-Y3Q3kG2H5w5U9MP8h46udSvCmz2Gvftw9Dn2TeWknJ0p_6nuGf-SYqGP3LUuNFlOY_Rtowu9s01za2gmBcm_zXA-xDC4MldGgJlccQGvnO2qVhrnk0AiY3wrtSHuYf6QJ3ctBbVlLtwKO")' }}
                    />
                    <div className="flex flex-col">
                        <h1 className="text-white text-sm font-semibold leading-normal">John Doe</h1>
                        <p className="text-[#92adc9] text-xs font-medium leading-normal">System Admin</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
