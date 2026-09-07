'use client';

import React, { useState, useRef, useCallback } from 'react';
import { transformationLooks, TransformationLook } from '@/data/mockData';
import BookingModal from '@/components/BookingModal';
import { FaArrowsAltH, FaMagic } from 'react-icons/fa';

interface BeforeAfterSliderProps {
  initialLookIndex?: number;
  showLookTabs?: boolean;
}

export default function BeforeAfterSlider({
  initialLookIndex = 0,
  showLookTabs = true,
}: BeforeAfterSliderProps) {
  const [activeLookIndex, setActiveLookIndex] = useState<number>(initialLookIndex);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const look: TransformationLook = transformationLooks[activeLookIndex] || transformationLooks[0];

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className="w-full">
      {/* Look Selector Tabs */}
      {showLookTabs && (
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          {transformationLooks.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveLookIndex(idx);
                setSliderPosition(50);
              }}
              className={`cursor-pointer px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeLookIndex === idx
                  ? 'bg-rosegold text-black font-semibold shadow-[0_0_25px_rgba(183,110,121,0.5)] scale-105'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <FaMagic size={11} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main Comparison Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Slider Box (7 cols) */}
        <div className="lg:col-span-7">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="slider"
            aria-label="Image comparison slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden select-none cursor-ew-resize border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] focus:outline-none focus:ring-2 focus:ring-rosegold"
          >
            {/* Background Image: AFTER (Ultra-HD Look) */}
            <img
              src={look.afterImage}
              alt={look.afterLabel}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Foreground Image: BEFORE (Natural / Bare Skin with CSS clip-path) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={look.beforeImage}
                alt={look.beforeLabel}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none bg-black/70 backdrop-blur-md border border-white/15 px-3.5 py-1 rounded-full text-xs font-semibold text-gray-200">
              {look.beforeLabel}
            </div>

            <div className="absolute top-4 right-4 z-20 pointer-events-none bg-rosegold text-black px-3.5 py-1 rounded-full text-xs font-bold shadow-lg shadow-rosegold/30">
              {look.afterLabel}
            </div>

            {/* Center Draggable Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-[2px] h-full bg-rosegold shadow-[0_0_12px_rgba(183,110,121,0.9)]" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10 h-10 rounded-full bg-rosegold text-black flex items-center justify-center shadow-[0_0_20px_rgba(183,110,121,0.9)] border-2 border-white">
                <FaArrowsAltH size={15} />
              </div>
            </div>

            {/* Subtle Drag Hint Overlay on First Load */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-[11px] text-gray-300 border border-white/10 flex items-center gap-1.5">
              <span>Drag slider or use arrow keys</span>
            </div>
          </div>
        </div>

        {/* Look Details & Booking CTA (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
          <div className="inline-flex items-center gap-2 text-rosegold text-xs uppercase tracking-widest font-semibold">
            <FaMagic />
            <span>{look.subtitle}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
            {look.title}
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {look.description}
          </p>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-gray-300">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Featured Service:</span>
              <span className="text-white font-medium">{look.serviceName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Application Time:</span>
              <span className="text-white font-medium">Approx. 2 Hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Durability:</span>
              <span className="text-rosegold font-semibold">16+ Hours Waterproof</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer w-full py-4 bg-rosegold text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(183,110,121,0.5)] transition-all duration-300 text-sm flex items-center justify-center gap-2"
          >
            <FaMagic size={14} />
            <span>Book This Transformation</span>
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType="service"
        initialItemName={look.serviceName}
      />
    </div>
  );
}
