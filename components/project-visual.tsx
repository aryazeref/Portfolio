import type { Project } from "@/lib/data";

type VisualType = Project["visual"];

function GridLines() {
  return <g opacity=".22" stroke="#7295a2" strokeWidth=".7">
    {Array.from({length:16},(_,i)=><line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="340"/>)}
    {Array.from({length:9},(_,i)=><line key={`h${i}`} x1="0" y1={i*40} x2="600" y2={i*40}/>)}
  </g>;
}

function Fir() {
  return <>
    <text x="34" y="46" fill="#bcd6d5" fontSize="12" fontFamily="monospace" letterSpacing="3">DIGITAL SIGNAL PROCESSING / 01</text>
    <path d="M35 169 L64 169 L78 119 L95 220 L116 96 L137 237 L154 132 L171 169 L196 169" fill="none" stroke="#c6f57c" strokeWidth="3" strokeLinejoin="round"/>
    <line x1="199" y1="169" x2="236" y2="169" stroke="#9ecacc" strokeWidth="2" strokeDasharray="5 5"/>
    {[0,1,2,3].map(i=><g key={i}><rect x={237+i*79} y="126" width="63" height="80" rx="5" stroke="#75a5b3" fill="#152f3a"/>
      <text x={251+i*79} y="153" fill="#a9c4c8" fontSize="11" fontFamily="monospace">TAP {i}</text>
      <text x={256+i*79} y="184" fill="#c6f57c" fontWeight="bold" fontSize="24" fontFamily="monospace">×</text></g>)}
    <path d="M315 236 V271 H518" stroke="#6ab1c0" strokeWidth="2" fill="none"/>
    <path d="M394 236 V271 M473 236 V271" stroke="#6ab1c0" strokeWidth="2" fill="none"/>
    <rect x="509" y="258" width="51" height="28" rx="4" fill="#c6f57c"/>
    <text x="535" y="277" textAnchor="middle" fill="#0c1a20" fontSize="16" fontWeight="bold">Σ</text>
    <text x="35" y="306" fill="#8eaeb6" fontSize="11" fontFamily="monospace">INPUT STREAM</text>
    <text x="381" y="306" fill="#8eaeb6" fontSize="11" fontFamily="monospace">MAC / ACCUMULATION</text>
  </>;
}

function Processor() {
  return <>
    <text x="35" y="46" fill="#bdd7dd" fontSize="12" fontFamily="monospace" letterSpacing="3">TRANSPORT-TRIGGERED ARCHITECTURE</text>
    {[0,1,2].map(i=><g key={i}><rect x={72+i*164} y="88" width="124" height="78" rx="6" fill="#18333f" stroke={i===1?"#c6f57c":"#7095a3"}/>
      <text x={134+i*164} y="116" textAnchor="middle" fill="#8fb4ba" fontSize="11" fontFamily="monospace">FU / 0{i+1}</text>
      <text x={134+i*164} y="145" textAnchor="middle" fill="#e8f4ee" fontSize="18" fontWeight="bold">{["MUL","ADD","LOAD"][i]}</text>
      <path d={`M${134+i*164} 166 V209`} stroke="#b3cfcb" strokeWidth="2" strokeDasharray="4 4"/></g>)}
    {[0,1,2].map(i=><g key={i}><rect x="61" y={210+i*29} rx="3" width="481" height="14" fill={i===1?"#c6f57c":"#396278"} opacity={i===1?".96":".85"}/><text x="552" y={221+i*29} fill="#b3d7db" fontSize="10" fontFamily="monospace">B{i}</text></g>)}
    <text x="37" y="313" fill="#93b9bd" fontSize="11" fontFamily="monospace">FUNCTIONAL UNITS ↔ TRANSPORT BUSES</text>
  </>;
}

