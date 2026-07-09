"use client";

import React, { useState } from 'react';
import { useJourney } from '@/context/JourneyContext';
import { WheelOfLifeDimension } from '@/types/journey';
import { Compass, Sparkles, CheckCircle2, Info, HelpCircle } from 'lucide-react';

export default function HolisticLifeWheelSection() {
  const { data } = useJourney();
  const { wheelOfLife } = data;

  const [activeDimensionId, setActiveDimensionId] = useState<string>(
    wheelOfLife[0]?.id || 'wheel-career'
  );

  const [hoveredDimension, setHoveredDimension] = useState<WheelOfLifeDimension | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  const activeDimension =
    wheelOfLife.find((d) => d.id === activeDimensionId) || wheelOfLife[0];

  // Expanded SVG Radar/Wheel Chart coordinates (420x420 for spacious desktop text wrapping)
  const center = 210;
  const radius = 130;
  const labelRadius = 168;
  const numDimensions = wheelOfLife.length;

  const formatRadarLabelLines = (name: string, score: number): [string, string] => {
    if (name.includes('&')) {
      const parts = name.split('&').map((p) => p.trim());
      return [`${parts[0]} &`, `${parts[1]} (${score})`];
    }
    const parts = name.split(' ');
    if (parts.length > 1) {
      return [parts[0], `${parts.slice(1).join(' ')} (${score})`];
    }
    return [name, `(${score})`];
  };

  const getCoordinates = (index: number, score: number, customRadius?: number) => {
    const angle = (Math.PI * 2 * index) / numDimensions - Math.PI / 2;
    const distance = customRadius !== undefined ? customRadius : (score / 10) * radius;
    const x = center + distance * Math.cos(angle);
    const y = center + distance * Math.sin(angle);
    return { x, y, angle };
  };

  const radarPolygonPoints = wheelOfLife
    .map((d, index) => {
      const { x, y } = getCoordinates(index, d.score);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <section
      id="holistic-life"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1128] via-[#0D1636] to-[#0A1128] border-y border-slate-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            21DC & TiE Chennai Wheel of Life
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            A Holistic Life Journey
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            &ldquo;Self-employment did not only change how I worked. It changed how I experienced life. It gave me greater responsibility, but also more freedom to align work, family, purpose, and time.&rdquo;
          </p>
        </div>

        {/* Two-Column Expanded Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Fully Expanded Interactive SVG Wheel + Hover Tooltips */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative p-6 sm:p-10 rounded-3xl bg-navy-card border border-slate-800 shadow-2xl w-full flex flex-col items-center overflow-visible">
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-xs font-mono text-cyan-accent uppercase tracking-widest font-bold">
                  Interactive Balance Wheel
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-cyan-accent" />
                  Hover aspect for tip • Click to expand
                </span>
              </div>

              {/* Floating Tooltip Box when Hovering Over Wheel Nodes or Aspects */}
              {hoveredDimension && (
                <div className="absolute top-4 right-4 z-30 max-w-xs p-3.5 rounded-2xl bg-[#081026]/95 border border-cyan-400/60 shadow-2xl backdrop-blur-md text-left transition-all duration-200 pointer-events-none">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {hoveredDimension.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                      {hoveredDimension.score}/10
                    </span>
                  </div>
                  <p className="text-[12px] text-slate-300 line-clamp-3 leading-snug">
                    {hoveredDimension.reflection}
                  </p>
                  <span className="mt-1.5 inline-block text-[11px] text-cyan-accent font-semibold">
                    💡 Click aspect to view full reflection →
                  </span>
                </div>
              )}

              {/* Expanded Desktop SVG Canvas (420x420) */}
              <svg
                viewBox="0 0 420 420"
                className="w-full max-w-[380px] sm:max-w-[440px] overflow-visible my-4"
              >
                {/* Background Concentric Rings (2, 4, 6, 8, 10) */}
                {[2, 4, 6, 8, 10].map((level) => (
                  <g key={level}>
                    <circle
                      cx={center}
                      cy={center}
                      r={(level / 10) * radius}
                      fill="none"
                      stroke="#1E2D58"
                      strokeWidth="1"
                      strokeDasharray={level === 10 ? 'none' : '3 3'}
                    />
                    {level === 10 && (
                      <text
                        x={center + 4}
                        y={center - radius + 12}
                        fill="#64748b"
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        10
                      </text>
                    )}
                  </g>
                ))}

                {/* Spoke lines */}
                {wheelOfLife.map((_, idx) => {
                  const { x, y } = getCoordinates(idx, 10);
                  return (
                    <line
                      key={idx}
                      x1={center}
                      y1={center}
                      x2={x}
                      y2={y}
                      stroke="#1E2D58"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Radar Area Polygon */}
                <polygon
                  points={radarPolygonPoints}
                  fill="rgba(6, 182, 212, 0.22)"
                  stroke="#06B6D4"
                  strokeWidth="2.5"
                />

                {/* Nodes around radar & Perimeter Text Labels */}
                {wheelOfLife.map((dim, idx) => {
                  const { x, y } = getCoordinates(idx, dim.score);
                  const labelCoords = getCoordinates(idx, 10, labelRadius);
                  const isSelected = dim.id === activeDimensionId;
                  const isHovered = hoveredDimension?.id === dim.id;

                  // Determine text alignment depending on angle
                  let textAnchor: 'middle' | 'start' | 'end' = 'middle';
                  if (labelCoords.x < center - 20) textAnchor = 'end';
                  if (labelCoords.x > center + 20) textAnchor = 'start';

                  const [line1, line2] = formatRadarLabelLines(dim.name, dim.score);

                  return (
                    <g
                      key={dim.id}
                      onClick={() => setActiveDimensionId(dim.id)}
                      onMouseEnter={() => setHoveredDimension(dim)}
                      onMouseLeave={() => setHoveredDimension(null)}
                      className="cursor-pointer group"
                    >
                      {/* Aspect Spoke Label on Wheel Perimeter (2-Line Text Wrap) */}
                      <text
                        x={labelCoords.x}
                        y={labelCoords.y}
                        textAnchor={textAnchor}
                        className={`text-[10.5px] sm:text-[11.5px] font-semibold transition-all select-none ${
                          isSelected || isHovered
                            ? 'fill-cyan-400 font-bold'
                            : 'fill-slate-300 hover:fill-white'
                        }`}
                      >
                        <tspan x={labelCoords.x} dy="-4">
                          {line1}
                        </tspan>
                        <tspan x={labelCoords.x} dy="14">
                          {line2}
                        </tspan>
                      </text>

                      {/* Radar Interactive Node Circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected || isHovered ? 9 : 6}
                        fill={isSelected ? '#F59E0B' : isHovered ? '#38BDF8' : '#06B6D4'}
                        stroke="#0A1128"
                        strokeWidth="2.5"
                        className="transition-all duration-300"
                      />

                      {/* Invisible larger click target for easy clicking/hovering */}
                      <circle
                        cx={x}
                        cy={y}
                        r={18}
                        fill="transparent"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Fully Expanded Aspect Grid Buttons underneath SVG */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8 w-full">
                {wheelOfLife.map((dim) => {
                  const isSelected = dim.id === activeDimensionId;
                  return (
                    <button
                      key={dim.id}
                      onClick={() => setActiveDimensionId(dim.id)}
                      onMouseEnter={() => setHoveredDimension(dim)}
                      onMouseLeave={() => setHoveredDimension(null)}
                      className={`p-3 rounded-2xl text-xs font-semibold transition-all flex flex-col items-center justify-center gap-1 border ${
                        isSelected
                          ? 'bg-cyan-accent text-navy-deep border-cyan-accent shadow-lg shadow-cyan-accent/20 scale-[1.03]'
                          : 'bg-[#0A1128] text-slate-200 hover:text-white border-slate-800 hover:border-cyan-500/50'
                      }`}
                    >
                      <span className="whitespace-normal text-center leading-tight">
                        {dim.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          isSelected
                            ? 'bg-navy-deep/20 text-navy-deep'
                            : 'bg-slate-800 text-amber-400'
                        }`}
                      >
                        {dim.score}/10
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dimension Narrative & 21DC Alignment Card */}
          <div className="lg:col-span-5 space-y-6">
            {activeDimension && (
              <div className="p-8 sm:p-10 rounded-3xl bg-navy-card border border-cyan-accent/40 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-accent/15 border border-cyan-accent/30 text-cyan-accent text-xs font-bold uppercase tracking-wider">
                    Expanded Reflection
                  </span>
                  <span className="text-sm font-mono font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                    Score: {activeDimension.score}/10
                  </span>
                </div>

                <h3 className="text-3xl font-serif font-bold text-white mb-4">
                  {activeDimension.name}
                </h3>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  {activeDimension.reflection}
                </p>

                {/* Score Progress bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-mono">
                    <span>Current Satisfaction Level</span>
                    <span>{activeDimension.score * 10}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-accent to-amber-400 transition-all duration-500"
                      style={{ width: `${activeDimension.score * 10}%` }}
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-accent shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Part of the <span className="text-white font-semibold">21DC Goal Progression System</span> and TiE Chennai mentorship frameworks for maintaining holistic work-life balance.
                  </p>
                </div>
              </div>
            )}

            {/* Holistic Creed Callout */}
            <div className="p-6 rounded-3xl bg-[#081026] border border-slate-800/80 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Holistic Life Principle
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A fulfilling life is not built by maximizing career at the cost of health, relationships, or peace. Every aspect supports the others—protecting your inner calm elevates both personal joy and professional leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
