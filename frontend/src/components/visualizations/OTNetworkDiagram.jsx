import { useState } from "react";

const securityLayers = [
  { level: "ENTERPRISE IT NETWORK", title: "Level 4 Enterprise Business Systems", desc: "ERP, Cloud Analytics, Corporate Active Directory", color: "text-blue-400" },
  { level: "INDUSTRIAL DMZ", title: "Level 3.5 Perimeter Firewall & DMZ", desc: "Jump Hosts, Patch Servers, Unidirectional Gateways", color: "text-amber-400" },
  { level: "OT MANUFACTURING NETWORK", title: "Level 3 Operations & Control", desc: "AVEVA PI Historian, SCADA Servers, HMI Workstations", color: "text-sky-400" },
  { level: "CONTROL ZONE", title: "Level 1 & 2 Direct Process Control", desc: "PLCs, RTUs, Safety Instrumented Systems (SIS)", color: "text-emerald-400" },
  { level: "FIELD INSTRUMENTATION", title: "Level 0 Process Sensing & Physical Assets", desc: "Sensors, Valves, Transmitters, Actuators", color: "text-slate-400" },
];

export default function OTNetworkDiagram() {
  const [activeLayer, setActiveLayer] = useState(1);

  return (
    <div className="panel bg-[#091322] border border-sky-500/20 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-md relative overflow-hidden mt-8">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-5 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-widest">
              ISA/IEC 62443 INDUSTRIAL CYBERSECURITY ARCHITECTURE
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            Perimeter Security & Unidirectional Network Segmentation
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-2 rounded-xl font-mono text-xs text-emerald-400">
          <span>✓ ZERO-TRUST ENFORCED</span>
        </div>
      </div>

      {/* DIAGRAM LAYERS */}
      <div className="space-y-3">
        {securityLayers.map((layer, idx) => {
          const isSelected = activeLayer === idx;
          return (
            <div
              key={layer.level}
              onClick={() => setActiveLayer(idx)}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer relative ${
                isSelected
                  ? "bg-sky-500/15 border-sky-400 text-white shadow-lg shadow-sky-500/10 scale-[1.01]"
                  : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border border-white/10 ${layer.color} bg-white/5`}>
                    0{idx + 1}
                  </span>
                  <div>
                    <span className={`font-mono text-[10px] uppercase font-bold tracking-widest block ${layer.color}`}>
                      {layer.level}
                    </span>
                    <h4 className="font-display text-base font-bold text-white">{layer.title}</h4>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  {layer.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SECURITY TAGS FOOTER */}
      <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
        <span className="bg-sky-500/10 border border-sky-400/20 px-3 py-1.5 rounded-lg text-sky-400">ISA/IEC 62443 CERTIFIED</span>
        <span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg text-emerald-400">UNIDIRECTIONAL DATA GATEWAYS</span>
        <span className="bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg text-amber-400">FIREWALL DMZ SEGMENTATION</span>
        <span className="bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg text-blue-400">ENCRYPTED INDUSTRIAL VPN</span>
      </div>
    </div>
  );
}
