'use client';
import React, { useState } from "react";

interface PriceRangeSelectorProps {
    min: number;
    max: number;
}

const PriceRangeSelector = ({ min, max }: PriceRangeSelectorProps) => {
    const [minPrice, setMinPrice] = useState(min);
    const [maxPrice, setMaxPrice] = useState(max);
    const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);

    // Helper function to calculate the percentage of the price value within the range
    const calculatePosition = (value: number) => {
        return ((value - min) / (max - min)) * 100;
    };

    // Function to handle the dragging of the selectors
    const handleDrag = (e: React.MouseEvent, type: "min" | "max") => {
        const sliderWidth = e.currentTarget.parentElement!.offsetWidth;
        const sliderLeft = e.currentTarget.parentElement!.getBoundingClientRect().left;
        const mouseX = e.clientX - sliderLeft;
        const percentage = Math.max(0, Math.min(1, mouseX / sliderWidth));
        const value = Math.round(min + percentage * (max - min));

        if (type === "min" && value < maxPrice) {
            setMinPrice(value);
        } else if (type === "max" && value > minPrice) {
            setMaxPrice(value);
        }
    };

    const handleMouseDown = (type: "min" | "max") => {
        setIsDragging(type);
    };

    const handleMouseUp = () => {
        setIsDragging(null);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            const sliderWidth = (e.target as HTMLElement).parentElement!.offsetWidth;
            const sliderLeft = (e.target as HTMLElement).parentElement!.getBoundingClientRect().left;
            const mouseX = e.clientX - sliderLeft;
            const percentage = Math.max(0, Math.min(1, mouseX / sliderWidth));
            const value = Math.round(min + percentage * (max - min));

            if (isDragging === "min" && value < maxPrice) {
                setMinPrice(value);
            } else if (isDragging === "max" && value > minPrice) {
                setMaxPrice(value);
            }
        }
    };

    React.useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="w-full max-w-lg mx-auto my-2">
            {/* Range Track */}
            <div className="flex items-center relative w-full h-2 bg-alice-blue-200 rounded">
                {/* Highlighted Range */}
                <div
                    className="absolute h-1 bg-alice-blue-400 rounded"
                    style={{
                        left: `${calculatePosition(minPrice)}%`,
                        width: `${calculatePosition(maxPrice) - calculatePosition(minPrice)}%`,
                    }}
                ></div>

                {/* Min Price Selector */}
                <div
                    className="absolute top-[-50%] translate-y-1/2 w-4 h-4 bg-lion-200 border-[3px] border-trans-100 rounded-full cursor-pointer"
                    style={{ left: `${calculatePosition(minPrice)}%`, transform: 'translateX(-50%)', zIndex: 1 }} // Lower z-index
                    onMouseDown={() => handleMouseDown("min")}
                ></div>

                {/* Max Price Selector */}
                <div
                    className="absolute top-[-50%] translate-y-1/2 w-4 h-4 bg-lion-200 border-[3px] border-trans-100 rounded-full cursor-pointer"
                    style={{ left: `${calculatePosition(maxPrice)}%`, transform: 'translateX(-50%)', zIndex: 1 }} // Lower z-index
                    onMouseDown={() => handleMouseDown("max")}
                ></div>
            </div>


            {/* Labels and Selected Range */}
            <div className="flex justify-between text-sm font-medium mt-2">
                <div>
                    <p className="text-[18px]">Min</p>
                    <p className="text-[12px]">₹{minPrice}</p>
                </div>
                <div>
                    <p className="text-[18px]">Max</p>
                    <p className="text-[12px]">₹{maxPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default PriceRangeSelector;
