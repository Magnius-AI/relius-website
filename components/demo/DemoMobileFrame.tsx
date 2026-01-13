'use client';

import { Signal, Wifi, Battery } from 'lucide-react';

interface DemoMobileFrameProps {
  children: React.ReactNode;
}

export function DemoMobileFrame({ children }: DemoMobileFrameProps) {
  return (
    <div className="flex justify-center">
      {/* Phone outer bezel */}
      <div className="relative w-[280px] sm:w-[320px] bg-gray-900 rounded-[40px] p-2 shadow-2xl">
        {/* Screen */}
        <div className="relative bg-white rounded-[32px] overflow-hidden">
          {/* Notch/Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-50" />

          {/* Status bar */}
          <div className="h-10 bg-white flex items-center justify-between px-6 pt-2">
            <span className="text-xs font-medium text-gray-900">9:41</span>
            <div className="flex items-center gap-1 text-gray-900">
              <Signal className="w-3.5 h-3.5" />
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-3.5" />
            </div>
          </div>

          {/* App content */}
          <div className="h-[500px] sm:h-[580px] overflow-hidden bg-gray-50">
            {children}
          </div>

          {/* Home indicator */}
          <div className="h-8 bg-white flex items-center justify-center">
            <div className="w-32 h-1 bg-gray-900 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
