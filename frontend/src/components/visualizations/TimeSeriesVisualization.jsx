import { useState, useEffect } from "react";

const initialMetrics = [
  { name: "TURBINE TEMP", tag: "PI-TAG-1048", val: 482.4, unit: "°C", status: "OPTIMAL", trend: "+0.4%", min: 400, max: 550 },
  { name: "HEADER PRESSURE", tag: "PI-TAG-2091", val: 14.8, unit: "bar", status: "STABLE", trend: "0.0%", min: 10, max: 20 },
  { name: "PIPELINE FLOW", tag: "PI-TAG-3012", val: 1240, unit: "m³/h", status: "NOMINAL", trend: "+1.2%", min: 1000, max: 1500 },
  { name: "GENERATOR RPM", tag: "PI-TAG-4089", val: 3600, unit: "RPM", status: "LOCKED", trend: "0.0%", min: 3000, max: 4000 },
  { name: "PLANT ENERGY CONSUMPTION", tag: "PI-TAG-5104", val: 84.2, unit: "MW", status: "EFFICIENT", trend: "-2.1%", min: 60, max: 100 },
  { name: "PRODUCTION YIELD", tag: "PI-TAG-6022", val: 98.6, unit: "%", status: "TARGET EXCEEDED", trend: "+0.8%", min: 90, max: 100 },
];

export default function TimeSeriesVisualization() {
  const [metrics, setMetrics] = useState(initialMetrics);
  const [activeTagIndex, setActiveTagIndex] = useState(0);

  // Live simulation jitter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((m) => {
          const delta = (Math.random() - 0.5) * (m.val > 100 ? 2 : 0.2);
          const newVal = Number((m.val + delta).toFixed(1));
          return { ...m, val: newVal };
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const activeMetric = metrics[activeTagIndex];

  return (
    <div className="panel bg-[#091322] border border-sky-500/20 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-md relative overflow-hidden">
      {/* HEADER BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-5 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-widest">
              AVEVA PI SYSTEM // ASSET FRAMEWORK TIME-SERIES ARCHIVE
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            Real-Time Plant Operational Telemetry
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl font-mono text-xs text-slate-300">
          <span className="text-emerald-400">● LIVE ENGINE CONNECTED</span>
          <span className="text-slate-500">|</span>
          <span>BUFFER: 100% HEALTH</span>
        </div>
      </div>

      {/* METRICS GRID SELECTOR */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {metrics.map((m, idx) => {
          const isSelected = activeTagIndex === idx;
          return (
            <button
              key={m.name}
              onClick={() => setActiveTagIndex(idx)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 relative group ${
                isSelected
                  ? "bg-sky-500/15 border-sky-400 text-white shadow-lg shadow-sky-500/20"
                  : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05] hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-1">
                <span>{m.tag}</span>
                <span className="text-emerald-400 font-semibold">{m.status}</span>
              </div>
              
              <div className="font-display text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                {m.name}
              </div>

              <div className="flex items-baseline justify-between">
                <span className="font-mono text-2xl font-bold text-white">
                  {m.val} <span className="text-xs font-normal text-sky-400">{m.unit}</span>
                </span>
                <span className="font-mono text-xs text-emerald-400">{m.trend}</span>
              </div>

              {/* Progress bar line */}
              <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-sky-400 to-emerald-400 h-full transition-all duration-500"
                  style={{ width: `${((m.val - m.min) / (m.max - m.min)) * 100}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* LIVE WAVEFORM GRAPH DISPLAY */}
      <div className="bg-[#050b14] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-sky-400 font-bold">STREAM: {activeMetric.name}</span>
            <span>TAG: {activeMetric.tag}</span>
          </div>
          <span>SAMPLING: 100ms INTERPOLATED</span>
        </div>

        {/* SVG ANIMATED WAVEFORM GRAPH */}
        <div className="relative h-44 w-full flex items-end">
          <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 150">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 100 Q 50 60, 100 90 T 200 40 T 300 80 T 400 30 T 500 70 L 500 150 L 0 150 Z"
              fill="url(#chartGradient)"
            />
            <path
              d="M 0 100 Q 50 60, 100 90 T 200 40 T 300 80 T 400 30 T 500 70"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              className="animate-line-wave"
            />
          </svg>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-slate-400">
          <div><span className="text-slate-500 block text-[10px]">MIN BOUND</span>{activeMetric.min} {activeMetric.unit}</div>
          <div><span className="text-slate-500 block text-[10px]">MAX BOUND</span>{activeMetric.max} {activeMetric.unit}</div>
          <div><span className="text-slate-500 block text-[10px]">CURRENT VALUE</span><strong className="text-white">{activeMetric.val} {activeMetric.unit}</strong></div>
          <div><span className="text-slate-500 block text-[10px]">HISTORIAN HEALTH</span><span className="text-emerald-400">100% OK</span></div>
        </div>
      </div>
    </div>
  );
}
