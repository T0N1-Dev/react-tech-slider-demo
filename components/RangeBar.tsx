import { Label } from "@/components/ui/label";

type RangeBarProps = {
    borderWidth: number;
    setBorderWidth: (value: number) => void;
};

export const RangeBar = ({ borderWidth, setBorderWidth }: RangeBarProps) => {
    return (
        <div className="space-y-2">
            <Label htmlFor="borderWidth">Border Width</Label>
            <div className="flex items-center gap-4">
                <input
                id="borderWidth"
                type="range"
                min="0"
                max="10"
                value={borderWidth}
                onChange={(e) => setBorderWidth(Number(e.target.value))}
                className="flex-1 h-2 rounded-full appearance-none cursor-pointer bg-gray-100 border border-gray-200"
                style={{
                    background: `linear-gradient(to right, #7c05d8 0%, #7c05d8 ${borderWidth * 10}%, #f1f3f4 ${borderWidth * 10}%, #f1f3f4 100%)`,
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                }}
                />
                <span className="w-8 text-center">{borderWidth}px</span>
            </div>
        </div>
    )
}