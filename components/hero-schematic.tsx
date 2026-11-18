export default function HeroSchematic() {
  return (
    <div className="hero-panel w-full" aria-label="Illustration of a signal moving through hardware, computation and software layers">
      <div className="absolute left-6 top-6 z-10 flex items-center gap-2 font-mono-ui text-[10px] tracking-[.16em] text-[#b8d3d6]">
        <span className="dot"/> ENGINEERING / SYSTEM VIEW
      </div>
      <svg className="hero-svg" viewBox="0 0 570 520" role="img" aria-labelledby="hero-schematic-title">
        <title id="hero-schematic-title">A processing chip connected to a signal graph, code layers and validation stages</title>
        <g stroke="#6691a0" strokeWidth=".8" opacity=".32">
          {Array.from({length:12},(_,i)=><line key={`hv${i}`} x1={i*54} y1="0" x2={i*54} y2="520"/>)}
          {Array.from({length:11},(_,i)=><line key={`hh${i}`} x1="0" y1={i*52} x2="570" y2={i*52}/>)}
        </g>
        <circle cx="288" cy="254" r="188" stroke="#6f9fab" strokeDasharray="4 10" opacity=".23" fill="none"/>
        <circle cx="288" cy="254" r="151" stroke="#6f9fab" opacity=".26" fill="none"/>
        <circle cx="288" cy="254" r="115" stroke="#c6f57c" opacity=".20" fill="none"/>
        <path d="M78 154 H184 V208 H203 M368 212 H436 V130 H508" className="signal-path" stroke="#c6f57c" strokeWidth="2.1" fill="none"/>
        <path d="M75 354 H174 V303 H203 M370 290 H428 V367 H514" className="signal-path alt" stroke="#85bdfd" strokeWidth="2.1" fill="none"/>
        <path d="M286 120 V153 M286 361 V392" stroke="#c6f57c" opacity=".75" strokeWidth="2"/>
        <g fill="#142f3b" stroke="#739da6">
          <rect x="197" y="166" width="179" height="180" rx="13" stroke="#c6f57c" strokeWidth="1.4" fill="#102937"/>
          <rect x="217" y="186" width="139" height="139" rx="8" fill="#173540"/>
        </g>
        <g stroke="#82a6ac" strokeWidth="2">
          {Array.from({length:7},(_,i)=><g key={i}>
            <path d={`M${222+i*21} 165 v-13 M${222+i*21} 346 v13`}/>
            <path d={`M196 ${191+i*22} h-13 M376 ${191+i*22} h13`}/>
          </g>)}
        </g>
        <text x="286" y="233" textAnchor="middle" fill="#9fc5c8" fontFamily="monospace" fontSize="12" letterSpacing="2">SYSTEM</text>
        <text x="286" y="273" textAnchor="middle" fill="#ecf6ee" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="34" letterSpacing="-2">HW / SW</text>
        <text x="286" y="296" textAnchor="middle" fill="#c6f57c" fontFamily="monospace" fontSize="11" letterSpacing="3">INTEGRATION</text>
        <g fontFamily="monospace" fontSize="12">
          <rect x="34" y="105" width="126" height="58" rx="5" fill="#173542" stroke="#5d899b"/>
          <text x="50" y="128" fill="#8fb9c2" fontSize="9" letterSpacing="1">01 / SIGNAL</text>
          <path d="M49 145 h12 l8 -11 8 19 9 -21 9 13 h49" stroke="#c6f57c" strokeWidth="1.7" fill="none"/>
          <rect x="421" y="80" width="119" height="68" rx="5" fill="#173542" stroke="#5d899b"/>
          <text x="435" y="102" fill="#90b8c0" fontSize="9" letterSpacing="1">02 / CODE</text>
          <path d="M436 117 l-6 6 6 6 M445 116 h15 M445 126 h22 M485 117 l6 6 -6 6" stroke="#c6f57c" strokeWidth="1.6" fill="none"/>
          <rect x="36" y="346" width="121" height="66" rx="5" fill="#173542" stroke="#5d899b"/>
          <text x="51" y="369" fill="#90b8c0" fontSize="9" letterSpacing="1">03 / TEST</text>
          <text x="51" y="392" fill="#b0cfcc" fontSize="11">✓ ✓ ✓</text>
          <rect x="411" y="358" width="125" height="68" rx="5" fill="#173542" stroke="#5d899b"/>
          <text x="426" y="382" fill="#90b8c0" fontSize="9" letterSpacing="1">04 / DEPLOY</text>
          <path d="M426 402 H519" stroke="#5e8994"/>
          <path d="M426 402 h75" stroke="#c6f57c" strokeWidth="3"/>
        </g>
        <circle cx="436" cy="130" r="4" fill="#c6f57c" className="breathe"/>
        <circle cx="174" cy="303" r="4" fill="#85bdfd" className="breathe"/>
        <text x="35" y="481" fill="#83a7b0" fontSize="11" fontFamily="monospace" letterSpacing="1">INPUT → COMPUTE → VALIDATE → DELIVER</text>
        <text x="535" y="481" fill="#c6f57c" fontSize="12" textAnchor="end" fontFamily="monospace">v1.0</text>
      </svg>
    </div>
  );
}
