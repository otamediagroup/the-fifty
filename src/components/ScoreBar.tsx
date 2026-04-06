'use client';

import { useEffect, useState } from 'react';

interface ScoreBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color: string;
}

export default function ScoreBar({
  label,
  value,
  maxValue = 25,
  color,
}: ScoreBarProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const percentage = (value / maxValue) * 100;

  useEffect(() => {
    setAnimatedValue(value);
  }, [value]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-gray-400">{label}</span>
        <span className="text-gray-500">{value}</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${(animatedValue / maxValue) * 100}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