function Pipeline() {
  return <>
    <text x="35" y="45" fill="#bcd6d5" fontSize="12" fontFamily="monospace" letterSpacing="3">AUTOMATION / VALIDATION PIPELINE</text>
    {[["01","COMMIT"],["02","BUILD"],["03","TEST"],["04","REPORT"]].map(([num,label],i)=><g key={num}>
      <rect x={33+i*139} y="116" width="123" height="110" rx="6" fill="#172f3b" stroke={i===2?"#c6f57c":"#668d9d"}/>
      <text x={48+i*139} y="142" fill="#9fc1c2" fontSize="10" fontFamily="monospace">STEP {num}</text>
      <rect x={48+i*139} y="158" width="32" height="32" rx="16" fill={i===2?"#c6f57c":"#294c56"}/>
      <path d={`M${58+i*139} 173 l6 6 l8 -11`} fill="none" stroke={i===2?"#152522":"#c6f57c"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x={49+i*139} y="208" fill="#e4f1ee" fontSize="12" fontWeight="bold" fontFamily="monospace">{label}</text>
      {i<3&&<path d={`M${156+i*139} 171 h16`} stroke="#c6f57c" strokeWidth="1.8" strokeDasharray="3 3"/>}
    </g>)}
    <path d="M44 276 H553" stroke="#376176" strokeWidth="2"/>
    <circle cx="550" cy="276" r="5" fill="#c6f57c"/>
    <text x="35" y="311" fill="#8fb2bc" fontSize="11" fontFamily="monospace">GITLAB CI/CD · MATLAB · PYTHON</text>
  </>;
}

function Phasor() {
  const wave=Array.from({length:125},(_,i)=>{const x=37+i*4.2;const y=164-Math.sin(i*.12)*69;return `${i===0?"M":"L"}${x.toFixed(1)} ${y.toFixed(1)}`;}).join(" ");
  return <>
    <text x="35" y="45" fill="#bdd2d4" fontSize="12" fontFamily="monospace" letterSpacing="3">MEASUREMENT / FOURIER ANALYSIS</text>
    <path d={wave} stroke="#c6f57c" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M36 164 H566" stroke="#71919e" strokeWidth="1" strokeDasharray="4 6"/>
    <g transform="translate(449 173)">
      <circle r="72" fill="#142f3b" stroke="#6b8d9e"/>
      <circle r="45" fill="none" stroke="#597b8d" strokeDasharray="4 5"/>
      <path d="M-84 0 H84 M0 -84 V84" stroke="#678d9d" strokeWidth="1.3"/>
      <path d="M0 0 L49 -47" stroke="#a9f378" strokeWidth="4" strokeLinecap="round"/>
      <path d="M47 -47 l-13 4 7 9" stroke="#a9f378" fill="none" strokeWidth="3"/>
      <circle r="5" fill="#e5efee"/>
    </g>
    <text x="35" y="308" fill="#8facb7" fontSize="11" fontFamily="monospace">SIGNAL → ESTIMATED MAGNITUDE & PHASE</text>
  </>;
}

function Analytics() {
  const heights=[44,80,69,113,105,160,145,184,168,205,190];
  return <>
    <text x="35" y="45" fill="#bcd6d5" fontSize="12" fontFamily="monospace" letterSpacing="3">REGISTRATION DATA / INSIGHTS</text>
    <text x="38" y="94" fill="#edfbf0" fontSize="42" fontWeight="bold" letterSpacing="-2">~100</text>
    <text x="168" y="92" fill="#a9bfbd" fontSize="12" fontFamily="monospace">EVENT PARTICIPANTS</text>
    {heights.map((h,i)=><rect key={i} x={35+i*47} y={270-h} width="30" height={h} rx="2" fill={i===10?"#c6f57c":i>7?"#74bac5":"#2c6375"}/>)}
    <path d="M30 270 H574" stroke="#7b9b9e" strokeWidth="1"/>
    <text x="37" y="305" fill="#91b0b9" fontSize="11" fontFamily="monospace">PYTHON · CLEANING · VISUALIZATION</text>
  </>;
}

function Web() {
  return <>
    <text x="35" y="45" fill="#bfd5d6" fontSize="12" fontFamily="monospace" letterSpacing="3">FULL-STACK MVP / WEB APPLICATION</text>
    <rect x="75" y="85" width="451" height="194" rx="8" fill="#132d39" stroke="#6e98a3"/>
    <path d="M75 115 H526" stroke="#688b98"/>
    {[0,1,2].map(i=><circle key={i} cx={95+i*16} cy="99" r="4" fill={i===0?"#c6f57c":"#628b9a"}/>)}
    <rect x="95" y="136" width="171" height="120" rx="4" fill="#1c4350"/>
    <path d="M116 217 l25 -47 29 23 31 -32 41 56" fill="none" stroke="#c6f57c" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="283" y="138" width="217" height="14" rx="3" fill="#356577"/>
    <rect x="283" y="166" width="178" height="10" rx="3" fill="#2c5061"/>
    <rect x="283" y="190" width="192" height="10" rx="3" fill="#2c5061"/>
    <rect x="283" y="221" width="95" height="29" rx="3" fill="#c6f57c"/>
    <text x="35" y="307" fill="#91b0b9" fontSize="11" fontFamily="monospace">NEXT.JS ↔ FASTAPI ↔ EXTERNAL API</text>
  </>;
}

export default function ProjectVisual({type, className = ""}:{type:VisualType;className?:string}) {
  return <div className={`project-visual ${className}`} aria-hidden="true">
    <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="340" fill="#102532"/>
      <circle cx="448" cy="131" r="210" fill="#1e4b53" opacity=".32"/>
      <GridLines/>
      {type==="fir"&&<Fir/>}
      {type==="processor"&&<Processor/>}
      {type==="pipeline"&&<Pipeline/>}
      {type==="phasor"&&<Phasor/>}
      {type==="analytics"&&<Analytics/>}
      {type==="web"&&<Web/>}
    </svg>
  </div>;
}
