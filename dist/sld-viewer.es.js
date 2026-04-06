const D = [
  {
    id: "main_grid_utility",
    name: "Main Grid Utility",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Outer Circle -->

        <circle cx="50" cy="50" r="48" />
        <!-- AC Sine Wave Representation in the middle -->

        <path d="M 25 50 C 35 30, 40 30, 50 50 C 60 70, 65 70, 75 50" />

        <!-- Vertical Support/Grid indicator lines (Optional for Grid look) -->

        <line x1="50" y1="10" x2="50" y2="25" />
        <line x1="50" y1="75" x2="50" y2="90" />
    </svg>`
  },
  {
    id: "transformer",
    name: "Transformer (TR)",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Standard Two-Winding Transformer Symbol (Two Overlapping Circles) -->

        <!-- Primary Winding (Left/Top Circle) -->

        <circle cx="35" cy="50" r="30" />

        <!-- Secondary Winding (Right/Bottom Circle) -->

        <circle cx="65" cy="50" r="30" />
    </svg>`
  },
  {
    id: "dg",
    name: "DG",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Circle for the Generator -->

        <circle cx="50" cy="50" r="48" />

        <!-- "G" Lettering to denote Generator -->

        <path d="M 62 40 C 60 32, 40 32, 38 50 C 40 68, 60 68, 62 60 L 50 60" />

    </svg>`
  },
  {
    id: "incoming_breaker",
    name: "Incoming Breaker (VCB / ACB)",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Box for the Breaker -->

        <rect x="1" y="1" width="98" height="98" />

        <!-- "X" inside the box to signify a Circuit Breaker (VCB/ACB) -->

        <line x1="10" y1="10" x2="90" y2="90" />
        <line x1="90" y1="10" x2="10" y2="90" />
    </svg>`
  },
  {
    id: "vcb",
    name: "VCB",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">


        <!-- VCB Symbol: Box with 'X' and vertical bar or standard rectangle with crossing lines -->

        <rect x="1" y="1" width="98" height="98" />
        <line x1="10" y1="10" x2="90" y2="90" />
        <line x1="90" y1="10" x2="10" y2="90" />

        <!-- Horizontal internal separation often used for VCB -->

        <line x1="10" y1="50" x2="90" y2="50" />

    </svg>`
  },
  {
    id: "acb",
    name: "ACB",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 

        <!-- ACB Symbol: Box with horizontal line and contact indicators -->

        <rect x="1" y="1" width="98" height="98" />

        <!-- Horizontal central line -->

        <line x1="10" y1="50" x2="90" y2="50" />

        <!-- Vertical contact indicator (differentiating ACB) -->

        <line x1="50" y1="10" x2="50" y2="90" />

    </svg>`
  },
  {
    id: "mccb",
    name: "MCCB",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">


        <!-- MCCB Symbol: Smaller rectangular housing with 'X' -->

        <rect x="1" y="1" width="98" height="98" />
        <line x1="10" y1="10" x2="90" y2="90" />
        <line x1="90" y1="10" x2="10" y2="90" />

    </svg>`
  },
  {
    id: "isolator_disconnect_switch",
    name: "Isolator / Disconnect Switch",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Connection Point (Top) -->

        <line x1="50" y1="0" x2="50" y2="35" />

        <!-- Top Terminal Point -->

        <circle cx="50" cy="35" r="2" fill="white" />

        <!-- Switch Blade (shown in open position) -->

        <line x1="50" y1="65" x2="70" y2="35" />

        <!-- Bottom Terminal Point -->

        <circle cx="50" cy="65" r="2" fill="white" />

        <!-- Connection Point (Bottom) -->

        <line x1="50" y1="65" x2="50" y2="100" />
    </svg>`
  },
  {
    id: "relay",
    name: "Relay",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Square for the Relay Housing -->

        <rect x="1" y="1" width="98" height="98" />

        <!-- "R" Lettering to denote Relay -->

        <path d="M 42 40 L 52 40 C 56 40, 58 42, 58 45 C 58 48, 56 50, 52 50 L 42 50 L 42 60 M 50 50 L 58 60" />

    </svg>`
  },
  {
    id: "busbar",
    name: "Busbar",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="4" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Horizontal Busbar Line (Thicker stroke for emphasis) -->

        <line x1="0" y1="50" x2="100" y2="50" />

        <!-- Representative feeder connection (Top) -->

        <line x1="25" y1="50" x2="25" y2="30" stroke-width="2" />

        <!-- Representative feeder connection (Bottom) -->

        <line x1="75" y1="50" x2="75" y2="70" stroke-width="2" />
    </svg>`
  },
  {
    id: "bus_coupler",
    name: "Bus Coupler",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Left Busbar Section -->

        <line x1="0" y1="50" x2="35" y2="50" stroke-width="4" />

        <!-- Right Busbar Section -->

        <line x1="65" y1="50" x2="100" y2="50" stroke-width="4" />

        <!-- Bus Coupler (Breaker Symbol in between) -->

        <rect x="35" y="35" width="30" height="30" />
        <line x1="35" y1="35" x2="65" y2="65" />
        <line x1="65" y1="35" x2="35" y2="65" />

        <!-- Connection lines to the breaker -->

        <line x1="35" y1="50" x2="35" y2="50" />
        <line x1="65" y1="50" x2="65" y2="50" />
    </svg>`
  },
  {
    id: "bus_duct_bus_trunking_outer",
    name: "Bus Duct / Bus Trunking Outer ",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Bus Duct / Bus Trunking Outer Enclosure -->

        <rect x="0" y="40" width="100" height="20" />

        <!-- Internal Conductor (Center Line) -->

        <line x1="0" y1="50" x2="100" y2="50" stroke-width="1" />

        <!-- Cross-Hatching to represent Trunking/Enclosure -->

        <line x1="10" y1="40" x2="20" y2="60" opacity="0.6" />
        <line x1="30" y1="40" x2="40" y2="60" opacity="0.6" />
        <line x1="50" y1="40" x2="60" y2="60" opacity="0.6" />
        <line x1="70" y1="40" x2="80" y2="60" opacity="0.6" />
        <line x1="90" y1="40" x2="100" y2="60" opacity="0.6" />
    </svg>`
  },
  {
    id: "main_lt_panel",
    name: "Main LT Panel",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Panel Enclosure -->

        <rect x="10" y="10" width="80" height="80" />

        <!-- Internal Busbar (Top Horizontal) -->

        <line x1="20" y1="30" x2="80" y2="30" stroke-width="3" />

        <!-- Compartment Dividers (Vertical) -->

        <line x1="33" y1="30" x2="33" y2="90" opacity="0.5" />
        <line x1="56" y1="30" x2="56" y2="90" opacity="0.5" />

        <!-- Feeder Indicators (Outgoing lines) -->

        <line x1="22" y1="30" x2="22" y2="50" />
        <line x1="45" y1="30" x2="45" y2="50" />
        <line x1="68" y1="30" x2="68" y2="50" />

        <!-- Main Incomer Indicator (Bottom to Busbar) -->

        <line x1="50" y1="100" x2="50" y2="90" />
        <path d="M 45 80 L 50 70 L 55 80" />

        <!-- Label Placeholder Area -->

        <rect x="35" y="15" width="30" height="10" stroke-width="1" stroke-dasharray="2,2" />
    </svg>`
  },
  {
    id: "ldb_mldb",
    name: "LDB / MLDB",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- LDB / MLDB Enclosure -->

        <rect x="20" y="15" width="60" height="70" />

        <!-- Internal Busbar (Vertical) -->

        <line x1="50" y1="25" x2="50" y2="75" stroke-width="2.5" />

        <!-- MCB/Feeder Indicators (Left side) -->

        <line x1="35" y1="35" x2="50" y2="35" />
        <line x1="35" y1="50" x2="50" y2="50" />
        <line x1="35" y1="65" x2="50" y2="65" />

        <!-- MCB/Feeder Indicators (Right side) -->

        <line x1="50" y1="35" x2="65" y2="35" />
        <line x1="50" y1="50" x2="65" y2="50" />
        <line x1="50" y1="65" x2="65" y2="65" />

        <!-- Main Incoming Feed (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Identification Label (Symbolic 'L' for Lighting) -->

        <path d="M 47 80 L 47 85 L 53 85" stroke-width="1.5" />
    </svg>`
  },
  {
    id: "apfc_panel",
    name: "APFC Panel",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- APFC Panel Enclosure -->

        <rect x="20" y="15" width="60" height="70" />

        <!-- Internal Busbar (Top Horizontal) -->

        <line x1="30" y1="30" x2="70" y2="30" stroke-width="2" />

        <!-- Capacitor Symbol (representing the APFC banks) -->

        <!-- Top Plate -->

        <line x1="40" y1="50" x2="60" y2="50" />
        <!-- Bottom Plate -->
        <line x1="40" y1="55" x2="60" y2="55" />

        <!-- Connections to Capacitor -->

        <line x1="50" y1="30" x2="50" y2="50" />
        <line x1="50" y1="55" x2="50" y2="75" />

        <!-- Symbolic 'PFC' or Control Unit indication -->

        <rect x="35" y="70" width="30" height="10" stroke-width="1" stroke-dasharray="2,2" />

        <!-- Main Incoming Feed (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />
    </svg>`
  },
  {
    id: "capacitor_bank",
    name: "Capacitor Bank",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Connection Point (Top) -->

        <line x1="50" y1="0" x2="50" y2="45" />

        <!-- Capacitor Symbol (Parallel Plates) -->

        <!-- Top Plate -->

        <line x1="30" y1="45" x2="70" y2="45" />
        <!-- Bottom Plate -->
        <line x1="30" y1="55" x2="70" y2="55" />

        <!-- Connection Point (Bottom) -->

        <line x1="50" y1="55" x2="50" y2="100" />

        <!-- Optional: Side Terminal/Delta connection indicator lines -->

        <path d="M 30 45 L 20 45 L 20 55 L 30 55" opacity="0.5" />
        <path d="M 70 45 L 80 45 L 80 55 L 70 55" opacity="0.5" />
    </svg>`
  },
  {
    id: "ups",
    name: "UPS",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Main UPS Block Enclosure -->

        <rect x="20" y="20" width="60" height="60" />

        <!-- Diagonal line representing the conversion path (Rectifier to Inverter) -->

        <line x1="20" y1="80" x2="80" y2="20" />

        <!-- "AC" Symbol (Sine wave) in top-right (Inverter side) -->

        <path d="M 55 35 C 60 25, 65 25, 70 35" />

        <!-- "DC" Symbol (Straight/Dashed line) in bottom-left (Rectifier/Battery side) -->

        <line x1="30" y1="60" x2="45" y2="60" />
        <line x1="30" y1="65" x2="45" y2="65" stroke-dasharray="2,2" />

        <!-- Connection Point (Top / Input) -->

        <line x1="50" y1="0" x2="50" y2="20" />

        <!-- Connection Point (Bottom / Output) -->

        <line x1="50" y1="80" x2="50" y2="100" />
    </svg>`
  },
  {
    id: "battery_bank",
    name: "Battery Bank",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Connection Point (Top) -->

        <line x1="50" y1="0" x2="50" y2="30" />

        <!-- Battery Cell Symbol (Long line for Positive, Short thick for Negative) -->

        <!-- Cell 1 -->

        <line x1="30" y1="30" x2="70" y2="30" />
        <line x1="40" y1="40" x2="60" y2="40" stroke-width="4" />

        <!-- Cell 2 -->

        <line x1="30" y1="50" x2="70" y2="50" />
        <line x1="40" y1="60" x2="60" y2="60" stroke-width="4" />

        <!-- Cell 3 -->

        <line x1="30" y1="70" x2="70" y2="70" />
        <line x1="40" y1="80" x2="60" y2="80" stroke-width="4" />

        <!-- Connection Point (Bottom) -->

        <line x1="50" y1="80" x2="50" y2="100" />
    </svg>`
  },
  {
    id: "bypass_line",
    name: "Bypass line",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Bypass line  -->
        <line x1="50" y1="0" x2="50" y2="20" />
        <line x1="50" y1="80" x2="50" y2="100" />

        <circle cx="50" cy="20" r="2" fill="white" />
        <path d="M 50 20 L 80 20 L 80 80 L 50 80" stroke-dasharray="4,4" />
        <circle cx="50" cy="80" r="2" fill="white" />

        <rect x="35" y="35" width="30" height="30" stroke-dasharray="2,2" opacity="0.5" />
        <line x1="50" y1="20" x2="50" y2="35" />
        <line x1="50" y1="65" x2="50" y2="80" />
    </svg>`
  },
  {
    id: "motor",
    name: "Motor",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Circle for the Motor -->

        <circle cx="50" cy="50" r="40" />

        <!-- "M" Lettering to denote Motor -->

        <path d="M 35 60 L 35 40 L 50 55 L 65 40 L 65 60" />

        <!-- Connection Point (Top) -->

        <line x1="50" y1="0" x2="50" y2="10" />
    </svg>`
  },
  {
    id: "pump",
    name: "Pump",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Circle for the Pump Casing -->

        <circle cx="50" cy="50" r="40" />

        <!-- "P" Lettering to denote Pump -->

        <path d="M 42 60 L 42 40 L 52 40 C 58 40, 58 50, 52 50 L 42 50" />

        <!-- Connection Point (Top / Suction) -->

        <line x1="50" y1="0" x2="50" y2="10" />

        <!-- Discharge Indicator (Triangle at the bottom) -->

        <path d="M 45 90 L 55 90 L 50 100 Z" fill="white" />
    </svg>`
  },
  {
    id: "Compressor",
    name: "Compressor",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Circle for the Compressor Casing -->

        <circle cx="50" cy="50" r="40" />

        <!-- "C" Lettering to denote Compressor -->

        <path d="M 60 40 C 55 35, 40 35, 40 50 C 40 65, 55 65, 60 60" />

        <!-- Connection Point (Top / Inlet) -->

        <line x1="50" y1="0" x2="50" y2="10" />

        <!-- Discharge Indicator (Triangle at the bottom) -->

        <path d="M 45 90 L 55 90 L 50 100 Z" fill="white" />
    </svg>`
  },
  {
    id: "fan",
    name: "Fan",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Circle for the Fan Casing -->

        <circle cx="50" cy="50" r="40" />

        <!-- Propeller Blades Symbol -->

        <path d="M 50 50 L 50 20 M 50 50 L 25 65 M 50 50 L 75 65" />
        <circle cx="50" cy="50" r="4" fill="white" />

        <!-- Connection Point (Top) -->

        <line x1="50" y1="0" x2="50" y2="10" />

        <!-- Airflow Direction Indicator (Triangle at the bottom) -->

        <path d="M 45 90 L 55 90 L 50 100 Z" fill="white" />
    </svg>`
  },
  {
    id: "energy_meter",
    name: "Energy Meter",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Meter Enclosure -->

        <rect x="20" y="25" width="60" height="50" />

        <!-- Digital/Analog Display Window -->

        <rect x="30" y="35" width="40" height="15" stroke-width="1" />

        <!-- Display Digits (Symbolic) -->

        <line x1="35" y1="42" x2="40" y2="42" stroke-width="1" />
        <line x1="45" y1="42" x2="50" y2="42" stroke-width="1" />
        <line x1="55" y1="42" x2="60" y2="42" stroke-width="1" />
        <line x1="65" y1="42" x2="65" y2="42" stroke-width="1" />

        <!-- "kWh" Label Notation -->

        <path d="M 40 60 L 40 68 M 40 64 L 45 60 M 40 64 L 45 68" stroke-width="1" /> <!-- K -->
        <path d="M 50 60 L 50 68 M 55 60 L 55 68 M 50 64 L 55 64" stroke-width="1" /> <!-- H -->

        <!-- Connection Point (Top) -->

        <line x1="50" y1="0" x2="50" y2="25" />

        <!-- Connection Point (Bottom) -->

        <line x1="50" y1="75" x2="50" y2="100" />
    </svg>`
  },
  {
    id: "ct",
    name: "Current Transformer",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Primary Conductor (Main Line) -->

        <line x1="50" y1="0" x2="50" y2="100" />

        <!-- CT Secondary Winding (Circle intersecting the line) -->

        <circle cx="50" cy="50" r="15" />

        <!-- Secondary Lead Connections -->

        <line x1="65" y1="50" x2="85" y2="50" />
        <line x1="85" y1="50" x2="85" y2="70" />

        <!-- Terminal Dots -->

        <circle cx="85" cy="70" r="2" fill="white" />

        <!-- Label 'CT' -->

        <path d="M 30 45 C 25 45, 20 48, 20 52 C 20 56, 25 59, 30 59" stroke-width="1" /> <!-- C -->
        <path d="M 35 45 L 45 45 M 40 45 L 40 59" stroke-width="1" /> <!-- T -->
    </svg>`
  },
  {
    id: "pt",
    name: "Potential Transformer",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Primary Conductor (Main Line) -->

        <line x1="0" y1="20" x2="100" y2="20" stroke-width="3" />

        <!-- PT Connection Point (T-junction) -->

        <circle cx="50" cy="20" r="2" fill="white" />
        <line x1="50" y1="20" x2="50" y2="40" />

        <!-- PT Primary/Secondary Winding Symbol (Two small overlapping circles) -->

        <circle cx="50" cy="50" r="10" />
        <circle cx="50" cy="65" r="10" />

        <!-- Ground Connection (representing the neutral/earth side) -->

        <line x1="50" y1="75" x2="50" y2="85" />
        <line x1="40" y1="85" x2="60" y2="85" />
        <line x1="45" y1="90" x2="55" y2="90" />

        <!-- Label 'PT' -->

        <path d="M 70 45 L 78 45 C 82 45, 82 52, 78 52 L 70 52 L 70 59" stroke-width="1" /> <!-- P -->
        <path d="M 82 45 L 92 45 M 87 45 L 87 59" stroke-width="1" /> <!-- T -->
    </svg>`
  },
  {
    id: "earthing",
    name: "Earthing",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Connection Lead (Vertical) -->

        <line x1="50" y1="0" x2="50" y2="50" />

        <!-- Primary Horizontal Bar -->

        <line x1="20" y1="50" x2="80" y2="50" />

        <!-- Secondary Horizontal Bar (Shorter) -->

        <line x1="35" y1="65" x2="65" y2="65" />

        <!-- Tertiary Horizontal Bar (Shortest) -->

        <line x1="45" y1="80" x2="55" y2="80" />
    </svg>`
  },
  {
    id: "lightning_arrester",
    name: "Lightning arrester",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Connection Lead from Line (Top) -->

        <line x1="50" y1="0" x2="50" y2="30" />

        <!-- Arrester Symbol (Arrow pointing to Ground) -->

        <line x1="50" y1="30" x2="50" y2="60" />
        <path d="M 40 50 L 50 60 L 60 50" />

        <!-- Gap/Separator (Optional functional representation) -->

        <line x1="40" y1="65" x2="60" y2="65" stroke-dasharray="2,2" opacity="0.5" />

        <!-- Integrated Earth Symbol -->

        <!-- Primary Horizontal Bar -->

        <line x1="30" y1="75" x2="70" y2="75" />
        <!-- Secondary Horizontal Bar -->
        <line x1="40" y1="85" x2="60" y2="85" />
        <!-- Tertiary Horizontal Bar -->
        <line x1="47" y1="95" x2="53" y2="95" />
    </svg>`
  },
  {
    id: "incoming_supply_line_top",
    name: "Incoming Supply Line (Top)",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Incoming Supply Line (Top) -->

        <line x1="50" y1="0" x2="50" y2="30" />

        <!-- Directional Arrowhead -->

        <path d="M 40 20 L 50 30 L 60 20" />

        <!-- Integrated Circuit Breaker (Protection at Entry) -->

        <rect x="35" y="35" width="30" height="30" />
        <line x1="35" y1="35" x2="65" y2="65" />
        <line x1="65" y1="35" x2="35" y2="65" />

        <!-- Connection to Internal Busbar (Bottom) -->

        <line x1="50" y1="65" x2="50" y2="85" />

        <!-- Busbar Section (Horizontal at bottom) -->

        <line x1="10" y1="85" x2="90" y2="85" stroke-width="4" />
    </svg>`
  },
  {
    id: "changeover_switch",
    name: "ChangeOver Switch",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Incoming Supply 1 (Top Left) -->

        <line x1="30" y1="0" x2="30" y2="30" />
        <circle cx="30" cy="30" r="2" fill="white" />

        <!-- Incoming Supply 2 (Top Right) -->

        <line x1="70" y1="0" x2="70" y2="30" />
        <circle cx="70" cy="30" r="2" fill="white" />

        <!-- Common Output Terminal (Bottom Center) -->

        <circle cx="50" cy="70" r="2" fill="white" />
        <line x1="50" y1="70" x2="50" y2="100" />

        <!-- Switch Blade (Shown connected to Supply 1) -->

        <line x1="50" y1="70" x2="30" y2="32" />

        <!-- Mechanical Interlock / Toggle Indicator -->

        <path d="M 35 45 Q 50 55 65 45" stroke-dasharray="2,2" opacity="0.6" />
    </svg>`
  },
  {
    id: "mldb",
    name: "Main Lighting DB",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Panel Enclosure -->

        <rect x="20" y="10" width="60" height="80" />

        <!-- Internal Busbars (Three Horizontal Lines for R-Y-B) -->

        <line x1="30" y1="25" x2="70" y2="25" stroke-width="1.5" />
        <line x1="30" y1="32" x2="70" y2="32" stroke-width="1.5" />
        <line x1="30" y1="39" x2="70" y2="39" stroke-width="1.5" />

        <!-- Lighting Symbol (Lamp/Bulb representation) -->

        <circle cx="50" cy="65" r="12" />
        <path d="M 42 57 L 58 73 M 58 57 L 42 73" stroke-width="1.5" />

        <!-- Connection from Bus to Lighting Load -->

        <line x1="50" y1="39" x2="50" y2="53" />

        <!-- Outgoing Feeder Indications (Bottom) -->

        <line x1="35" y1="90" x2="35" y2="100" />
        <line x1="50" y1="90" x2="50" y2="100" />
        <line x1="65" y1="90" x2="65" y2="100" />

        <!-- Main Incoming Feed (Top) -->

        <line x1="50" y1="0" x2="50" y2="10" />
    </svg>`
  },
  {
    id: "ldb",
    name: "lighting DB",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Panel Enclosure (Slightly smaller than MLDB) -->

        <rect x="25" y="15" width="50" height="70" />

        <!-- Internal Busbar (Single Horizontal Line for Branch Circuit) -->

        <line x1="35" y1="35" x2="65" y2="35" stroke-width="1.5" />

        <!-- Lighting Symbol (Simplified bulb/X representation) -->

        <circle cx="50" cy="55" r="10" />
        <path d="M 44 49 L 56 61 M 56 49 L 44 61" stroke-width="1.5" />

        <!-- Connection from Bus to Load -->

        <line x1="50" y1="35" x2="50" y2="45" />

        <!-- Outgoing Feeder Indications (Bottom) -->

        <line x1="40" y1="85" x2="40" y2="100" />
        <line x1="60" y1="85" x2="60" y2="100" />

        <!-- Main Incoming Feed (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />
    </svg>`
  },
  {
    id: "pdb",
    name: "Power DB",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Panel Enclosure -->

        <rect x="25" y="15" width="50" height="70" />

        <!-- Internal Busbar (Horizontal Line for Branch Circuit) -->

        <line x1="35" y1="35" x2="65" y2="35" stroke-width="1.5" />

        <!-- Power Symbol (Socket/Plug representation) -->

        <rect x="42" y="50" width="16" height="12" />
        <line x1="46" y1="50" x2="46" y2="45" stroke-width="1" />
        <line x1="54" y1="50" x2="54" y2="45" stroke-width="1" />
        <circle cx="50" cy="58" r="1.5" fill="white" />

        <!-- Connection from Bus to Load -->

        <line x1="50" y1="35" x2="50" y2="45" />

        <!-- Outgoing Feeder Indications (Bottom) -->

        <line x1="40" y1="85" x2="40" y2="100" />
        <line x1="60" y1="85" x2="60" y2="100" />

        <!-- Main Incoming Feed (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />
    </svg>`
  },
  {
    id: "mcc_panel",
    name: "MCC Panel",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Panel Enclosure -->

        <rect x="25" y="15" width="50" height="70" />

        <!-- Internal Busbar (Horizontal Line for Branch Circuit) -->

        <line x1="35" y1="35" x2="65" y2="35" stroke-width="1.5" />

        <!-- Motor Symbol (Circle with 'M') representing the controlled load -->

        <circle cx="50" cy="58" r="12" />
        <path d="M 44 64 L 44 52 L 50 60 L 56 52 L 56 64" stroke-width="1.5" />

        <!-- Connection from Bus to Motor Control Unit -->

        <line x1="50" y1="35" x2="50" y2="46" />

        <!-- Outgoing Feeder Indications (Bottom) -->

        <line x1="40" y1="85" x2="40" y2="100" />
        <line x1="60" y1="85" x2="60" y2="100" />

        <!-- Main Incoming Feed (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />
    </svg>`
  },
  {
    id: "apfc_panel",
    name: "APFC Panel",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Panel Enclosure -->

        <rect x="25" y="15" width="50" height="70" />

        <!-- Internal Busbar (Horizontal Line for Branch Circuit) -->

        <line x1="35" y1="30" x2="65" y2="30" stroke-width="1.5" />

        <!-- Capacitor Symbol (Parallel Plates) -->

        <line x1="40" y1="50" x2="60" y2="50" />
        <line x1="40" y1="56" x2="60" y2="56" />

        <!-- Connection from Bus to Capacitor Bank -->

        <line x1="50" y1="30" x2="50" y2="50" />

        <!-- Lower connection/grounding indication -->

        <line x1="50" y1="56" x2="50" y2="70" />
        <line x1="40" y1="70" x2="60" y2="70" stroke-width="1" stroke-dasharray="2,2" />

        <!-- Outgoing Feeder Indications (Bottom) -->

        <line x1="40" y1="85" x2="40" y2="100" />
        <line x1="60" y1="85" x2="60" y2="100" />

        <!-- Main Incoming Feed (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />
    </svg>`
  },
  {
    id: "starter_panel",
    name: "Starter Panel",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Panel Enclosure -->

        <rect x="25" y="15" width="50" height="70" />

        <!-- Internal Busbar/Supply Line -->

        <line x1="50" y1="15" x2="50" y2="30" stroke-width="1.5" />

        <!-- Contactor / Switch Symbol (representing the starter mechanism) -->

        <circle cx="50" cy="35" r="2" fill="white" />
        <line x1="50" y1="50" x2="65" y2="35" />
        <circle cx="50" cy="50" r="2" fill="white" />

        <!-- Motor Symbol (Circle with 'M') -->

        <circle cx="50" cy="68" r="10" />
        <path d="M 44 73 L 44 63 L 50 69 L 56 63 L 56 73" stroke-width="1.2" />

        <!-- Connection from Starter to Motor -->

        <line x1="50" y1="50" x2="50" y2="58" />

        <!-- Outgoing Feeder Indications (Bottom) -->

        <line x1="50" y1="85" x2="50" y2="100" />

        <!-- Main Incoming Feed (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />
    </svg>`
  },
  {
    id: "battery",
    name: "Battery",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main UPS Block Enclosure -->

        <rect x="20" y="20" width="60" height="60" />

        <!-- Diagonal line representing the conversion path (Rectifier to Inverter) -->

        <line x1="20" y1="80" x2="80" y2="20" />

        <!-- "AC" Symbol (Sine wave) in top-right (Inverter side) -->

        <path d="M 55 35 C 60 25, 65 25, 70 35" />

        <!-- "DC" Symbol (Straight/Dashed line) in bottom-left (Rectifier/Battery side) -->

        <line x1="30" y1="60" x2="45" y2="60" />
        <line x1="30" y1="65" x2="45" y2="65" stroke-dasharray="2,2" />

        <!-- Connection Point (Top / Input) -->

        <line x1="50" y1="0" x2="50" y2="20" />

        <!-- Connection Point (Bottom / Output) -->

        <line x1="50" y1="80" x2="50" y2="100" />
    </svg>`
  },
  {
    id: "battery_bypass",
    name: "Battery Bypass",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">   <circle cx="50" cy="15" r="2" fill="white" /><circle cx="50" cy="85" r="2" fill="white" /><line x1="50" y1="75" x2="50" y2="100" /></svg><line x1="30" y1="65" x2="45" y2="65" stroke-dasharray="2,1" /> <path d="M 50 15 L 85 15 L 85 85 L 50 85" stroke-dasharray="4,4" /><rect x="25" y="25" width="50" height="50" /><line x1="30" y1="60" x2="45" y2="60" /><line x1="50" y1="0" x2="50" y2="25" /><line x1="25" y1="75" x2="75" y2="25" fill="transparent" class="transparent" /> <path d="M 55 35 C 60 27, 65 27, 70 35" />  '
  },
  {
    id: "generic_load",
    name: "Generic Load",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="40" />

        <!-- Generic Load Symbol (Arrow pointing down into a termination) -->

        <line x1="50" y1="40" x2="50" y2="80" />
        <path d="M 40 70 L 50 80 L 60 70" />

        <!-- Termination/Base Line -->

        <line x1="30" y1="85" x2="70" y2="85" />

        <!-- "L" Label for Load (Optional) -->

        <path d="M 47 50 L 47 60 L 53 60" stroke-width="1" opacity="0.8" />
    </svg>`
  },
  {
    id: "chiller",
    name: "Chiller",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="20" />

        <!-- Main Chiller Body/Heat Exchanger Shell -->

        <rect x="20" y="20" width="60" height="50" rx="2" />

        <!-- Evaporator/Condenser Internal Coil Representation -->

        <path d="M 30 35 Q 40 25, 50 35 Q 60 45, 70 35" stroke-opacity="0.7" />
        <path d="M 30 55 Q 40 45, 50 55 Q 60 65, 70 55" stroke-opacity="0.7" />

        <!-- Cooling Fan / Motor Symbol (Top of Chiller) -->

        <circle cx="50" cy="45" r="8" stroke-dasharray="2,2" />
        <path d="M 46 41 L 54 49 M 54 41 L 46 49" />

        <!-- Fluid Pipe Connections (Side) -->

        <path d="M 10 30 L 20 30" /> <!-- Inlet -->
        <path d="M 10 60 L 20 60" /> <!-- Outlet -->
        <path d="M 5 25 L 10 30 L 5 35" stroke-width="1" />

        <!-- Base/Support Legs -->

        <line x1="30" y1="70" x2="30" y2="85" />
        <line x1="70" y1="70" x2="70" y2="85" />
        <line x1="20" y1="85" x2="80" y2="85" />

        <!-- "CH" Label -->

        <text x="34" y="80" fill="white" font-family="Arial" font-size="8" stroke="none">CHILLER</text>
    </svg>`
  },
  {
    id: "cooling_tower",
    name: "Cooling Tower",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Cooling Tower Main Body (Trapezoidal Shape) -->

        <path d="M 30 15 L 70 15 L 85 80 L 15 80 Z" />

        <!-- Internal Fan Symbol (Top-center) -->

        <circle cx="50" cy="35" r="12" stroke-dasharray="3,3" />
        <path d="M 42 27 L 58 43 M 58 27 L 42 43" stroke-width="1.5" />

        <!-- Fill/Water Drift Representation (Horizontal lines) -->

        <line x1="30" y1="55" x2="70" y2="55" stroke-width="1" opacity="0.6" />
        <line x1="25" y1="65" x2="75" y2="65" stroke-width="1" opacity="0.6" />

        <!-- Basin/Water Level (Bottom) -->

        <line x1="15" y1="72" x2="85" y2="72" stroke-width="1" />

        <!-- Base/Support Legs -->

        <line x1="25" y1="80" x2="25" y2="95" />
        <line x1="75" y1="80" x2="75" y2="95" />
        <line x1="10" y1="95" x2="90" y2="95" />

        <!-- Label -->

        <text x="16" y="90" fill="white" font-family="Arial" font-size="8" stroke="none" outline="black"></text>
    </svg>`
  },
  {
    id: "air_dryer",
    name: "Air Dryer",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="20" />

        <!-- Main Dryer Body -->

        <rect x="25" y="20" width="50" height="60" rx="2" />

        <!-- Moisture Droplet Symbol (Indicating removal of water) -->

        <path d="M 50 40 C 45 50, 40 55, 50 65 C 60 55, 55 50, 50 40 Z" fill="none" />

        <!-- Internal Baffle/Flow Indicator (Zig-zag) -->

        <path d="M 30 30 L 70 30 M 30 70 L 70 70" stroke-width="1" opacity="0.6" />
        <polyline points="35,45 42,55 50,45 58,55 65,45" stroke-width="1" stroke-dasharray="2,1" />

        <!-- Drain Connection (Bottom) -->

        <line x1="50" y1="80" x2="50" y2="90" />
        <path d="M 45 90 L 55 90 M 47 95 L 53 95" stroke-width="1" />

        <!-- Label -->

        <text x="32" y="12" fill="white" font-family="Arial" font-size="8" stroke="none"></text>
    </svg>`
  },
  {
    id: "mfm",
    name: "MFM",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="25" />

        <!-- Main Meter Housing -->

        <rect x="25" y="25" width="50" height="50" rx="2" />

        <!-- Digital Display Screen Area -->

        <rect x="32" y="32" width="36" height="25" stroke-width="1" fill="white" fill-opacity="0.1" />

        <!-- Symbolic Display Data (Three rows of parameters) -->

        <line x1="36" y1="38" x2="64" y2="38" stroke-width="1" stroke-dasharray="2,1" />
        <line x1="36" y1="44" x2="64" y2="44" stroke-width="1" stroke-dasharray="2,1" />
        <line x1="36" y1="50" x2="64" y2="50" stroke-width="1" stroke-dasharray="2,1" />

        <!-- Function Buttons (Bottom of meter face) -->

        <circle cx="38" cy="65" r="2" />
        <circle cx="50" cy="65" r="2" />
        <circle cx="62" cy="65" r="2" />

        <!-- Connection Lead (Bottom) -->

        <line x1="50" y1="75" x2="50" y2="100" />

        <!-- Label -->

        <text x="38" y="18" fill="white" font-family="Arial" font-size="8" stroke="none"></text>
    </svg>`
  },
  {
    id: "terminal",
    name: "Terminal",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Incoming Connection Lead -->

        <line x1="50" y1="0" x2="50" y2="40" />

        <!-- Terminal Block Symbol -->

        <!-- Outer Housing -->

        <rect x="35" y="40" width="30" height="20" rx="1" />

        <!-- Terminal Point (The actual connection screw/point) -->

        <circle cx="50" cy="50" r="4" fill="white" />
        <line x1="40" y1="50" x2="60" y2="50" stroke-width="1" stroke="black" />

        <!-- Outgoing Connection Lead -->

        <line x1="50" y1="60" x2="50" y2="100" />

        <!-- Label -->

        <text x="35" y="30" fill="white" font-family="Arial" font-size="8" stroke="none"></text>
    </svg>`
  },
  {
    id: "junction",
    name: "Junction",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Main Connection Leads (Four-way Junction) -->

        <line x1="50" y1="0" x2="50" y2="100" />
        <line x1="0" y1="50" x2="100" y2="50" />

        <!-- Junction Box Symbol -->

        <!-- Outer Housing -->

        <rect x="35" y="35" width="30" height="30" rx="2" />

        <!-- Central Junction Node (Solid circle indicating a permanent connection) -->

        <circle cx="50" cy="50" r="6" fill="white" />

        <!-- Label -->

        <text x="30" y="25" fill="white" font-family="Arial" font-size="8" stroke="none"></text>
    </svg>`
  },
  {
    id: "imm",
    name: "Injection Moulding",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">


        <!-- Injection Unit (Right side) -->

        <path d="M 50 45 L 85 45 L 95 50 L 85 55 L 50 55 Z" />

        <!-- Hopper (Top of injection unit) -->

        <path d="M 65 45 L 60 30 L 80 30 L 75 45" />

        <!-- Clamping Unit / Mold Area (Left side) -->

        <rect x="15" y="40" width="35" height="30" />
        <line x1="32" y1="40" x2="32" y2="70" stroke-dasharray="2,2" /> <!-- Mold Split Line -->

        <!-- Machine Base / Bed -->

        <rect x="15" y="70" width="75" height="10" />

        <!-- Support Legs -->

        <line x1="25" y1="80" x2="25" y2="90" />
        <line x1="80" y1="80" x2="80" y2="90" />
        <line x1="10" y1="90" x2="95" y2="90" />


    </svg>`
  },
  {
    id: "extrusion",
    name: "Extrusion",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">


        <!-- Extruder Barrel (Main Body) -->

        <rect x="30" y="45" width="50" height="10" />

        <!-- Hopper (Material Feed) -->

        <path d="M 75 45 L 80 30 L 60 30 L 65 45" />

        <!-- Motor/Drive Unit (Rear of machine) -->

        <rect x="80" y="40" width="10" height="20" rx="1" />
        <line x1="85" y1="40" x2="85" y2="60" stroke-width="1" opacity="0.5" />

        <!-- Die and Profile Output (Left side) -->

        <rect x="25" y="43" width="5" height="14" /> <!-- The Die -->
        <line x1="5" y1="48" x2="25" y2="48" stroke-dasharray="4,2" /> <!-- Extruded Profile -->
        <line x1="5" y1="52" x2="25" y2="52" stroke-dasharray="4,2" />

        <!-- Machine Base / Bed -->

        <rect x="25" y="70" width="65" height="10" />

        <!-- Support Legs -->

        <line x1="35" y1="80" x2="35" y2="90" />
        <line x1="80" y1="80" x2="80" y2="90" />
        <line x1="10" y1="90" x2="95" y2="90" />

    </svg>`
  },
  {
    id: "blow_moulding",
    name: "Blow Moulding",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Electrical Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="20" />

        <!-- Extruder/Head Unit (Top Section) -->

        <rect x="40" y="20" width="20" height="15" />
        <path d="M 60 25 L 75 25 L 80 15 L 65 15 L 70 25" stroke-width="1" /> <!-- Small Hopper -->

        <!-- Blow Pin / Mandrel -->

        <line x1="50" y1="35" x2="50" y2="45" />

        <!-- Mold Cavity (Two Halves) -->

        <path d="M 35 45 L 25 45 L 25 80 L 35 80" /> <!-- Left Mold -->
        <path d="M 65 45 L 75 45 L 75 80 L 65 80" /> <!-- Right Mold -->

        <!-- Bottle/Product Shape (Inside Mold) -->

        <path d="M 45 45 L 55 45 L 60 55 L 60 75 L 40 75 L 40 55 Z" stroke-dasharray="2,2" opacity="0.8" />

        <!-- Machine Base / Bed -->

        <rect x="20" y="85" width="60" height="5" />

        <!-- Support Legs -->

        <line x1="30" y1="90" x2="30" y2="100" />
        <line x1="70" y1="90" x2="70" y2="100" />

        <!-- Label -->

        <text x="30" y="12" fill="white" font-family="Arial" font-size="8" stroke="none">BLOW MOLDING</text>
    </svg>`
  },
  {
    id: "press_machine",
    name: "Press Machine",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Electrical Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Press Crown / Upper Housing -->

        <rect x="20" y="15" width="60" height="15" rx="1" />

        <!-- Side Columns / Main Frame -->

        <rect x="20" y="30" width="8" height="55" />
        <rect x="72" y="30" width="8" height="55" />

        <!-- Moving Ram / Platen (Upper) -->

        <rect x="32" y="40" width="36" height="12" fill="white" fill-opacity="0.2" />
        <!-- Hydraulic Cylinder / Screw Drive -->
        <line x1="50" y1="30" x2="50" y2="40" stroke-width="3" />

        <!-- Fixed Bolster Plate / Bed (Lower) -->

        <rect x="28" y="75" width="44" height="10" />

        <!-- Workpiece / Die Area (Center) -->

        <path d="M 40 65 L 60 65 L 55 75 L 45 75 Z" stroke-dasharray="2,2" opacity="0.8" />

        <!-- Support Legs / Base -->

        <line x1="20" y1="85" x2="20" y2="95" />
        <line x1="80" y1="85" x2="80" y2="95" />
        <line x1="10" y1="95" x2="90" y2="95" />

        <!-- Label -->

        <text x="35" y="12" fill="white" font-family="Arial" font-size="8" stroke="none">PRESS MACHINE</text>
    </svg>`
  },
  {
    id: "assembly_machine",
    name: "Assembly Machine",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Electrical Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Main Control/Drive Housing -->

        <rect x="25" y="15" width="50" height="20" rx="1" />

        <!-- Robotic Arm / Assembly Head -->

        <path d="M 50 35 L 50 50 L 35 55" stroke-width="3" />
        <circle cx="35" cy="55" r="4" fill="white" /> <!-- Gripper/Tooling -->

        <!-- Joint/Pivot -->

        <circle cx="50" cy="35" r="2" fill="white" stroke="none" />

        <!-- Conveyor / Assembly Bed -->

        <rect x="10" y="70" width="80" height="12" rx="2" />
        <line x1="10" y1="76" x2="90" y2="76" stroke-width="1" stroke-dasharray="4,2" opacity="0.6" />

        <!-- Components being assembled -->

        <rect x="20" y="62" width="8" height="8" stroke-width="1" />
        <circle cx="50" cy="66" r="4" stroke-width="1" />
        <rect x="72" y="62" width="8" height="8" stroke-width="1" />

        <!-- Support Legs -->

        <line x1="20" y1="82" x2="20" y2="95" />
        <line x1="80" y1="82" x2="80" y2="95" />
        <line x1="5" y1="95" x2="95" y2="95" />

        <!-- Label -->

        <text x="32" y="12" fill="white" font-family="Arial" font-size="8" stroke="none">ASSEMBLY M/C</text>
    </svg>`
  },
  {
    id: "robo",
    name: "ROBO",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Electrical Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Robot Base / Pedestal -->

        <rect x="35" y="70" width="30" height="15" rx="2" />
        <line x1="20" y1="85" x2="80" y2="85" />

        <!-- Main Articulating Arm Section 1 -->

        <path d="M 50 70 L 50 45" stroke-width="4" />
        <circle cx="50" cy="70" r="3" fill="white" stroke="none" /> <!-- Base Pivot -->

        <!-- Elbow Joint -->

        <circle cx="50" cy="45" r="5" />

        <!-- Main Articulating Arm Section 2 -->

        <path d="M 50 45 L 75 35" stroke-width="3" />

        <!-- Wrist and End Effector (Gripper) -->

        <circle cx="75" cy="35" r="2" fill="white" stroke="none" />
        <path d="M 75 35 L 85 25 M 82 22 L 88 28" stroke-width="2" /> <!-- Simple Gripper -->

        <!-- Auxiliary Sensor / Camera Unit -->

        <rect x="45" y="15" width="10" height="8" rx="1" stroke-dasharray="2,1" />
        <line x1="50" y1="23" x2="50" y2="35" stroke-width="1" stroke-dasharray="2,2" />

        <!-- Support Legs -->

        <line x1="40" y1="85" x2="40" y2="95" />
        <line x1="60" y1="85" x2="60" y2="95" />

        <!-- Label -->

        <text x="28" y="12" fill="white" font-family="Arial" font-size="8" stroke="none">AUX ROBO</text>
    </svg>`
  },
  {
    id: "mtc",
    name: "MTC",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Electrical Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Main MTC Control Console Enclosure -->

        <path d="M 25 15 L 75 15 L 80 75 L 20 75 Z" />

        <!-- Operator Interface / Display Screen -->

        <rect x="32" y="25" width="36" height="25" rx="1" stroke-width="1.5" />
        <!-- Screen Content Lines -->
        <line x1="36" y1="30" x2="64" y2="30" stroke-width="1" stroke-dasharray="2,1" opacity="0.7" />
        <line x1="36" y1="37" x2="55" y2="37" stroke-width="1" stroke-dasharray="2,1" opacity="0.7" />

        <!-- Input Buttons / Keypad Area -->

        <circle cx="35" cy="62" r="2" fill="white" stroke="none" />
        <circle cx="45" cy="62" r="2" fill="white" stroke="none" />
        <circle cx="55" cy="62" r="2" fill="white" stroke="none" />
        <circle cx="65" cy="62" r="2" fill="white" stroke="none" />

        <rect x="32" y="58" width="36" height="8" rx="1" stroke-width="1" stroke-dasharray="2,2" />

        <!-- Emergency Stop Button (Prominent) -->

        <circle cx="72" cy="62" r="4" stroke="currentColor" stroke-width="2" />
        <circle cx="72" cy="62" r="1.5" fill="white" stroke="none" />

        <!-- Support Legs / Base -->

        <line x1="35" y1="75" x2="35" y2="95" />
        <line x1="65" y1="75" x2="65" y2="95" />
        <line x1="20" y1="95" x2="80" y2="95" />

        <!-- Label -->

        <text x="30" y="12" fill="white" font-family="Arial" font-size="8" stroke="none">AUX MTC</text>
    </svg>`
  },
  {
    id: "tds",
    name: "TDS",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Electrical Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Main TDS Analyzer Enclosure -->

        <rect x="25" y="15" width="50" height="60" rx="2" />

        <!-- Digital Display for TDS Value -->

        <rect x="32" y="25" width="36" height="15" fill="white" fill-opacity="0.1" stroke-width="1" />
        <text x="35" y="36" fill="white" font-family="monospace" font-size="10" stroke="none">450</text>

        <!-- Probe/Sensor Connection Lead (Internal) -->

        <line x1="50" y1="40" x2="50" y2="55" stroke-dasharray="2,2" />

        <!-- TDS Probe / Electrode Symbol -->

        <path d="M 40 55 L 60 55 M 40 65 L 60 65" stroke-width="1.5" />
        <line x1="45" y1="55" x2="45" y2="70" />
        <line x1="55" y1="55" x2="55" y2="70" />

        <!-- Fluid Flow Pipe (Horizontal bottom) -->

        <line x1="10" y1="85" x2="90" y2="85" stroke-width="3" />
        <path d="M 85 80 L 95 85 L 85 90" stroke-width="1.5" /> <!-- Flow Direction -->

        <!-- Connection to Process -->

        <line x1="50" y1="75" x2="50" y2="85" />

        <!-- Label -->

        <text x="32" y="12" fill="white" font-family="Arial" font-size="8" stroke="none">AUX TDS</text>
    </svg>`
  },
  {
    id: "temp_flor_meter",
    name: "Temp/Flow meter",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Electrical Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Main Instrument Enclosure -->

        <rect x="25" y="15" width="50" height="60" rx="2" />

        <!-- Digital Display for Temperature (Top) -->

        <rect x="30" y="22" width="40" height="12" fill="white" fill-opacity="0.1" stroke-width="1" />
        <text x="33" y="31" fill="white" font-family="monospace" font-size="8" stroke="none">24.5°C</text>

        <!-- Digital Display for Flow Rate (Bottom) -->

        <rect x="30" y="36" width="40" height="12" fill="white" fill-opacity="0.1" stroke-width="1" />
        <text x="33" y="45" fill="white" font-family="monospace" font-size="8" stroke="none">12.0 L/m</text>

        <!-- Internal Sensor logic lines -->

        <line x1="50" y1="48" x2="50" y2="58" stroke-dasharray="2,2" />

        <!-- Flow Sensor Symbol (Turbine/Vane) -->

        <circle cx="50" cy="65" r="7" />
        <path d="M 50 58 L 50 72 M 43 65 L 57 65" stroke-width="1" />
        <path d="M 45 60 L 55 70 M 55 60 L 45 70" stroke-width="1" />

        <!-- Fluid Flow Pipe (Horizontal bottom) -->

        <line x1="10" y1="85" x2="90" y2="85" stroke-width="3" />
        <path d="M 85 80 L 95 85 L 85 90" stroke-width="1.5" /> <!-- Flow Direction -->

        <!-- Connection to Process -->

        <line x1="50" y1="75" x2="50" y2="85" />

        <!-- Label -->

        <text x="28" y="12" fill="white" font-family="Arial" font-size="7" stroke="none">AUX TEMP/FLOW</text>
    </svg>`
  },
  {
    id: "hopper",
    name: "Hopper",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Electrical Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="20" />

        <!-- Hopper Body (Funnel Shape) -->

        <path d="M 20 20 L 80 20 L 60 60 L 40 60 Z" />

        <!-- Top Lid / Handle -->

        <path d="M 40 20 Q 50 10 60 20" stroke-width="1" />

        <!-- Material Level Indication (Internal dashed lines) -->

        <line x1="30" y1="35" x2="70" y2="35" stroke-dasharray="2,2" opacity="0.6" />
        <line x1="35" y1="45" x2="65" y2="45" stroke-dasharray="2,2" opacity="0.6" />

        <!-- Discharge Valve / Neck -->

        <rect x="42" y="60" width="16" height="15" />
        <line x1="40" y1="70" x2="60" y2="70" stroke-width="1" /> <!-- Valve Handle -->

        <!-- Support Frame / Legs -->

        <line x1="30" y1="40" x2="30" y2="90" />
        <line x1="70" y1="40" x2="70" y2="90" />
        <line x1="20" y1="90" x2="80" y2="90" />

        <!-- Discharge Path (Bottom) -->

        <line x1="50" y1="75" x2="50" y2="100" />
        <path d="M 45 95 L 50 100 L 55 95" stroke-width="1" />

        <!-- Label -->

        <text x="28" y="15" fill="white" font-family="Arial" font-size="8" stroke="none">HOPPER</text>
    </svg>`
  },
  {
    id: "silo",
    name: "Silo",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Electrical Connection Lead (Top) -->

        <line x1="50" y1="0" x2="50" y2="10" />

        <!-- Silo Main Body (Cylindrical Upper Section) -->

        <rect x="30" y="10" width="40" height="45" rx="1" />

        <!-- Domed Top -->

        <path d="M 30 10 Q 50 0 70 10" stroke-width="1.5" />

        <!-- Conical Bottom Section -->

        <path d="M 30 55 L 42 75 L 58 75 L 70 55" />

        <!-- Material Level Indicators (Internal) -->

        <line x1="35" y1="25" x2="65" y2="25" stroke-dasharray="2,2" opacity="0.6" />
        <line x1="35" y1="40" x2="65" y2="40" stroke-dasharray="2,2" opacity="0.6" />

        <!-- Discharge Valve / Outlet -->

        <rect x="44" y="75" width="12" height="8" />
        <line x1="40" y1="80" x2="60" y2="80" stroke-width="1" />

        <!-- External Ladder Representation -->

        <line x1="70" y1="15" x2="70" y2="55" stroke-width="1" opacity="0.5" />
        <line x1="67" y1="20" x2="73" y2="20" stroke-width="1" opacity="0.5" />
        <line x1="67" y1="30" x2="73" y2="30" stroke-width="1" opacity="0.5" />
        <line x1="67" y1="40" x2="73" y2="40" stroke-width="1" opacity="0.5" />

        <!-- Support Structure / Legs -->

        <line x1="30" y1="45" x2="30" y2="95" />
        <line x1="70" y1="45" x2="70" y2="95" />
        <line x1="20" y1="95" x2="80" y2="95" />

        <!-- Discharge Path (Bottom) -->

        <line x1="50" y1="83" x2="50" y2="100" />

        <!-- Label -->

        <text x="32" y="35" fill="white" font-family="Arial" font-size="8" stroke="none">SILO</text>
    </svg>`
  },
  {
    id: "cutter",
    name: "Cutter",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Feed Hopper (Top of Cutter) -->
        <path d="M 35 15 L 65 15 L 60 30 L 40 30 Z" />

        <!-- Main Cutting Chamber -->
        <rect x="25" y="30" width="50" height="40" rx="2" />

        <!-- Rotating Blade Symbol (Center of chamber) -->
        <circle cx="50" cy="50" r="12" stroke-dasharray="2,2" opacity="0.5" />
        <path d="M 40 40 L 60 60 M 60 40 L 40 60" stroke-width="2" /> <!-- Blades -->
        <circle cx="50" cy="50" r="3" fill="white" stroke="none" /> <!-- Shaft -->

        <!-- Drive Motor (Side-mounted) -->
        <rect x="75" y="40" width="10" height="20" rx="1" />
        <line x1="75" y1="50" x2="85" y2="50" stroke-width="1" />

        <!-- Discharge / Collection Bin (Bottom) -->
        <path d="M 30 70 L 70 70 L 75 85 L 25 85 Z" />
        <line x1="35" y1="78" x2="65" y2="78" stroke-width="1" stroke-dasharray="2,1" opacity="0.6" />

        <!-- Support Legs / Base -->
        <line x1="30" y1="85" x2="30" y2="95" />
        <line x1="70" y1="85" x2="70" y2="95" />
        <line x1="15" y1="95" x2="85" y2="95" />

        <!-- Label -->
        <text x="38" y="10" fill="white" font-family="Arial" font-size="7" stroke="none">CUTTER</text>
    </svg>`
  },
  {
    id: "grinder",
    name: "Grinder",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Feed Hopper (Top of Grinder) -->
        <path d="M 35 15 L 65 15 L 60 30 L 40 30 Z" />

        <!-- Main Grinding Chamber -->
        <rect x="25" y="30" width="50" height="40" rx="2" />

        <!-- Grinding Plates Symbol (Horizontal dashed lines indicating friction/attrition) -->
        <line x1="30" y1="45" x2="70" y2="45" stroke-width="1.5" />
        <line x1="30" y1="55" x2="70" y2="55" stroke-width="1.5" />

        <!-- Rotating Burr/Grinder Core -->
        <circle cx="50" cy="50" r="8" stroke-dasharray="1,1" />
        <path d="M 45 45 L 55 55 M 55 45 L 45 55" stroke-width="1" />

        <!-- Fine Particle Representation (Dots) -->
        <circle cx="35" cy="62" r="0.5" fill="white" stroke="none" />
        <circle cx="45" cy="65" r="0.5" fill="white" stroke="none" />
        <circle cx="55" cy="63" r="0.5" fill="white" stroke="none" />
        <circle cx="65" cy="66" r="0.5" fill="white" stroke="none" />

        <!-- Drive Motor (Side-mounted) -->
        <rect x="75" y="40" width="10" height="20" rx="1" />
        <line x1="75" y1="50" x2="85" y2="50" stroke-width="1" />

        <!-- Discharge / Fine Collection Bin (Bottom) -->
        <path d="M 30 70 L 70 70 L 75 85 L 25 85 Z" />
        <line x1="35" y1="78" x2="65" y2="78" stroke-width="1" stroke-dasharray="1,2" opacity="0.6" />

        <!-- Support Legs / Base -->
        <line x1="30" y1="85" x2="30" y2="95" />
        <line x1="70" y1="85" x2="70" y2="95" />
        <line x1="15" y1="95" x2="85" y2="95" />

        <!-- Label -->
        <text x="38" y="10" fill="white" font-family="Arial" font-size="7" stroke="none">GRINDER</text>
    </svg>`
  },
  {
    id: "socketing_machine",
    name: "Socketing Machine",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Main Machine Housing -->
        <rect x="20" y="30" width="60" height="40" rx="2" />

        <!-- Pipe Input (Left Side) -->
        <rect x="5" y="45" width="15" height="10" />
        <line x1="5" y1="45" x2="20" y2="45" />
        <line x1="5" y1="55" x2="20" y2="55" />

        <!-- Heating Section / Internal Oven (Dashed Box) -->
        <rect x="25" y="35" width="20" height="30" stroke-dasharray="2,2" opacity="0.7" />
        <path d="M 30 40 L 40 40 M 30 50 L 40 50 M 30 60 L 40 60" stroke-width="1" opacity="0.5" />
        <!-- Heating Coils -->

        <!-- Socketing Mandrel / Forming Die -->
        <path d="M 55 45 L 75 42 L 75 58 L 55 55 Z" fill="white" fill-opacity="0.1" />
        <line x1="55" y1="50" x2="75" y2="50" stroke-width="1" />

        <!-- Hydraulic/Pneumatic Cylinder (Right Drive) -->
        <rect x="80" y="42" width="15" height="16" rx="1" />
        <line x1="75" y1="50" x2="80" y2="50" stroke-width="3" />

        <!-- Machine Base -->
        <rect x="15" y="70" width="70" height="10" />

        <!-- Support Legs -->
        <line x1="25" y1="80" x2="25" y2="95" />
        <line x1="75" y1="80" x2="75" y2="95" />
        <line x1="10" y1="95" x2="90" y2="95" />

        <!-- Label -->
        <text x="25" y="12" fill="white" font-family="Arial" font-size="7" stroke="none">SOCKETING M/C</text>
    </svg>`
  },
  {
    id: "mixer",
    name: "Mixer",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="10" />

        <!-- Drive Motor (Top) -->
        <rect x="40" y="10" width="20" height="12" rx="1" />
        <line x1="40" y1="16" x2="60" y2="16" stroke-width="1" opacity="0.5" />

        <!-- Main Mixing Vessel (U-shaped/Cylindrical) -->
        <path d="M 25 25 L 75 25 L 75 60 Q 75 75, 50 75 Q 25 75, 25 60 Z" />

        <!-- Central Shaft -->
        <line x1="50" y1="22" x2="50" y2="65" stroke-width="1.5" />

        <!-- Mixing Paddles / Agitator -->
        <path d="M 35 40 L 50 45 L 65 40" stroke-width="1.5" />
        <path d="M 35 55 L 50 60 L 65 55" stroke-width="1.5" />

        <!-- Material Swirl/Motion Indicators -->
        <path d="M 30 35 Q 35 30, 40 35" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" />
        <path d="M 60 35 Q 65 30, 70 35" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" />

        <!-- Discharge Valve (Bottom) -->
        <rect x="45" y="75" width="10" height="6" />
        <line x1="40" y1="81" x2="60" y2="81" />

        <!-- Support Frame -->
        <line x1="25" y1="40" x2="15" y2="95" />
        <line x1="75" y1="40" x2="85" y2="95" />
        <line x1="10" y1="95" x2="90" y2="95" />

        <!-- Label -->
        <text x="40" y="8" fill="white" font-family="Arial" font-size="7" stroke="none">MIXER</text>
    </svg>`
  },
  {
    id: "roto_moulding",
    name: "ROTO Moulding",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="10" />

        <!-- Main Oven Enclosure -->
        <rect x="20" y="25" width="60" height="55" rx="2" />

        <!-- Heat/Burner Indicators (Internal) -->
        <path d="M 25 70 Q 30 60, 35 70 Q 40 60, 45 70 Q 50 60, 55 70" stroke-width="1" opacity="0.6" />

        <!-- Rotating Arm (Spindle) -->
        <line x1="10" y1="52" x2="50" y2="52" stroke-width="3" />
        <circle cx="50" cy="52" r="3" fill="white" stroke="none" /> <!-- Main Axis Pivot -->

        <!-- Biaxial Mold Holder (Frame inside oven) -->
        <rect x="40" y="40" width="20" height="24" stroke-dasharray="2,2" />

        <!-- The Mold (Central hollow shape) -->
        <path d="M 45 47 L 55 47 L 58 52 L 55 57 L 45 57 L 42 52 Z" fill="white" fill-opacity="0.1" />

        <!-- Rotation Path Indicators -->
        <path d="M 70 45 A 10 10 0 1 1 70 60" stroke-width="1" stroke-dasharray="2,1" /> <!-- Primary Rotation -->
        <path d="M 45 35 A 5 5 0 0 1 55 35" stroke-width="1" stroke-dasharray="1,1" /> <!-- Secondary Rotation -->

        <!-- Drive Motor (External Side) -->
        <rect x="5" y="45" width="10" height="15" rx="1" />
        <line x1="5" y1="52" x2="15" y2="52" stroke-width="1" opacity="0.5" />

        <!-- Machine Base -->
        <rect x="15" y="80" width="70" height="8" />
        <line x1="10" y1="95" x2="90" y2="95" />
        <line x1="25" y1="88" x2="25" y2="95" />
        <line x1="75" y1="88" x2="75" y2="95" />

        <!-- Label -->
        <text x="28" y="18" fill="white" font-family="Arial" font-size="7" stroke="none">ROTO-MOULDING</text>
    </svg>`
  },
  {
    id: "it_server",
    name: "IT Server",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Server Rack Enclosure / Chassis -->
        <rect x="20" y="15" width="60" height="70" rx="2" />

        <!-- Horizontal Server Blades / Units -->
        <line x1="25" y1="30" x2="75" y2="30" stroke-width="1" opacity="0.8" />
        <line x1="25" y1="45" x2="75" y2="45" stroke-width="1" opacity="0.8" />
        <line x1="25" y1="60" x2="75" y2="60" stroke-width="1" opacity="0.8" />

        <!-- Status LEDs (Small circles) -->
        <circle cx="30" cy="22" r="1.5" fill="white" stroke="none" />
        <circle cx="35" cy="22" r="1.5" fill="white" stroke="none" opacity="0.5" />

        <circle cx="30" cy="37" r="1.5" fill="white" stroke="none" />
        <circle cx="35" cy="37" r="1.5" fill="white" stroke="none" />

        <circle cx="30" cy="52" r="1.5" fill="white" stroke="none" opacity="0.5" />
        <circle cx="35" cy="52" r="1.5" fill="white" stroke="none" />

        <!-- Ventilation Grilles (Vertical lines) -->
        <line x1="60" y1="20" x2="60" y2="25" stroke-width="1" />
        <line x1="64" y1="20" x2="64" y2="25" stroke-width="1" />
        <line x1="68" y1="20" x2="68" y2="25" stroke-width="1" />
        <line x1="72" y1="20" x2="72" y2="25" stroke-width="1" />

        <!-- Network / Data Symbol (Ethernet Port) -->
        <rect x="45" y="72" width="10" height="8" stroke-width="1" />
        <line x1="45" y1="80" x2="40" y2="90" stroke-width="1" />
        <line x1="55" y1="80" x2="60" y2="90" stroke-width="1" />

        <!-- Base / Feet -->
        <line x1="25" y1="85" x2="25" y2="95" />
        <line x1="75" y1="85" x2="75" y2="95" />
        <line x1="15" y1="95" x2="85" y2="95" />

        <!-- Label -->
        <text x="35" y="10" fill="white" font-family="Arial" font-size="7" stroke="none">IT-SERVER</text>
    </svg>`
  },
  {
    id: "air_compressor",
    name: "Air Compressor",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Compressor Pump & Motor Unit (Top of Tank) -->
        <rect x="30" y="15" width="25" height="15" rx="1" /> <!-- Motor -->
        <rect x="55" y="18" width="15" height="12" /> <!-- Pump -->
        <line x1="50" y1="22" x2="55" y2="22" stroke-width="1" /> <!-- Coupling -->

        <!-- Main Pressure Tank (Horizontal Receiver) -->
        <rect x="15" y="35" width="70" height="35" rx="10" />

        <!-- Cooling Fins/Detail on Tank -->
        <line x1="25" y1="45" x2="75" y2="45" stroke-width="1" opacity="0.3" />
        <line x1="25" y1="55" x2="75" y2="55" stroke-width="1" opacity="0.3" />

        <!-- Pressure Gauge -->
        <circle cx="75" cy="25" r="7" />
        <line x1="75" y1="25" x2="80" y2="20" stroke-width="1.5" /> <!-- Needle -->
        <line x1="75" y1="32" x2="75" y2="35" /> <!-- Connection to tank -->

        <!-- Outlet Valve / Air Line -->
        <path d="M 85 52 L 95 52 M 90 47 L 90 57" stroke-width="1.5" />
        <circle cx="90" cy="52" r="2" fill="white" stroke="none" />

        <!-- Support Legs / Wheels -->
        <circle cx="25" cy="78" r="5" /> <!-- Wheel 1 -->
        <circle cx="75" cy="78" r="5" /> <!-- Wheel 2 -->
        <line x1="10" y1="83" x2="90" y2="83" /> <!-- Ground Line -->

        <!-- Label -->
        <text x="30" y="10" fill="white" font-family="Arial" font-size="7" stroke="none">AIR-COMPRESSOR</text>
    </svg>`
  },
  {
    id: "vapourizer",
    name: "Vapourizer",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Main Vapourizer Vessel (Vertical) -->
        <rect x="30" y="15" width="40" height="65" rx="5" />

        <!-- Internal Heating Coils / Element -->
        <path d="M 40 30 L 60 35 L 40 40 L 60 45 L 40 50 L 60 55" stroke-width="1.5" opacity="0.7" />

        <!-- Liquid Inlet (Bottom Side) -->
        <line x1="10" y1="70" x2="30" y2="70" />
        <circle cx="10" cy="70" r="2" fill="white" stroke="none" />
        <text x="5" y="65" fill="white" font-family="Arial" font-size="5" stroke="none">LIQ</text>

        <!-- Vapour Outlet (Top Side) -->
        <line x1="70" y1="25" x2="90" y2="25" />
        <path d="M 85 20 L 95 25 L 85 30" stroke-width="1" />
        <text x="75" y="20" fill="white" font-family="Arial" font-size="5" stroke="none">VAP</text>

        <!-- Pressure/Temperature Gauge -->
        <circle cx="75" cy="50" r="6" />
        <line x1="75" y1="50" x2="79" y2="46" stroke-width="1" />
        <line x1="70" y1="50" x2="75" y2="50" stroke-width="1" />

        <!-- Support Legs / Base -->
        <line x1="35" y1="80" x2="35" y2="95" />
        <line x1="65" y1="80" x2="65" y2="95" />
        <line x1="20" y1="95" x2="80" y2="95" />

        <!-- Label -->
        <text x="32" y="10" fill="white" font-family="Arial" font-size="7" stroke="none">VAPOURIZER</text>
    </svg>`
  },
  {
    id: "pulverizer",
    name: "Pulverizer",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Feed Hopper (Material Intake) -->
        <path d="M 35 15 L 65 15 L 60 30 L 40 30 Z" />

        <!-- Main Pulverizing Chamber (Cylindrical Housing) -->
        <circle cx="50" cy="50" r="20" />

        <!-- High-Speed Beater / Hammer Mill Symbol -->
        <circle cx="50" cy="50" r="3" fill="white" stroke="none" />
        <path d="M 50 35 L 50 65 M 35 50 L 65 50" stroke-width="1.5" />
        <path d="M 40 40 L 60 60 M 60 40 L 40 60" stroke-width="1" opacity="0.6" />

        <!-- Fine Mesh Screen Indicator (Bottom of chamber) -->
        <path d="M 35 62 Q 50 72, 65 62" stroke-dasharray="1,1" stroke-width="1" />

        <!-- Drive Motor (Side-mounted) -->
        <rect x="70" y="42" width="12" height="16" rx="1" />
        <line x1="65" y1="50" x2="70" y2="50" stroke-width="1" />

        <!-- Discharge Chute -->
        <path d="M 40 70 L 40 85 L 60 85 L 60 70" />

        <!-- Fine Dust/Powder Indicators -->
        <circle cx="45" cy="90" r="0.5" fill="white" stroke="none" />
        <circle cx="50" cy="92" r="0.5" fill="white" stroke="none" />
        <circle cx="55" cy="90" r="0.5" fill="white" stroke="none" />

        <!-- Support Base -->
        <line x1="20" y1="95" x2="80" y2="95" />
        <line x1="30" y1="85" x2="30" y2="95" />
        <line x1="70" y1="85" x2="70" y2="95" />

        <!-- Label -->
        <text x="32" y="10" fill="white" font-family="Arial" font-size="7" stroke="none">PULVERIZER</text>
    </svg>`
  },
  {
    id: "refrigeration",
    name: "Refrigeration",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Main Refrigeration Cabinet/Housing -->
        <rect x="20" y="15" width="60" height="70" rx="2" />

        <!-- Internal Evaporator Coils (Top Section) -->
        <path d="M 30 25 Q 40 20, 50 25 Q 60 30, 70 25" stroke-width="1.5" opacity="0.8" />
        <path d="M 30 35 Q 40 30, 50 35 Q 60 40, 70 35" stroke-width="1.5" opacity="0.8" />

        <!-- Compressor Symbol (Bottom) -->
        <circle cx="35" cy="70" r="8" />
        <path d="M 31 70 L 39 70 M 35 66 L 35 74" stroke-width="1" />

        <!-- Condenser Fan Symbol (Bottom Right) -->
        <circle cx="65" cy="70" r="8" stroke-dasharray="2,2" />
        <path d="M 61 66 L 69 74 M 69 66 L 61 74" stroke-width="1.5" />

        <!-- Refrigerant Lines (Connecting components) -->
        <path d="M 35 62 L 35 45 L 65 45 L 65 62" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />

        <!-- Thermal Insulation Layers (Side markings) -->
        <line x1="20" y1="20" x2="25" y2="20" stroke-width="1" />
        <line x1="75" y1="20" x2="80" y2="20" stroke-width="1" />
        <line x1="20" y1="80" x2="25" y2="80" stroke-width="1" />
        <line x1="75" y1="80" x2="80" y2="80" stroke-width="1" />

        <!-- Support Feet -->
        <line x1="30" y1="85" x2="30" y2="95" />
        <line x1="70" y1="85" x2="70" y2="95" />
        <line x1="15" y1="95" x2="85" y2="95" />

        <!-- Label -->
        <text x="28" y="12" fill="white" font-family="Arial" font-size="7" stroke="none">REFRIGERATION</text>
    </svg>`
  },
  {
    id: "plate",
    name: "PLATEHX",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Main PHE Frame (Front Pressure Plate) -->
        <rect x="30" y="20" width="40" height="65" rx="2" />

        <!-- Stacked Plates Representation (Horizontal Lines) -->
        <line x1="35" y1="30" x2="65" y2="30" stroke-width="1" opacity="0.8" />
        <line x1="35" y1="35" x2="65" y2="35" stroke-width="1" opacity="0.8" />
        <line x1="35" y1="40" x2="65" y2="40" stroke-width="1" opacity="0.8" />
        <line x1="35" y1="45" x2="65" y2="45" stroke-width="1" opacity="0.8" />
        <line x1="35" y1="50" x2="65" y2="50" stroke-width="1" opacity="0.8" />
        <line x1="35" y1="55" x2="65" y2="55" stroke-width="1" opacity="0.8" />
        <line x1="35" y1="60" x2="65" y2="60" stroke-width="1" opacity="0.8" />
        <line x1="35" y1="65" x2="65" y2="65" stroke-width="1" opacity="0.8" />

        <!-- Fluid Ports (Primary Circuit) -->
        <!-- Top Left Inlet -->
        <circle cx="38" cy="28" r="3" fill="white" stroke="none" />
        <line x1="15" y1="28" x2="35" y2="28" stroke-width="1.5" />

        <!-- Bottom Left Outlet -->
        <circle cx="38" cy="77" r="3" fill="white" stroke="none" />
        <line x1="15" y1="77" x2="35" y2="77" stroke-width="1.5" />

        <!-- Fluid Ports (Secondary Circuit) -->
        <!-- Top Right Outlet -->
        <circle cx="62" cy="28" r="3" stroke-width="1.5" />
        <line x1="65" y1="28" x2="85" y2="28" stroke-width="1.5" />

        <!-- Bottom Right Inlet -->
        <circle cx="62" cy="77" r="3" stroke-width="1.5" />
        <line x1="65" y1="77" x2="85" y2="77" stroke-width="1.5" />

        <!-- Tightening Bolts / Tie Rods -->
        <line x1="25" y1="25" x2="75" y2="25" stroke-width="1" stroke-dasharray="2,2" />
        <line x1="25" y1="80" x2="75" y2="80" stroke-width="1" stroke-dasharray="2,2" />

        <!-- Support Base -->
        <line x1="30" y1="85" x2="30" y2="95" />
        <line x1="70" y1="85" x2="70" y2="95" />
        <line x1="15" y1="95" x2="85" y2="95" />

        <!-- Label -->
        <text x="32" y="12" fill="white" font-family="Arial" font-size="7" stroke="none">PLATE HX</text>
    </svg>`
  },
  {
    id: "conveyor",
    name: "Conveyor",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="20" />

        <!-- Main Conveyor Belt (Loop) -->
        <rect x="10" y="40" width="80" height="20" rx="10" />

        <!-- Internal Rollers / Pulleys -->
        <circle cx="20" cy="50" r="6" />
        <circle cx="35" cy="50" r="4" opacity="0.6" />
        <circle cx="50" cy="50" r="4" opacity="0.6" />
        <circle cx="65" cy="50" r="4" opacity="0.6" />
        <circle cx="80" cy="50" r="6" />

        <!-- Drive Motor (Connected to end roller) -->
        <rect x="75" y="25" width="12" height="15" rx="1" />
        <line x1="80" y1="40" x2="80" y2="44" stroke-width="1" />

        <!-- Material/Package on Belt -->
        <rect x="40" y="32" width="12" height="8" stroke-width="1.5" />
        <rect x="20" y="32" width="10" height="8" stroke-width="1.5" opacity="0.7" />

        <!-- Support Structure / Legs -->
        <line x1="20" y1="60" x2="15" y2="90" />
        <line x1="80" y1="60" x2="85" y2="90" />
        <line x1="10" y1="90" x2="90" y2="90" />

        <!-- Flow Direction Arrow -->
        <path d="M 45 75 L 55 75 L 52 72 M 52 78 L 55 75" stroke-width="1" />

        <!-- Label -->
        <text x="35" y="15" fill="white" font-family="Arial" font-size="7" stroke="none">CONVEYOR</text>
    </svg>`
  },
  {
    id: "pelletizer",
    name: "Pelletizer",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Input Flange (From Extruder) -->
        <rect x="10" y="45" width="10" height="15" />
        <line x1="20" y1="52" x2="30" y2="52" />

        <!-- Main Pelletizing Chamber (Die Face & Cutter) -->
        <circle cx="50" cy="52" r="22" />
        <circle cx="50" cy="52" r="18" stroke-dasharray="2,2" opacity="0.6" />

        <!-- Rotating Knife Assembly -->
        <path d="M 50 38 L 50 44 M 50 60 L 50 66 M 36 52 L 42 52 M 58 52 L 64 52" stroke-width="2" />
        <circle cx="50" cy="52" r="3" fill="white" stroke="none" />

        <!-- Water Inlet/Outlet (Cooling Ring) -->
        <path d="M 35 25 L 42 32" stroke-width="1.5" /> <!-- Water In -->
        <path d="M 65 25 L 58 32" stroke-width="1.5" /> <!-- Water Out -->
        <text x="30" y="22" fill="white" font-family="Arial" font-size="5" stroke="none">H2O</text>

        <!-- Drive Motor (Back-mounted) -->
        <rect x="72" y="42" width="15" height="20" rx="1" />
        <line x1="72" y1="48" x2="87" y2="48" stroke-width="1" opacity="0.5" />
        <line x1="72" y1="56" x2="87" y2="56" stroke-width="1" opacity="0.5" />

        <!-- Pellet Discharge Chute (Bottom) -->
        <path d="M 40 72 L 35 90 L 65 90 L 60 72" />

        <!-- Pellet Representation (Small dots) -->
        <circle cx="45" cy="82" r="1" fill="white" stroke="none" />
        <circle cx="55" cy="78" r="1" fill="white" stroke="none" />
        <circle cx="50" cy="85" r="1" fill="white" stroke="none" />

        <!-- Base Support -->
        <line x1="15" y1="95" x2="85" y2="95" />
        <line x1="30" y1="90" x2="30" y2="95" />
        <line x1="70" y1="90" x2="70" y2="95" />

        <!-- Label -->
        <text x="32" y="12" fill="white" font-family="Arial" font-size="7" stroke="none">PELLETIZER</text>
    </svg>`
  },
  {
    id: "compressor",
    name: "Compressor",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Compressor Housing (Circular/Centrifugal style) -->
        <circle cx="50" cy="50" r="30" />

        <!-- Internal Impeller/Vane Symbol -->
        <circle cx="50" cy="50" r="5" fill="white" stroke="none" />
        <path d="M 50 30 L 50 40 M 50 60 L 50 70 M 30 50 L 40 50 M 60 50 L 70 50" stroke-width="1.5" />
        <path d="M 36 36 L 43 43 M 57 57 L 64 64 M 64 36 L 57 43 M 43 57 L 36 64" stroke-width="1" opacity="0.6" />

        <!-- Suction/Inlet Port (Left) -->
        <line x1="0" y1="50" x2="20" y2="50" stroke-width="3" />
        <path d="M 5 45 L 15 50 L 5 55" stroke-width="1.5" />

        <!-- Discharge Port (Top Right) -->
        <line x1="72" y1="28" x2="85" y2="15" stroke-width="3" />
        <path d="M 78 12 L 88 12 L 88 22" stroke-width="1.5" />

        <!-- Pressure Gauge (Top Left) -->
        <circle cx="25" cy="25" r="8" />
        <line x1="25" y1="25" x2="30" y2="20" stroke-width="1.5" />
        <line x1="30" y1="31" x2="33" y2="34" stroke-width="1" />

        <!-- Support Legs / Base -->
        <line x1="30" y1="78" x2="25" y2="95" />
        <line x1="70" y1="78" x2="75" y2="95" />
        <line x1="15" y1="95" x2="85" y2="95" />

        <!-- Label -->
        <text x="28" y="12" fill="white" font-family="Arial" font-size="7" stroke="none">COMPRESSOR</text>
    </svg>`
  },
  {
    id: "spare",
    name: "Spare",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) - Shows the slot is wired but empty -->
        <line x1="50" y1="0" x2="50" y2="25" />

        <!-- Generic Equipment Housing (Dashed to indicate absence/spare) -->
        <rect x="25" y="25" width="50" height="50" rx="2" stroke-dasharray="4,4" opacity="0.5" />

        <!-- Large "X" or Strikethrough indicating Spare/Empty status -->
        <line x1="25" y1="25" x2="75" y2="75" stroke-width="1" opacity="0.8" />
        <line x1="75" y1="25" x2="25" y2="75" stroke-width="1" opacity="0.8" />

        <!-- Support Base (Optional, to match layout of other components) -->
        <line x1="15" y1="90" x2="85" y2="90" stroke-width="1" opacity="0.4" />
        <line x1="30" y1="75" x2="30" y2="90" stroke-width="1" opacity="0.4" />
        <line x1="70" y1="75" x2="70" y2="90" stroke-width="1" opacity="0.4" />

        <!-- Label -->
        <text x="35" y="53" fill="white" font-family="Arial" font-size="9" font-weight="bold" stroke="none">SPARE</text>
    </svg>`
  },
  {
    id: "ct_fan",
    name: "CT Fan",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="15" />

        <!-- Cooling Tower Fan Stack / Shroud -->
        <path d="M 30 15 L 70 15 L 75 40 L 25 40 Z" stroke-width="2" />

        <!-- Fan Blade Assembly (Top View/Plan) -->
        <circle cx="50" cy="27" r="12" stroke-dasharray="2,2" opacity="0.6" />
        <circle cx="50" cy="27" r="2" fill="white" stroke="none" />
        <!-- 4-Blade Fan Representation -->
        <path d="M 50 18 L 50 36 M 41 27 L 59 27" stroke-width="2" />

        <!-- Airflow Upward Indicators -->
        <path d="M 40 10 L 40 5 M 40 5 L 37 8 M 43 8 L 40 5" stroke-width="1" />
        <path d="M 60 10 L 60 5 M 60 5 L 57 8 M 63 8 L 60 5" stroke-width="1" />

        <!-- Main Tower Structure / Basin Section -->
        <rect x="20" y="40" width="60" height="40" rx="1" />

        <!-- Louver/Fill Detail (Internal) -->
        <line x1="25" y1="50" x2="75" y2="50" stroke-width="1" stroke-dasharray="3,3" opacity="0.5" />
        <line x1="25" y1="60" x2="75" y2="60" stroke-width="1" stroke-dasharray="3,3" opacity="0.5" />
        <line x1="25" y1="70" x2="75" y2="70" stroke-width="1" stroke-dasharray="3,3" opacity="0.5" />

        <!-- Support Structure -->
        <line x1="20" y1="80" x2="15" y2="95" />
        <line x1="80" y1="80" x2="85" y2="95" />
        <line x1="10" y1="95" x2="90" y2="95" />

        <!-- Label -->
        <text x="35" y="55" fill="white" font-family="Arial" font-size="8" font-weight="bold" stroke="none">CT
            FAN</text>
    </svg>`
  },
  {
    id: "amf",
    name: "AMF",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Main Panel Enclosure -->
        <rect x="20" y="15" width="60" height="75" rx="2" />

        <!-- Incoming Supply 1: Grid (Top Left) -->
        <line x1="35" y1="0" x2="35" y2="15" />
        <circle cx="35" cy="25" r="2" fill="white" stroke="none" />
        <text x="25" y="10" fill="white" font-family="Arial" font-size="5" stroke="none">GRID</text>

        <!-- Incoming Supply 2: Generator (Top Right) -->
        <line x1="65" y1="0" x2="65" y2="15" />
        <circle cx="65" cy="25" r="2" fill="white" stroke="none" />
        <text x="60" y="10" fill="white" font-family="Arial" font-size="5" stroke="none">DG</text>

        <!-- AMF Logic Controller (Center) -->
        <rect x="35" y="35" width="30" height="20" stroke-dasharray="2,2" />
        <text x="40" y="47" fill="white" font-family="Arial" font-size="6" stroke="none">AMF</text>

        <!-- Automatic Changeover Switch Symbol -->
        <path d="M 35 25 L 50 65" stroke-width="1.5" /> <!-- Switch Blade -->
        <circle cx="50" cy="65" r="3" fill="white" stroke="none" /> <!-- Common Point -->

        <!-- Status Indicators (LEDs) -->
        <circle cx="35" cy="80" r="1.5" fill="white" stroke="none" />
        <circle cx="50" cy="80" r="1.5" fill="white" stroke="none" opacity="0.5" />
        <circle cx="65" cy="80" r="1.5" fill="white" stroke="none" />

        <!-- Outgoing Load (Bottom) -->
        <line x1="50" y1="65" x2="50" y2="100" />
        <path d="M 45 95 L 50 100 L 55 95" stroke-width="1.5" />

        <!-- Label -->
        <text x="32" y="30" fill="white" font-family="Arial" font-size="8" font-weight="bold" stroke="none">AMF
            PANEL</text>
    </svg>`
  },
  {
    id: "room",
    name: "Room",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Room Boundary / Walls -->
        <!-- Top Wall -->
        <line x1="20" y1="20" x2="80" y2="20" />
        <!-- Left Wall -->
        <line x1="20" y1="20" x2="20" y2="80" />
        <!-- Right Wall -->
        <line x1="80" y1="20" x2="80" y2="80" />
        <!-- Bottom Wall (with Door gap) -->
        <line x1="20" y1="80" x2="40" y2="80" />
        <line x1="60" y1="80" x2="80" y2="80" />

        <!-- Door Representation (Open Swing) -->
        <path d="M 40 80 Q 50 70, 60 80" stroke-width="1" stroke-dasharray="2,2" />
        <line x1="40" y1="80" x2="50" y2="70" />

        <!-- Internal Room Detail (Window indicator) -->
        <line x1="80" y1="40" x2="85" y2="40" stroke-width="1" />
        <line x1="80" y1="60" x2="85" y2="60" stroke-width="1" />

        <!-- Support / Floor Line -->
        <line x1="10" y1="95" x2="90" y2="95" stroke-width="1" opacity="0.5" />

        <!-- Label -->
        <text x="38" y="52" fill="white" font-family="Arial" font-size="10" font-weight="bold" stroke="none"></text>
    </svg>`
  },
  {
    id: "area",
    name: "Area",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Area Boundary (Large Hexagonal/Octagonal Zone) -->
        <path d="M 30 15 L 70 15 L 90 35 L 90 75 L 70 95 L 30 95 L 10 75 L 10 35 Z" stroke-dasharray="4,2"
            opacity="0.8" />

        <!-- Interior Division lines to indicate sub-sections -->
        <line x1="10" y1="55" x2="30" y2="55" stroke-width="1" opacity="0.5" />
        <line x1="70" y1="55" x2="90" y2="55" stroke-width="1" opacity="0.5" />

        <!-- Corner Markers (L-shapes) -->
        <path d="M 15 35 L 15 25 L 25 25" stroke-width="1" />
        <path d="M 75 25 L 85 25 L 85 35" stroke-width="1" />
        <path d="M 15 75 L 15 85 L 25 85" stroke-width="1" />
        <path d="M 75 85 L 85 85 L 85 75" stroke-width="1" />
 </svg>`
  },
  {
    id: "shopfloor",
    name: "Shop Floor",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Shop Floor Boundary (Industrial Roof Profile) -->
        <path d="M 10 35 L 10 90 L 90 90 L 90 35 L 70 20 L 70 35 L 50 20 L 50 35 L 30 20 L 30 35 Z"
            stroke-dasharray="4,2" opacity="0.8" />

        <!-- Floor Grid / Bay Indicators -->
        <line x1="30" y1="90" x2="30" y2="75" stroke-width="1" opacity="0.5" />
        <line x1="50" y1="90" x2="50" y2="75" stroke-width="1" opacity="0.5" />
        <line x1="70" y1="90" x2="70" y2="75" stroke-width="1" opacity="0.5" />

        <!-- Corner Markers (L-shapes) -->
        <path d="M 15 45 L 15 35 L 25 35" stroke-width="1" />
        <path d="M 75 35 L 85 35 L 85 45" stroke-width="1" />
        <path d="M 15 80 L 15 90 L 25 90" stroke-width="1" />
        <path d="M 75 90 L 85 90 L 85 80" stroke-width="1" />

        <!-- Label -->
        <text x="22" y="60" fill="white" font-family="Arial" font-size="10" font-weight="bold"
            stroke="none">SHOFLOOR</text>
    </svg>`
  },
  {
    id: "plant",
    name: "Plant",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="10" />

        <!-- Plant Boundary (Industrial Facility Profile) -->
        <!-- Main building with serrated roof and a cooling/exhaust stack -->
        <path
            d="M 10 40 L 10 90 L 90 90 L 90 40 L 80 40 L 80 20 L 70 20 L 70 40 L 55 25 L 55 40 L 40 25 L 40 40 L 25 25 L 25 40 Z"
            stroke-dasharray="4,2" opacity="0.8" />

        <!-- Stack/Chimney Detail (Emissions/Vapour) -->
        <path d="M 72 15 Q 75 10, 78 15" stroke-width="1" opacity="0.6" />
        <path d="M 73 10 Q 75 5, 77 10" stroke-width="1" opacity="0.4" />

        <!-- Internal Facility Markers -->
        <line x1="20" y1="90" x2="20" y2="80" stroke-width="1" opacity="0.5" />
        <line x1="80" y1="90" x2="80" y2="80" stroke-width="1" opacity="0.5" />

        <!-- Corner Markers (L-shapes) -->
        <path d="M 15 50 L 15 40 L 25 40" stroke-width="1" />
        <path d="M 75 40 L 85 40 L 85 50" stroke-width="1" />
        <path d="M 15 80 L 15 90 L 25 90" stroke-width="1" />
        <path d="M 75 90 L 85 90 L 85 80" stroke-width="1" />

        <!-- Label -->
        <text x="32" y="65" fill="white" font-family="Arial" font-size="12" font-weight="bold"
            stroke="none">PLANT</text>
    </svg>`
  },
  {
    id: "vgb",
    name: "VCB",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="20" />

        <!-- VCB Housing (Main Outer Frame) -->
        <rect x="25" y="20" width="50" height="60" rx="1" />

        <!-- Vacuum Interrupter "Bottle" Symbol -->
        <rect x="40" y="30" width="20" height="30" rx="10" stroke-dasharray="1,1" opacity="0.8" />

        <!-- Circuit Breaker 'X' (Indicates Switching/Breaking Function) -->
        <line x1="35" y1="35" x2="65" y2="55" />
        <line x1="65" y1="35" x2="35" y2="55" />

        <!-- Operating Mechanism / Spring Charge Indicator -->
        <circle cx="50" cy="68" r="4" />
        <path d="M 46 68 L 54 68 M 50 64 L 50 72" stroke-width="1" />

        <!-- Connection Point (Bottom) -->
        <line x1="50" y1="80" x2="50" y2="100" />

        <!-- Status Label -->
        <text x="40" y="15" fill="white" font-family="Arial" font-size="8" font-weight="bold" stroke="none">VCB</text>

        <!-- Withdrawal/Truck Indicator (Vertical Side Lines) -->
        <line x1="20" y1="25" x2="20" y2="75" stroke-width="1" opacity="0.5" />
        <line x1="80" y1="25" x2="80" y2="75" stroke-width="1" opacity="0.5" />
    </svg>`
  },
  {
    id: "mold",
    name: "Mold",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

        <!-- Upper Mold Half (Cope) -->
        <rect x="20" y="25" width="60" height="25" rx="1" />

        <!-- Lower Mold Half (Drag) -->
        <rect x="20" y="50" width="60" height="25" rx="1" />

        <!-- Parting Line (Heavy Middle Line) -->
        <line x1="15" y1="50" x2="85" y2="50" stroke-width="3" />

        <!-- Internal Cavity Symbol (The part being molded) -->
        <circle cx="50" cy="50" r="10" stroke-dasharray="2,2" opacity="0.7" />

        <!-- Alignment Pins / Guide Bushings -->
        <circle cx="25" cy="50" r="3" fill="white" stroke="none" />
        <circle cx="75" cy="50" r="3" fill="white" stroke="none" />

        <!-- Cooling Channels (Side indicators) -->
        <path d="M 85 30 Q 90 35, 85 40" stroke-width="1" opacity="0.5" />
        <path d="M 85 60 Q 90 65, 85 70" stroke-width="1" opacity="0.5" />

        <!-- Support / Press Platen (Bottom) -->
        <line x1="10" y1="85" x2="90" y2="85" stroke-width="2" />
        <line x1="30" y1="85" x2="30" y2="100" />
        <line x1="70" y1="85" x2="70" y2="100" />

    </svg>`
  },
  {
    id: "machine",
    name: "Machine",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="20" />

        <!-- Main Machine Enclosure/Housing -->
        <rect x="20" y="20" width="60" height="60" rx="2" />

        <!-- Operator Interface / Control Panel (Top Left) -->
        <rect x="25" y="25" width="15" height="10" stroke-width="1" />
        <circle cx="28" cy="30" r="1" fill="white" stroke="none" />
        <circle cx="32" cy="30" r="1" fill="white" stroke="none" />

        <!-- Rotating Drive / Flywheel Symbol (Center) -->
        <circle cx="50" cy="50" r="15" stroke-dasharray="4,2" opacity="0.6" />
        <circle cx="50" cy="50" r="4" />
        <path d="M 50 35 L 50 42 M 50 58 L 50 65 M 35 50 L 42 50 M 58 50 L 65 50" stroke-width="1.5" />

        <!-- Access Panel / Maintenance Door -->
        <line x1="65" y1="25" x2="75" y2="25" stroke-width="1" />
        <line x1="75" y1="25" x2="75" y2="75" stroke-width="1" />
        <line x1="65" y1="75" x2="75" y2="75" stroke-width="1" />

        <!-- Support Legs / Vibration Mounts -->
        <line x1="25" y1="80" x2="20" y2="95" />
        <line x1="75" y1="80" x2="80" y2="95" />
        <line x1="10" y1="95" x2="90" y2="95" />

        <!-- Label -->
        <text x="32" y="15" fill="white" font-family="Arial" font-size="8" font-weight="bold"
            stroke="none"></text>
    </svg>`
  },
  {
    id: "brass_insert",
    name: "Brass Inset",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Electrical Connection Lead (Top) -->
        <line x1="50" y1="0" x2="50" y2="20" />
    
        <!-- Main Body of the Insert (Cylindrical) -->
        <rect x="30" y="20" width="40" height="60" rx="2" />
    
        <!-- Diamond Knurling Pattern (Top Section) -->
        <path d="M 30 30 L 70 40 M 30 40 L 70 30" stroke-width="1" opacity="0.6" />
        <path d="M 30 40 L 70 50 M 30 50 L 70 40" stroke-width="1" opacity="0.6" />
    
        <!-- Internal Thread Representation (Center) -->
        <line x1="40" y1="25" x2="40" y2="75" stroke-width="1" stroke-dasharray="2,2" />
        <line x1="60" y1="25" x2="60" y2="75" stroke-width="1" stroke-dasharray="2,2" />
    
        <!-- Thread Pitch Lines (Internal) -->
        <path d="M 40 35 L 45 38 M 40 45 L 45 48 M 40 55 L 45 58 M 40 65 L 45 68" stroke-width="1" />
        <path d="M 60 35 L 55 38 M 60 45 L 55 48 M 60 55 L 55 58 M 60 65 L 55 68" stroke-width="1" />
    
        <!-- Undercut / Groove (Bottom Section) -->
        <rect x="35" y="65" width="30" height="5" stroke-width="1" opacity="0.8" />
    
        <!-- Flange / Head (Bottom) -->
        <line x1="25" y1="80" x2="75" y2="80" stroke-width="3" />
    
        <!-- Material Color Hint (Optional label or shading) -->
        <circle cx="50" cy="50" r="5" stroke-width="1" stroke-dasharray="1,1" opacity="0.3" />
    
        <!-- Support / Mounting Surface -->
        <line x1="10" y1="95" x2="90" y2="95" stroke-width="1" opacity="0.5" />
    
        <!-- Label -->
        <text x="30" y="15" fill="white" font-family="Arial" font-size="7" font-weight="bold" stroke="none">BRASS
            INSERT</text>
    </svg>`
  }
];
class R {
  /**
   * @param {HTMLElement|string} container - The target DOM element or its ID.
   * @param {Object} options - Configuration options.
   * @param {Object} options.config - The layout JSON (nodes and connections).
   * @param {Object} [options.liveData] - Initial live values for the nodes.
   * @param {number} [options.zoom=1.0] - Initial zoom level.
   * @param {boolean} [options.showToolbar=true] - Whether to show the top toolbar.
   * @param {Object} [options.poll] - Optional polling configuration.
   * @param {number} [options.poll.interval=2000] - Polling interval in ms.
   * @param {Function} [options.poll.fetch] - Async function that returns new live data.
   */
  constructor(e, t = {}) {
    if (this.container = typeof e == "string" ? document.getElementById(e) : e, !this.container) throw new Error("SLDViewer: Container not found.");
    this.config = t.config || { nodes: [], connections: [] }, this.liveData = t.liveData || {}, this.options = {
      zoom: 1,
      showToolbar: !0,
      ...t
    }, this.state = {
      nodes: JSON.parse(JSON.stringify(this.config.nodes || [])),
      connections: JSON.parse(JSON.stringify(this.config.connections || [])),
      zoom: this.options.zoom,
      isDataLive: !!(t.poll && t.poll.fetch),
      fullscreen: !1
    }, this.pollTimer = null, this.initDOM(), this.render(), this.state.isDataLive && this.startPolling();
  }
  initDOM() {
    this.container.classList.add("sld-viewer-container"), this.viewerMain = document.createElement("div"), this.viewerMain.className = "sld-viewer-main", this.viewerMain.innerHTML = `
            <div class="sld-toolbar" style="${this.options.showToolbar ? "" : "display:none"}">
                <span class="sld-title">SLD Dashboard</span>
                <div class="sld-zoom-controls">
                    <button class="sld-btn sld-zoom-out">-</button>
                    <span class="sld-zoom-level">100%</span>
                    <button class="sld-btn sld-zoom-in">+</button>
                    <button class="sld-btn sld-zoom-reset">Reset</button>
                </div>
                <button class="sld-btn sld-fullscreen">Fullscreen</button>
            </div>
            <div class="sld-canvas-container">
                <svg class="sld-canvas" xmlns="http://www.w3.org/2000/svg" width="2400" height="2400">
                    <defs>
                        <!-- Standard Arrowhead (Target Side) -->
                        <marker id="sld-marker-end" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.7)" />
                        </marker>
                        <!-- Reversed Arrowhead (Source Side) -->
                        <marker id="sld-marker-start" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto">
                            <polygon points="10 0, 0 3.5, 10 7" fill="rgba(255,255,255,0.7)" />
                        </marker>
                    </defs>
                    <g class="layer-connections"></g>
                    <g class="layer-nodes"></g>
                </svg>
            </div>
        `, this.container.appendChild(this.viewerMain), this.canvas = this.viewerMain.querySelector(".sld-canvas"), this.layerNodes = this.viewerMain.querySelector(".layer-nodes"), this.layerConnections = this.viewerMain.querySelector(".layer-connections"), this.canvasContainer = this.viewerMain.querySelector(".sld-canvas-container"), this.zoomLevelText = this.viewerMain.querySelector(".sld-zoom-level"), this.bindEvents();
  }
  bindEvents() {
    this.viewerMain.querySelector(".sld-zoom-in").onclick = () => this.updateZoom(this.state.zoom + 0.1), this.viewerMain.querySelector(".sld-zoom-out").onclick = () => this.updateZoom(this.state.zoom - 0.1), this.viewerMain.querySelector(".sld-zoom-reset").onclick = () => {
      this.updateZoom(1), this.canvasContainer.scrollLeft = 0, this.canvasContainer.scrollTop = 0;
    }, this.viewerMain.querySelector(".sld-fullscreen").onclick = () => this.toggleFullscreen(), document.addEventListener("fullscreenchange", () => {
      this.state.fullscreen = !!document.fullscreenElement, this.viewerMain.querySelector(".sld-fullscreen").textContent = this.state.fullscreen ? "Exit Fullscreen" : "Fullscreen";
    });
  }
  updateZoom(e) {
    this.state.zoom = Math.max(0.1, Math.min(3, e)), this.canvas.style.transform = `scale(${this.state.zoom})`, this.zoomLevelText && (this.zoomLevelText.textContent = Math.round(this.state.zoom * 100) + "%");
  }
  toggleFullscreen() {
    document.fullscreenElement ? document.exitFullscreen() : this.viewerMain.requestFullscreen().catch((e) => {
      console.error(`Error attempting to enable fullscreen: ${e.message}`);
    });
  }
  /**
   * Updates the live data and triggers a re-render.
   * @param {Object} newData - New live data object.
   */
  updateData(e) {
    this.liveData = { ...this.liveData, ...e }, this.render();
  }
  render() {
    this.layerNodes.innerHTML = "", this.layerConnections.innerHTML = "", this.state.connections.forEach((e) => this.drawConnection(e)), this.state.nodes.forEach((e) => this.drawNode(e));
  }
  drawNode(e) {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "g");
    t.setAttribute("class", "sld-node-group"), t.setAttribute("transform", `translate(${e.x}, ${e.y})`);
    const a = D.find((i) => i.id === e.symbolId);
    if (a) {
      const i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      i.setAttribute("width", e.width), i.setAttribute("height", e.height), i.setAttribute("viewBox", "0 0 100 100"), i.classList.add("sld-node-symbol");
      const n = a.svg.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, "");
      i.innerHTML = `<g transform="rotate(${e.rotation || 0} 50 50)">${n}</g>`, t.appendChild(i);
    }
    const s = this.liveData[e.id] || e.liveData || {};
    if (e.statusRequired !== !1) {
      const i = document.createElementNS("http://www.w3.org/2000/svg", "circle"), n = Math.max(2, e.width * 0.05);
      i.setAttribute("cx", e.width - n - e.width * 0.05), i.setAttribute("cy", n + e.height * 0.05), i.setAttribute("r", n);
      const o = s.status || e.status || "white";
      let r = o;
      o === "alarm" || o.includes("red") ? (r = "#ef4444", i.classList.add("sld-blink")) : o === "stale" ? r = "#eab308" : o === "healthy" || o === "online" || o === "green" ? r = "#22c55e" : o === "white" && (r = "#ffffff"), i.setAttribute("fill", r), i.setAttribute("class", `sld-status-indicator ${i.classList.contains("sld-blink") ? "sld-blink" : ""}`), t.appendChild(i);
    }
    this.drawSlots(t, e, s), this.layerNodes.appendChild(t);
  }
  /**
   * Simple HTML sanitizer to allow only safe formatting tags.
   */
  sanitizeHTML(e) {
    const t = new DOMParser().parseFromString(e, "text/html"), a = ["B", "I", "U", "SPAN", "STRONG", "SMALL", "BR", "EM"], s = (i) => {
      for (let n = i.childNodes.length - 1; n >= 0; n--) {
        const o = i.childNodes[n];
        if (o.nodeType === 1)
          if (a.includes(o.tagName)) {
            for (let r = o.attributes.length - 1; r >= 0; r--) {
              const l = o.attributes[r];
              l.name !== "style" && o.removeAttribute(l.name);
            }
            s(o);
          } else {
            const r = document.createTextNode(o.textContent);
            i.replaceChild(r, o);
          }
      }
    };
    return s(t.body), t.body.innerHTML;
  }
  drawSlots(e, t, a) {
    const n = (l) => l === "name" || l === "label" ? t.name : l === "id" ? t.id : a[l] !== void 0 ? a[l] : `[${l}]`, o = (l, h, y, d, p, w, k) => {
      if (!h || h.length === 0) return;
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", `sld-side-group sld-side-${l}`);
      const c = (h.length - 1) * w * 16, u = (h.length - 1) * k * 16, x = y - c / 2, S = d - u / 2, L = t.slotRotation && t.slotRotation[l] || 0;
      L !== 0 && g.setAttribute("transform", `rotate(${L}, ${y}, ${d})`), h.forEach((f, M) => {
        const C = n(f), b = !this.options.hideSlotKeys && f !== "label" && f !== "name" ? `${f.toUpperCase()}: ${C}` : `${C}`, T = this.sanitizeHTML(b), m = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"), P = x + w * M * 16, A = S + k * M * 16, v = 300, B = 24;
        m.setAttribute("width", v), m.setAttribute("height", B);
        const I = P - v / 2, E = A - B / 2 + 1;
        m.setAttribute("x", I), m.setAttribute("y", E), m.setAttribute("class", "sld-slot-fo"), m.innerHTML = `
                    <div xmlns="http://www.w3.org/1999/xhtml" class="sld-slot-wrapper" style="width: ${v}px; display: flex; justify-content: center; align-items: center;">
                        <div class="sld-slot-html">
                            ${T}
                        </div>
                    </div>
                `, g.appendChild(m);
      }), e.appendChild(g);
    }, r = t.slots || { top: [], right: [], bottom: [], left: [] };
    o("top", r.top, t.width / 2, -10 - 16 / 2, "middle", 0, -1), o("bottom", r.bottom, t.width / 2, t.height + 10 + 16 / 2, "middle", 0, 1), o("right", r.right, t.width + 10 + 15, t.height / 2, "middle", 0, 1), o("left", r.left, -25, t.height / 2, "middle", 0, 1);
  }
  drawConnection(e) {
    const t = this.state.nodes.find((c) => c.id === e.from), a = this.state.nodes.find((c) => c.id === e.to);
    if (!t || !a) return;
    const s = t.x + t.width / 2, i = t.y + t.height / 2, n = a.x + a.width / 2, o = a.y + a.height / 2, r = t.width / 2, l = t.height / 2;
    let h = s, y = i, d = n, p = o, w = "";
    const k = document.createElementNS("http://www.w3.org/2000/svg", "path");
    if (k.setAttribute("class", "sld-connection-line"), e.type === "custom") {
      const c = e.waypoints && e.waypoints[0] || { x: n, y: o }, u = e.waypoints && e.waypoints[e.waypoints.length - 1] || { x: s, y: i };
      Math.abs(c.x - s) > Math.abs(c.y - i) ? h = s + (c.x > s ? r : -r) : y = i + (c.y > i ? l : -l), Math.abs(n - u.x) > Math.abs(o - u.y) ? d = n + (n > u.x ? -r : r) : p = o + (o > u.y ? -l : l), w = `M ${h} ${y} `, e.waypoints && e.waypoints.forEach((x) => {
        w += `L ${x.x} ${x.y} `;
      }), w += `L ${d} ${p}`;
    } else {
      const c = Math.abs(n - s), u = Math.abs(o - i);
      if (c > u) {
        h = s + (n > s ? r : -r), d = n + (n > s ? -r : r);
        const x = h + (d - h) / 2;
        w = `M ${h} ${y} L ${x} ${y} L ${x} ${p} L ${d} ${p}`;
      } else {
        y = i + (o > i ? l : -l), p = o + (o > i ? -l : l);
        const x = y + (p - y) / 2;
        w = `M ${h} ${y} L ${h} ${x} L ${d} ${x} L ${d} ${p}`;
      }
    }
    k.setAttribute("d", w);
    const g = e.arrowMode || "none";
    (g === "forward" || g === "both") && k.setAttribute("marker-end", "url(#sld-marker-end)"), (g === "backward" || g === "both") && k.setAttribute("marker-start", "url(#sld-marker-start)"), this.layerConnections.appendChild(k);
  }
  startPolling() {
    if (this.pollTimer) return;
    const e = this.options.poll && this.options.poll.interval || 2e3, t = this.options.poll && this.options.poll.fetch;
    if (!t) return;
    const a = async () => {
      try {
        const s = await t();
        this.updateData(s);
      } catch (s) {
        console.error("SLDViewer Polling Error:", s);
      }
      this.pollTimer = setTimeout(a, e);
    };
    a();
  }
  stopPolling() {
    this.pollTimer && (clearTimeout(this.pollTimer), this.pollTimer = null);
  }
  destroy() {
    this.stopPolling(), this.viewerMain.remove(), this.container.classList.remove("sld-viewer-container");
  }
}
export {
  R as default
};
