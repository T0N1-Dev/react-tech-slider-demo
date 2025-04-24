import { Label } from "@/components/ui/label";

type RangeBarProps = {
    value: number;
    setState: (value: number) => void;
    htmlFor: string;
    htmlForText: string;
    className?: string;
    id: string;
    minRange: number;
    maxRange: number;
    step?: number;
    unit?: string;
    styleBackgroundStyleInitValue: number;
    styleBackgroundStyleEndValue: number;
};

export const RangeBar = ({ 
    value, 
    setState, 
    htmlFor, 
    htmlForText, 
    className, 
    id, 
    minRange, 
    maxRange, 
    step = 1,
    unit = "px",
    styleBackgroundStyleInitValue, 
    styleBackgroundStyleEndValue 
}: RangeBarProps) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={`${htmlFor}`}>{htmlForText}</Label>
            <div className={`flex items-center gap-4 ${className}`} >
                <input
                id={id}
                type="range"
                min={`${minRange}`}
                max={`${maxRange}`}
                value={value}
                step={step}
                onChange={(e) => setState(Number(e.target.value))}
                className="flex-1 h-2 rounded-full appearance-none cursor-pointer bg-gray-100 border border-gray-200"
                style={{
                    background: `linear-gradient(to right, #7c05d8 0%, #7c05d8 ${styleBackgroundStyleInitValue}%, #f1f3f4 ${styleBackgroundStyleEndValue}%, #f1f3f4 100%)`,
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                }}
                />
                <span className="w-8 text-center">{value}{unit}</span>
            </div>
        </div>
    )
}