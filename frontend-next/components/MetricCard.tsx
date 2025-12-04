import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
    title: string;
    value: string | number;
    subValue?: string;
    subLabel?: string;
    status?: "Green" | "Yellow" | "Red" | "Neutral";
    className?: string;
}

export function MetricCard({ title, value, subValue, subLabel, status = "Neutral", className }: MetricCardProps) {
    let statusColor = "text-muted-foreground";
    if (status === "Green") statusColor = "text-status-green";
    if (status === "Yellow") statusColor = "text-status-yellow";
    if (status === "Red") statusColor = "text-status-red";

    return (
        <Card className={cn("bg-slate-gray border-slate-gray/50 hover:border-primary/50 transition-colors", className)}>
            <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-white">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-1">
                    <div className="text-3xl font-bold text-white tracking-tight">
                        {value}
                    </div>
                    {(subValue || subLabel) && (
                        <div className={cn("text-sm font-medium", statusColor)}>
                            {subValue} {subLabel && <span className="text-muted-foreground font-normal ml-1">{subLabel}</span>}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
