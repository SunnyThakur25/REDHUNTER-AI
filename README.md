<p align="center">
  <a href="https://redhunter-ai.co.in/">
    <img src="public/icon-512x512.png" width="140" alt="RedHunter AI Logo">
  </a>
</p>

<h1 align="center">RedHunter AI</h1>

<h2 align="center">Autonomous AI Red Team Operator & Multi-Agent Offensive Security Swarm</h2>

<div align="center">

[![Website](https://img.shields.io/badge/Website-redhunter--ai.co.in-2d3748.svg)](https://redhunter-ai.co.in)
[![Next.js](https://img.shields.io/badge/Next.js-15.1-black.svg?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg?logo=typescript)](https://www.typescriptlang.org)
[![Docker](https://img.shields.io/badge/Sandbox-Kali%20Linux%20Container-2496ED.svg?logo=docker)](https://www.docker.com)
[![FastA2A](https://img.shields.io/badge/Protocol-FastA2A%20Multi--Agent-rose.svg)]
(#3-fasta2a-multi-agent-swarm-protocol)
[![Hardware Bridge](https://img.shields.io/badge/Hardware-USB%20ADB%20%7C%20Serial%20%7C%20Ethernet%20%7C%20SPI-green.svg)](#1-physical-usb-mobile-hardware-bridge-android--ios)
[![Testing Modes](https://img.shields.io/badge/Modes-Black%20%7C%20Grey%20%7C%20White%20Box-purple.svg)](#tri-mode-offensive-testing-engine)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

**RedHunter AI** is an enterprise-grade autonomous offensive cybersecurity platform engineered for security operations (SecOps) teams, penetration testers, and bug bounty researchers. Moving far beyond simplistic LLM wrappers and static vulnerability scanners, RedHunter AI operates as a **stateful, human-equivalent red team swarm** capable of reasoning, planning multi-phase attack trees, learning from tool execution failures, synthesizing polyglot exploit harnesses, manipulating physical mobile devices over USB, bridging physical network appliances and embedded microcontrollers, and executing full campaigns inside an isolated Kali Linux runtime.

---

- [Executive Comparison: Traditional vs. RedHunter AI](#executive-comparison-traditional-vs-redhunter-ai)
- [Comprehensive Technical Operator Manual & Guide (GUIDE.md)](GUIDE.md)
- [Comprehensive User Guidance & Multi-Domain Testing Manual (USER_GUIDANCE.md)](USER_GUIDANCE.md)
- [Tri-Mode Offensive Testing Engine](#tri-mode-offensive-testing-engine)
  - [The Power of Black Box: The True Autonomy Test](#the-power-of-black-box-the-true-autonomy-test)
  - [Multi-Surface Execution Matrix (Web, Network, Cloud, Mobile, Embedded/IoT, SATCOM/Space, OSINT/GEOINT)](#multi-surface-execution-matrix)
- [15 Core Architectural Pillars & Capabilities](#15-core-architectural-pillars--capabilities)
  - [1. Physical USB Mobile Hardware Bridge (Android & iOS)](#1-physical-usb-mobile-hardware-bridge-android--ios)
  - [2. Physical Hardware & Network Appliance Bridge (Routers, Switches, Firewalls, IoT)](#2-physical-hardware--network-appliance-bridge-routers-switches-firewalls-iot)
  - [3. Autonomous Dual-Browser Operator (Manus-Style Local + Cloud CDP)](#3-autonomous-dual-browser-operator-manus-style-local--cloud-cdp)
  - [4. FastA2A Multi-Agent Swarm Protocol & Agent Cards](#4-fasta2a-multi-agent-swarm-protocol--agent-cards)
  - [5. Multi-Engine Desktop GUI Automation ("Computer Use")](#5-multi-engine-desktop-gui-automation-computer-use)
  - [6. Dynamic 3-Gear Action Engine & Zero-Loop Stagnation Guard](#6-dynamic-3-gear-action-engine--zero-loop-stagnation-guard)
  - [7. Tri-Tier Memory Architecture & Persistent Campaign Graph](#7-tri-tier-memory-architecture--persistent-campaign-graph)
  - [8. Sandboxed Kali Linux Runtime & Digital Forensics Suite (with Zero-Trust Upload Quarantine)](#8-sandboxed-kali-linux-runtime--comprehensive-dfir-suite)
  - [9. Model Context Protocol (MCP) & Enterprise Connectors](#9-model-context-protocol-mcp--enterprise-connectors)
  - [10. Real-Time Task Progress Bar & Live State Synchronization](#10-real-time-task-progress-bar--live-state-synchronization)
  - [11. Deep Vulnerability Root Cause Analysis (RCA) & Remediation Hotpatching](#11-deep-vulnerability-root-cause-analysis-rca--remediation-hotpatching)
  - [12. Advanced OSINT, GEOINT & 12-Layer Multimodal Deepfake Forensic Framework](#12-advanced-osint-chronolocation--geospatial-intelligence-geoint-suite)
    - [12-Layer Multimodal Deepfake & Synthetic Media Detection](#12-layer-multimodal-deepfake--synthetic-media-detection)
    - [Ground-Truth Reference Baseline Differential Analysis (Side-by-Side Calibration)](#ground-truth-reference-baseline-differential-analysis-side-by-side-calibration)
    - [CCTV & Convex Mirror Optical Inversion and Forensic Contrast Deck](#cctv--convex-mirror-optical-inversion-and-forensic-contrast-deck)
    - [Court-Admissible FRE 902(14) Reporting](#court-admissible-fre-90214-reporting)
  - [13. Satellite Communications (SATCOM), Military Cyber Electronic Warfare (EW) & RF Spectrum Operations (Aerospace SPARTA & JEMSO Framework)](#13-satellite-communications-satcom-military-cyber-electronic-warfare-ew--rf-spectrum-operations-aerospace-sparta--jemso-framework)
  - [14. OSIRIS Live OSINT Matrix & Embedded Tactical Situational Awareness Platform](#14-osiris-live-osint-matrix--embedded-tactical-situational-awareness-platform)
  - [15. Threat Actor Attribution, Adversarial Honeytokens & Forensic Intelligence Engine](#15-threat-actor-attribution-adversarial-honeytokens--forensic-intelligence-engine)
  - [16. White-Box Code Property Graph (CPG) & Source-to-Sink Taint Engine](#16-white-box-code-property-graph-cpg--source-to-sink-taint-engine)
  - [17. Autonomous Network Topology Inference & Architecture Cartography ("Eye in the Sky")](#17-autonomous-network-topology-inference--architecture-cartography-eye-in-the-sky)
  - [18. AI-Driven Binary Diffing, 1-Day Patch Analysis & Semantic Genetic Protocol Fuzzing](#18-ai-driven-binary-diffing-1-day-patch-analysis--semantic-genetic-protocol-fuzzing)
  - [19. Imagery Intelligence (IMINT) & Cyber-Physical Visual Reconnaissance Engine](#19-imagery-intelligence-imint--cyber-physical-visual-reconnaissance-engine)
- [Interactive Live Computer Studio UI](#interactive-live-computer-studio-ui)
- [Getting Started & Installation](#getting-started--installation)
  - [System Prerequisites](#system-prerequisites)
  - [Environment Configuration](#environment-configuration)
  - [Running the Sandboxed Kali Linux Runtime](#running-the-sandboxed-kali-linux-runtime)
  - [Launching the Development Server](#launching-the-development-server)
- [Comprehensive Codebase Architecture](#comprehensive-codebase-architecture)
- [Ethical Use & Responsible Disclosure](#ethical-use--responsible-disclosure)
- [License](#license)

---

## Executive Comparison: Traditional vs. RedHunter AI

```
┌─────────────────────────────────┬─────────────────────────────────┬─────────────────────────────────┐
│     TRADITIONAL PEN-TEST        │       LEGACY DAST SCANNERS      │      REDHUNTER AI PLATFORM      │
├─────────────────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ • Annual / Periodic (1x/yr)     │ • Scheduled / Triggered scans   │ • 24/7 Continuous CART Swarm    │
│ • $30,000–$100,000 per audit    │ • $15,000–$40,000/yr licenses   │ • Bottom-up SaaS / Self-hosted  │
│ • 4–8 week turnaround           │ • Hours (produces raw output)   │ • Minutes to hours (Live PoC)   │
│ • 80-page static PDF document   │ • 70%+ False-Positive Noise     │ • Zero-Noise Verified Evidence  │
│ • Zero API logic or mobile test │ • Static regex / pattern checks │ • Multi-Step Logic & Physical   │
│ • Manual human bottleneck       │ • Zero exploit validation       │ • Deterministic Reproducible PoC│
└─────────────────────────────────┴─────────────────────────────────┴─────────────────────────────────┘
```

---

## Tri-Mode Offensive Testing Engine

RedHunter AI natively executes offensive engagements across all three standard enterprise assessment models:

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                               OPERATIONAL ASSESSMENT MODES                              │
├────────────────────────────┬─────────────────────────────┬──────────────────────────────┤
│ 1. BLACK BOX (Zero-Knowledge)│ 2. GREY BOX (Partial Access) │ 3. WHITE BOX (Full Visibility)│
│ • No internal credentials  │ • Low-privilege user creds  │ • Source code repository     │
│ • Zero architectural docs  │ • API schemas / swagger docs│ • Cloud IAM & IaC manifests  │
│ • Autonomous attack surface │ • Multi-tenant auth bypass  │ • Hybrid SAST + runtime DAST │
│   discovery & exploitation │ • BOLA, BFLA, privilege esc │ • Complete zero-noise proofs │
└────────────────────────────┴─────────────────────────────┴──────────────────────────────┘
```

### The Power of Black Box: The True Autonomy Test
In professional cybersecurity and institutional diligence, **Black Box testing is the definitive benchmark of AI capability**. 

When starting in Black Box mode:
1. The operator provides **only a single unknown target** (e.g. an external domain, CIDR IP block, or raw mobile APK file) with **zero prior credentials or internal documentation**.
2. The AI must autonomously navigate the entire cyber kill chain:
   - Perimeter reconnaissance and OSINT mapping.
   - Network port scanning and service fingerprinting.
   - Technology stack and WAF detection.
   - Dynamic fuzzing and vulnerability discovery (OWASP Top 10, API flaws, logic defects).
   - Formulating attack paths, chaining multi-step exploits, and proving real compromise with reproducible PoC traces.
   - Compiling a professional, executive-ready remediation report with CVSS 3.1/4.0 metrics.

### Multi-Surface Execution Matrix

| Attack Surface | ⬛ **Black Box Execution (Zero Knowledge)** | 🔘 **Grey Box Execution (Partial Access)** | ⬜ **White Box Execution (Full Code & Architecture)** |
| :--- | :--- | :--- | :--- |
| **🌐 Web & Modern APIs** | Perimeter OSINT, subdomain crawling, WAF fingerprinting, OWASP Top 10 (SQLi, XSS, SSRF, SSTI), parameter tampering, blind command injection. | Authenticated BOLA/IDOR auditing, Tenant A vs. Tenant B privilege escalation, JWT manipulation, business logic flaws. | Static code taint tracking in repositories combined with live dynamic PoC execution to verify exploitability. |
| **🔌 Network & Infrastructure** | High-speed port scanning (`naabu`, `nmap`), banner grabbing, exposed admin panels (SSH, RDP, Redis, Elasticsearch), default password audits. | Internal network pivoting from initial footholds, Active Directory / Kerberos abuse, pass-the-hash, lateral movement. | Firewall ruleset inspection, network routing topology review, zero-trust segmentation validation. |
| **☁️ Cloud (AWS, GCP, Azure, K8s)** | Unauthenticated bucket enumeration (S3, GCS, Blobs), exposed container registries, metadata service SSRF (IMDSv1/v2). | Low-privilege IAM credential exploitation, privilege escalation paths (`iam:PassRole`, `sts:AssumeRole`), trust hopping. | Infrastructure-as-Code (Terraform, CloudFormation, K8s YAML) audit, least-privilege IAM matrix review, CIS Benchmarks. |
| **📱 Mobile (Android & iOS)** | Dynamic APK/IPA tampering, SSL pinning bypass, physical USB touch automation, exported Activity/IPC fuzzing. | Authenticated mobile API flow testing, local SQLite database extraction (`run-as`), biometric logic bypasses. | Smali/Java bytecode decompilation, hardcoded secret harvesting, cryptographic implementation audits. |
| **📟 Embedded, IoT & Network Appliances** | Dynamic host port & NIC discovery (`discover_hardware`), auto-baud sweeping, bootloader break sequence injection, gateway router fingerprinting. | Unauthenticated default credential auditing (Cisco, Fortinet, pfSense, OpenWrt, Mikrotik), serial interactive console shell takeover. | Hardware SPI flash dumping (`flashrom`), SquashFS/JFFS2 firmware extraction & secret carving (`binwalk`), UART pinout reverse engineering. |
| **🏭 SCADA, Industrial Control Systems (ICS) & OT** | Passive OT subnet discovery, Modbus TCP slave ID sweeping, Siemens S7comm rack/slot enumeration, BACnet Who-Is broadcast, Web HMI fingerprinting. | Modbus holding register & coil manipulation (FC01-FC06, FC15/16), S7comm DB block extraction, Ethernet/IP CIP tag browsing, DNP3 CROB execution, OPC UA anonymous policy auditing. | Ladder logic & Structured Text safety interlock audit, engineering workstation project (.zap16, .acd) password extraction, RTOS firmware analysis (VxWorks, QNX), Purdue Model segmentation validation. |
| **🛰️ SATCOM, Military Cyber EW & RF Spectrum Systems** | Passive RF monitoring & IQ capture via SDRs (USRP B210/X310, HackRF, LimeSDR, RTL-SDR), directional antenna tracking (Yagi, parabolic dish, helical) via Hamlib `rotctl`, SGP4 Doppler shift compensation ($\Delta f = f_0 \frac{v_{\text{rel}}}{c}$), wideband spectrum power sweeping, blind modulation classification, signal demodulation via GNU Radio / `gr-satellites` / `SatDump`. | Terminal WAN gateway audits (TR-069 port 7547, SNMPv1/v2c, HTTP/SSH), baseband firmware cryptographic validation, telecommand COP-1 anti-replay testing, GPSDO 10 MHz reference clock & 1 PPS synchronization, Galileo OSNMA GNSS anti-spoofing, RF link budget verification ($P_{\text{rx}} = P_{\text{tx}} + G_{\text{tx}} + G_{\text{rx}} - \text{FSPL}$), and receiver front-end LNA saturation defense. | Top 15 Aerospace Corporation SPARTA framework automated audits, Joint Pub 3-85 (JEMSO) / JP 3-12 compliance, dynamic AI-synthesized military TTP playbooks tailored to target CPU (`arm64`, `sparc_leon3`) & framing (`CCSDS_355`, `DVB-S2_GSE`), Jammer-to-Signal ($J/S$) margin calculations, and production-ready remediation patch generation (C, Python, Bash, Config). |
| **🌐 OSINT & Geospatial Intelligence (GEOINT)** | 5-Layer Geolocation & Signal Triangulation, Solar Chronolocation (solar angles/shadow math), passive DNS, crt.sh Certificate Transparency mapping, ExifTool metadata carving, developer registry footprinting. | Deepfake & synthetic media forensic auditing (ELA, noise residuals, C2PA provenance), multi-engine reverse image aggregation (Google Lens, Yandex, Bing, TinEye), international license plate decoding. | Complete executive forensic PDF dossier generation, legal/ethical guardrail adherence (anti-doxxing, CWE-359, GDPR Art. 9 compliance), cryptographic SHA-256 evidence anchoring. |
| **🔍 White-Box Code Property Graph (CPG) & Taint Engine** | Repository route & attack surface enumeration, framework route detection, third-party dependency vulnerability indexing. | Source-to-sink taint tracking (SQLi, RCE, SSRF, Deserialization), unmitigated dataflow analysis, dependency reachability verification (zero-false-positive SCA). | Deep AST code graph traversal, upstream caller blast radius modeling, automatic patch validation, and verified exploit path generation into the Unified Cyber Graph. |
| **👁️ Autonomous Network Topology Inference ("Eye in the Sky")** | Mathematical TTL delta hop distance calculation, multi-port TTL divergence, TCP window size fingerprinting, DNS SRV record discovery (AD Domain Controllers & KDCs), DNSSEC NSEC zone walking. | Middlebox reverse proxy/load balancer detection (F5 BIG-IP, AWS ALB, Envoy, Cloudflare), Purdue zone classification (DMZ, Internal LAN, Database Enclave, Active Directory), Web/API proxy header & timing analysis. | Full cross-domain trust graph reconstruction (Web ➔ DB, Member Server ➔ Domain Controller, Cloud IAM AssumeRole bridges, dual-homed hardware routers), architectural weak point detection (DMZ-to-AD direct bridges, unsegmented databases). |
| **🔬 AI-Driven Patch Diffing & Semantic Protocol Fuzzing** | Automated vendor patch download, unified diff parsing, 1-day vulnerability gap isolation, evolutionary grammar-aware fuzzing (HTTP/2, gRPC Protobuf, GraphQL, WebSockets, binary RPC). | AST delta categorization (bounds checks, auth enforcement, type validation), patch completeness scoring, bypass vector discovery (nested traversals, timing discrepancies, encoding slips). | Sibling unpatched function identification, multi-objective genetic breeding (latency spikes + fatal 5xx crashes), automated crash triage, and defensive regression test synthesis into the Unified Cyber Graph. |
| **📷 Imagery Intelligence (IMINT) & Cyber-Physical Visual Recon** | Whiteboard architecture schematic vectorization, high-entropy secret carving (AWS, JWT, SSH, Wi-Fi PSK), visual hardware chassis & port fingerprinting (Cisco, Fortinet, Mikrotik, PLCs). | Surveillance camera coverage & ground blind-spot ray tracing ($d_{\min} = h \cdot \tan(\theta - \phi/2)$), parabolic SATCOM dish geometry solver ($f = D^2/16c$, f/D ratio, GEO look angles). | Steganography & trailing polyglot payload carving (JPEG EOI, PNG IEND), strict GDPR Art. 9/CWE-359 privacy guardrails (anti-facial surveillance/doxxing), and automatic topology synchronization into the Cyber Graph. |

---

## 4-Step Verification Protocol & Anti-Confirmation Loop Circuit Breaker

RedHunter AI eliminates the two greatest failure modes of autonomous AI security agents: **hallucinated/unverified vulnerability claims** and **confirmation loop traps** (repeatedly running the same probe commands in an endless loop).

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  MANDATORY 4-STEP VERIFICATION PROTOCOL                                 │
├───────────────────────────────────┬─────────────────────────────────────────────────────────────────────┤
│ 1. SELF-CHECK                     │ "What concrete evidence supports this?" Cites status codes, bytes,  │
│                                   │ timing deltas, or stack traces. Assumptions/banners are forbidden.  │
├───────────────────────────────────┼─────────────────────────────────────────────────────────────────────┤
│ 2. CROSS-REFERENCE                │ "Does this contradict anything?" Checks against baseline responses, │
│                                   │ WAF challenge pages, stateful SYN proxies, and security boundaries. │
├───────────────────────────────────┼─────────────────────────────────────────────────────────────────────┤
│ 3. TOOL VERIFICATION              │ "Can I verify this with a targeted probe?" Executes non-destructive,│
│                                   │ deterministic confirmation tests to confirm state divergence.       │
├───────────────────────────────────┼─────────────────────────────────────────────────────────────────────┤
│ 4. CONFIDENCE CALIBRATION         │ Labels findings: [CONFIRMED], [LIKELY], [POSSIBLE], [SPECULATIVE].  │
│                                   │ Speculation is NEVER presented as fact in executive deliverables.   │
└───────────────────────────────────┴─────────────────────────────────────────────────────────────────────┘
```

### Anti-Confirmation Loop Circuit Breaker (Max-2 Bounded Attempt Rule)
- **Max-2 Bounded Attempts**: At most two (2) verification tool calls are allowed per technical hypothesis.
- **Material Technique Mutation**: If Attempt 1 is ambiguous, Attempt 2 MUST use an alternative syntax, encoding, or parameter.
- **Automated Circuit Breaker**: If Attempt 2 does not yield deterministic proof, the agent **immediately stops**, downgrades confidence to `[SPECULATIVE]` or `[POSSIBLE]`, records the lead in `ENGAGEMENT_NOTES.md`, and pivots to alternative attack surfaces.

---

## 19 Core Architectural Pillars & Capabilities

<div align="center">
  <p><b>Neo4j-Style Autonomous Graph Topology & Command Matrix — Live Swarm & Multi-Domain Pipeline</b></p>
</div>

```cypher
$ MATCH p = (operator:Operator)-[:DISPATCHES_MISSION]->(orchestrator:SuperAgent)-[rel:ORCHESTRATES|EXECUTES|AUDITS]->(pillar:Pillar)
RETURN operator, orchestrator, rel, pillar LIMIT 50
```

> **Neo4j Active Topology View**:
> <kbd style="background:#ff4d6d;color:#fff;border-radius:12px;padding:3px 8px;font-size:11px;font-weight:bold;">● CoreOrchestrator (2)</kbd> &nbsp;
> <kbd style="background:#fb923c;color:#fff;border-radius:12px;padding:3px 8px;font-size:11px;font-weight:bold;">● SwarmAgents (5)</kbd> &nbsp;
> <kbd style="background:#c084fc;color:#fff;border-radius:12px;padding:3px 8px;font-size:11px;font-weight:bold;">● CodeGraph_Memory (5)</kbd> &nbsp;
> <kbd style="background:#38bdf8;color:#fff;border-radius:12px;padding:3px 8px;font-size:11px;font-weight:bold;">● Physical_RF_EW (3)</kbd> &nbsp;
> <kbd style="background:#2dd4bf;color:#fff;border-radius:12px;padding:3px 8px;font-size:11px;font-weight:bold;">● ThreatIntel_OSINT (4)</kbd> &nbsp;
> <kbd style="background:#f472b6;color:#fff;border-radius:12px;padding:3px 8px;font-size:11px;font-weight:bold;">● ExecutionSandboxes (4)</kbd> &nbsp;
> <kbd style="background:#94a3b8;color:#fff;border-radius:12px;padding:3px 8px;font-size:11px;font-weight:bold;">● ControlSync (1)</kbd> &nbsp;
> <kbd style="background:#475569;color:#e2e8f0;border-radius:12px;padding:3px 8px;font-size:11px;font-weight:bold;">RELATIONSHIPS (25)</kbd>

```mermaid
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'primaryColor': '#1e0509',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#ff2a55',
    'lineColor': '#888888',
    'secondaryColor': '#1c1917',
    'tertiaryColor': '#140306',
    'edgeLabelBackground':'#18181b',
    'fontFamily': 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, monospace',
    'fontSize': '11px'
  }
}}%%
flowchart LR
    %% Neo4j Style Hub & Circular Nodes
    Operator(("👤<br/><b>Operator</b><br/>Lead")):::cRed
    Orchestrator(("⚡<br/><b>SuperAgent</b><br/>Orchestrator")):::cRed

    subgraph SwarmAgents ["🟠 SwarmAgents (5)"]
        Recon(("🛰️<br/><b>Recon</b><br/>Specialist")):::cOrange
        WebApp(("🌐<br/><b>WebApp</b><br/>Exploiter")):::cOrange
        Network(("🔌<br/><b>Network</b><br/>Exploiter")):::cOrange
        PostEx(("💀<br/><b>PostEx</b><br/>Operator")):::cOrange
        Hypothesis(("💡<br/><b>Hypothesis</b><br/>Engine")):::cOrange
    end

    subgraph CodeGraph ["🟣 CodeGraph_Memory (5)"]
        CyberGraph(("🕸️<br/><b>CyberGraph</b><br/>Tri-Tier")):::cPurple
        CPGTaint(("🧬<br/><b>CPG Taint</b><br/>Source-Sink")):::cPurple
        Topology(("🗺️<br/><b>Topology</b><br/>Cartography")):::cPurple
        PatchDiff(("🔬<br/><b>PatchDiff</b><br/>1-Day Fuzz")):::cPurple
        RCAEngine(("🛠️<br/><b>RCA Engine</b><br/>Hotpatch")):::cPurple
    end

    subgraph PhysicalEW ["🔵 Physical_RF_EW (3)"]
        MobileUSB(("📱<br/><b>USB Mobile</b><br/>ADB/JXA")):::cBlue
        HardwareAppliance(("🔌<br/><b>Appliance</b><br/>UART/SPI")):::cBlue
        SatcomEW(("📡<br/><b>SATCOM</b><br/>RF-EW")):::cBlue
    end

    subgraph ThreatIntel ["🟢 ThreatIntel_OSINT (4)"]
        OSIRIS(("🌐<br/><b>OSIRIS</b><br/>Live Map")):::cGreen
        Deepfake(("🔍<br/><b>Deepfake</b><br/>12-Layer")):::cGreen
        Attribution(("🎯<br/><b>Attribution</b><br/>Diamond")):::cGreen
        IMINT(("🛰️<br/><b>IMINT</b><br/>Visual OCR")):::cGreen
    end

    subgraph Execution ["🌸 ExecutionSandboxes (4)"]
        DualCDP(("🖥️<br/><b>Dual CDP</b><br/>Browser")):::cPink
        DesktopGUI(("🖱️<br/><b>Desktop GUI</b><br/>ComputerUse")):::cPink
        KaliDFIR(("🐉<br/><b>Kali DFIR</b><br/>Sandbox")):::cPink
        MCPTools(("⚡<br/><b>MCP Client</b><br/>Connectors")):::cPink
    end

    LiveSync(("📊<br/><b>Live State</b><br/>Tracker")):::cSlate

    %% Neo4j Typed Relationship Edges
    Operator -->|DISPATCHES_GOAL| Orchestrator
    Orchestrator -->|FASTA2A_SYNC| Recon
    Orchestrator -->|DEPLOYS_WORKLOAD| WebApp
    Orchestrator -->|MAPS_ATTACK_SURFACE| Network
    Orchestrator -->|PRIV_ESCALATION| PostEx
    Orchestrator -->|EVALUATES_LEADS| Hypothesis
    Orchestrator -->|DYNAMIC_JSON_RPC| MCPTools
    Orchestrator -->|REALTIME_SYNC| LiveSync

    Hypothesis -->|EPISODIC_QUERY| CyberGraph
    CyberGraph -->|SYNTHESIS_CONTEXT| Orchestrator
    WebApp -->|SOURCE_TO_SINK| CPGTaint
    Network -->|INFER_MULTIHOP| Topology
    Recon -->|DIFFS_ASSEMBLY| PatchDiff
    PostEx -->|GENERATES_FIX| RCAEngine

    Network -->|UART_SERIAL_BREAK| HardwareAppliance
    Recon -->|SPARTA_RF_CAPTURE| SatcomEW
    PostEx -->|TOUCH_EVENT_INJECT| MobileUSB

    Recon -->|GEOINT_FEED| OSIRIS
    Recon -->|SPECTRAL_AUDIT| Deepfake
    Hypothesis -->|APT_PROFILE_MATCH| Attribution
    Recon -->|SATELLITE_IMG_OCR| IMINT

    WebApp -->|CDP_CANVAS_HOOK| DualCDP
    PostEx -->|DESKTOP_KEY_INJECT| DesktopGUI
    Network -->|MEMORY_DUMP_DFIR| KaliDFIR

    classDef cRed fill:#ff4d6d,stroke:#9f1239,stroke-width:2.5px,color:#ffffff,font-weight:bold;
    classDef cOrange fill:#fb923c,stroke:#c2410c,stroke-width:2.5px,color:#ffffff,font-weight:bold;
    classDef cPurple fill:#c084fc,stroke:#6d28d9,stroke-width:2.5px,color:#ffffff,font-weight:bold;
    classDef cBlue fill:#38bdf8,stroke:#0369a1,stroke-width:2.5px,color:#ffffff,font-weight:bold;
    classDef cGreen fill:#2dd4bf,stroke:#0f766e,stroke-width:2.5px,color:#ffffff,font-weight:bold;
    classDef cPink fill:#f472b6,stroke:#be185d,stroke-width:2.5px,color:#ffffff,font-weight:bold;
    classDef cSlate fill:#94a3b8,stroke:#475569,stroke-width:2.5px,color:#ffffff,font-weight:bold;

    style SwarmAgents fill:#18181b40,stroke:#fb923c,stroke-width:1.5px,stroke-dasharray: 4 2,color:#fed7aa
    style CodeGraph fill:#18181b40,stroke:#c084fc,stroke-width:1.5px,stroke-dasharray: 4 2,color:#e9d5ff
    style PhysicalEW fill:#18181b40,stroke:#38bdf8,stroke-width:1.5px,stroke-dasharray: 4 2,color:#bae6fd
    style ThreatIntel fill:#18181b40,stroke:#2dd4bf,stroke-width:1.5px,stroke-dasharray: 4 2,color:#99f6e4
    style Execution fill:#18181b40,stroke:#f472b6,stroke-width:1.5px,stroke-dasharray: 4 2,color:#fbcfe8
```

---

### 1. Physical USB Mobile Hardware Bridge (Android & Apple iOS/macOS)
* **What it does**: Enables the AI agent swarm to interact directly with live physical Android phones, iPhones, iPads, and local emulators connected via USB or host machine bridge.
* **How it works**:
  * **Dynamic ADB Resolver (`lib/mobile/adb-resolver.ts`)**: Automatically discovers ADB binaries and Android SDKs across Windows (`%LOCALAPPDATA%`, `PATH`), macOS (`Homebrew`, `~/Library/Android/sdk`), and Linux (`/usr/bin/adb`) without hardcoded system paths.
  * **Touch & Key Automation (`/system/bin/input`)**: Injects touch taps at exact pixel coordinates (`tap_screen [x, y]`), directional swipes (`swipe_screen [x1, y1, x2, y2, durationMs]`), text typing, and hardware buttons (`HOME`, `BACK`, `POWER`, `ENTER`, `RECENTS`).
  * **Lossless Visual Screen Capture**: Takes full 1080x2400 AMOLED screencaps, stores them to disk, and simultaneously runs `uiautomator dump` to parse the on-screen accessibility tree (text labels and clickable element bounds).
  * **App Lifecycle & Storage Audit**: Discovers installed third-party apps (`pm list packages -3`), extracts APK binaries (`pm path`), inspects sandboxed databases (`run-as <pkg> cat databases/...`), and fuzzes exported Activities (`am start`).
  * **Apple Ecosystem, iOS & macOS Mastery**:
    * **Native Languages**: Full support for AppleScript (`osascript`), JavaScript for Automation (JXA), Objective-C, and Swift.
    * **Desktop & UI Automation**: Synthesizes and executes AppleScript/JXA scripts to automate macOS applications, inject keystrokes, handle system dialogs, and trigger Shortcuts CLI (`shortcuts run`).
    * **iOS Physical & Simulator Testing**: Interacts with physical iPhones via `pymobiledevice3`, `ideviceinstaller`, `iproxy`, and simulated environments via `xcrun simctl`.
    * **Dynamic Runtime Manipulation**: Class dumping (`dsdump`, `class-dump`), Mach-O symbol analysis, custom Frida scripts (`ObjC.classes`, `ObjC.choose`), and method swizzling.
    * **Low-Level ARM64 Architecture**: Deep fluency in ARM64/AArch64 assembly (Apple Silicon M-series and iPhone A-series Bionic chips), Mach-O binary disassembly (`otool -tvV`, `llvm-objdump`), ROP/JOP chaining, and bypassing Apple mitigations (PAC, APRR/PPL, AMFI, code signing, entitlements, sandbox profiles).

---

### 2. Physical Hardware & Network Appliance Bridge (Routers, Switches, Firewalls, IoT, Silicon)
* **What it does**: Controls, audits, extracts, and exploits physical network appliances, routers, managed switches, enterprise firewalls, IoT devices, microcontrollers, and raw silicon flash chips connected to the host machine — **completely transcending cloud container limitations**.
* **Zero Cloud Container Confusion**: When a task involves physical devices, the AI agent is explicitly aware that it has **no cloud container barriers**. The user's host machine functions as a real-time, transparent physical hardware bridge (`security_hardware_appliance_bridge`), directly exposing physical serial COM/tty ports, RJ45 Ethernet NICs, and USB silicon programmers.
* **How Real-Time Physical Hardware Pentesting Works**:

```
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                      REDHUNTER AI — REAL-TIME PHYSICAL HARDWARE BRIDGE PIPELINE                │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                │
│   [RedHunter AI Swarm] ─── (JSON-RPC / Bridge Engine) ───> [Host Machine Bridge Engine]        │
│                                                                        │                       │
│             ┌───────────────────────────┬──────────────────────────────┴──────────────┐       │
│             ▼                           ▼                                             ▼       │
│   [Serial Console (UART)]     [Physical Ethernet (RJ45)]                  [Silicon Debuggers] │
│   • FTDI / CP210x / CH340     • Physical NIC (Link State UP)               • CH341A / FT232H   │
│   • Auto-Baud (115200-9600)   • Gateway Router Discovery                   • J-Link / ST-Link  │
│   • U-Boot/ROMmon Break       • Vendor Fingerprint & Creds                 • SPI NOR/NAND Flash│
│             │                           │                                             │       │
│             ▼                           ▼                                             ▼       │
│   [Routers & Switches]        [Firewalls & Gateways]                      [IoT & Microchips]  │
│   Cisco, Juniper, Mikrotik    Fortinet, pfSense, OpenWrt                  ESP32, Hikvision IP │
│                                                                                                │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Step-by-Step Device Attack Workflows & Descriptions:

1. **Enterprise Routers & Switches (Cisco, Juniper, Mikrotik, OpenWrt, Ubiquiti)**:
   * **Serial Console Auto-Baud Lock**: Agent discovers serial ports (`discover_hardware`), auto-negotiates baud rates (115200, 9600, 57600, 38400, 19200), and analyzes buffer entropy to detect framing errors and eliminate garbage characters.
   * **Bootloader Cold Break (`bootloader_break`)**: Intercepts cold power-on sequences with timed breaks (`cisco_break`, `uboot_space`, `escape`) to halt execution at U-Boot, Cisco ROMMON, or Junos loader prompts, enabling configuration register modification (`confreg 0x2142`), password recovery, and environment dumping (`printenv`).
   * **Privileged Command Execution**: Operates the authenticated terminal prompt (`Router#`, `root@box:~#`), dumps running configurations, extracts VLAN databases, and analyzes routing tables.

2. **Next-Generation Firewalls & Security Gateways (Fortinet FortiGate, pfSense, Cisco ASA)**:
   * **Physical Ethernet Gateway Recon (`ethernet_recon`)**: Identifies physical link state (UP/DOWN), detects real gateway IP addresses, and inspects HTTP/HTTPS headers, SSH banners, and web management portals.
   * **Automated Vendor Fingerprint & Credential Matrix**: Matches banners to vendor profiles (Fortinet FortiOS, pfSense, Cisco IOS, Juniper Junos, OpenWrt) and automatically verifies default credential pairs (`admin:admin`, `admin:<blank>`, `root:<blank>`).
   * **Ingestion into Cyber Graph**: Discovered appliance topology, open management ports, and vendor models are immediately ingested as critical nodes (`crown_jewel`) in the live Cyber Graph.

3. **IoT Devices, IP Cameras & Embedded Microcontrollers (Hikvision, Dahua, ESP32, STM32)**:
   * **Surveillance Appliance Auditing**: Detects Dahua/Hikvision IP cameras, probes ONVIF/RTSP endpoints, and tests default credentials (`admin:12345`).
   * **UART Shell Hijacking**: Attaches to debug header pins (TX/RX/GND) on IoT circuit boards, catches root shells spawned on boot, and extracts firmware filesystems.
   * **Industrial & Custom Protocol Fuzzing**: For proprietary IoT protocols (Modbus, CAN bus, Zigbee, raw serial frames), the AI autonomously synthesizes custom Python/Scapy/C harness scripts on the fly.

4. **Silicon Flash Memory & Hardware Programmers (SPI NOR/NAND, CH341A, FT232H)**:
   * **Test-Clip SPI Flash Extraction (`dump_spi_flash`)**: Uses external programmers (CH341A, FT232H) connected to SPI flash chips via 8-pin SOIC test clips to dump physical flash memory without desoldering.
   * **Firmware Deconstruction & Credential Carving (`unpack_and_audit_firmware`)**: Runs automated `binwalk --extract --matryoshka` pipelines to unpack SquashFS, JFFS2, and CramFS partitions, extracting `/etc/shadow` password hashes, hardcoded private keys, Wi-Fi credentials, and API tokens.

5. **How the Autonomous AI Agents Work in Real Time**:
   * **Zero-Guessing Discovery**: Agents never hallucinate COM ports or assume default subnets; they execute `action: "discover_hardware"` as mandatory Step 1.
   * **Dynamic Tool Installation**: If a required hardware tool (e.g. `flashrom`, `binwalk`, `minicom`, `screen`, `picocom`, `openocd`, `esptool`, `scapy`) is missing, the AI autonomously installs it or compiles custom C/Python harnesses.
   * **Anti-Looping Circuit Breaker (80/20 Rule)**: Limits failed attempts on non-responsive hardware interfaces to 3 turns. If an interface yields no authenticated shell within 3 turns, it is automatically pruned, and the AI pivots to the next physical interface.

### 3. Autonomous Dual-Browser Operator (Manus-Style Local + Cloud CDP)
* **What it does**: Automates web application penetration testing through two complementary browser engines.
* **How it works**:
  * **Manus-Style Local Browser Operator (`lib/browser/local-browser-operator.ts`)**: Connects via Chrome DevTools Protocol (CDP) to the operator's active Google Chrome or Microsoft Edge browser. Inherits logged-in enterprise sessions (AWS Console, GitHub, Jira, PortSwigger, CTF portals) without credential sharing.
  * **Visual HUD & Human Shield**: Injects a prominent neon perimeter on the active tab, enforces an interaction lock shield to prevent click collisions, and displays a floating badge `[ 🛡️ RedHunter AI is browsing... [Take over] ]` for immediate manual override.
  * **20/20 Spatial Vision Grounding**: Converts viewports into spatial `(x, y)` coordinate grids via Gemini 2.0 Flash and Claude 3.5 Sonnet Vision models, eliminating fragile DOM CSS/XPath selectors.
  * **Dedicated Cloud Browser (Browserbase + Stagehand)**: Dispatches untrusted or malicious URLs into an isolated remote browser environment, streaming full 60fps canvas replays to the user's Studio UI.

### 4. FastA2A Multi-Agent Swarm Protocol & Agent Cards
* **What it does**: Coordinates specialized subordinate AI agents across isolated memory frames to eliminate context window bloat during multi-hour campaigns.
* **How it works**:
  * **Standardized Agent Cards (`.well-known/agent.json`)**: Every agent and remote peer node exposes a standardized JSON capability card detailing supported protocols, specialized toolchains, and hardware bindings.
  * **Specialized Subordinate Delegation (`call_subordinate_a2a_agent`)**:
    * `recon_specialist`: Subdomain enumeration, ASN discovery, port fingerprinting.
    * `exploit_reviewer`: Binary triage, disassembly, PoC validation.
    * `code_auditor`: Static analysis (SAST), taint tracking, dependency auditing.
    * `network_exploiter`: Protocol fuzzing, lateral movement, internal pivoting.
  * Subordinate agents execute in parallel and stream structured JSON findings and evidence artifacts back to the primary engagement graph.

### 5. Multi-Engine Desktop GUI Automation ("Computer Use")
* **What it does**: Operates desktop security suites, Wireshark, Burp Suite, Postman, and legacy GUI applications running inside Kali Linux Virtual Desktop (`DISPLAY=:1`).
* **How it works**:
  * **Engine 1 (Fast Frame Grab)**: High-speed frame capture using `mss` shared memory and `scrot` for sub-100ms desktop streaming over WebSockets.
  * **Engine 2 (Input Injection)**: Injects mouse clicks (`left_click`, `double_click`, `right_click`, `drag`), mouse movement, and keyboard strokes via `xdotool`, `xte`, and `ydotool`.
  * **Engine 3 (Semantic AT-SPI)**: Connects to the Linux Accessibility Tree (`pyatspi` / `Dogtail`) to click buttons and navigate menus by semantic label rather than brittle pixel coordinates.
  * **Engine 4 (Task Multiplexing)**: Manages long-running background GUI scans inside headless `tmux` sessions.

### 6. Dynamic 3-Gear Action Engine & Zero-Loop Stagnation Guard
* **What it does**: Eliminates "analysis paralysis", prevents circular reasoning loops, and selects the most effective attack path at machine speed.
* **How it works**:
  * **3-Gear Transmission**:
    * *Gear 1 (Instant Reflex)*: Physical mobile actions and single-command checks execute with **0 thinking tokens**.
    * *Gear 2 (Speculative Parallel Canaries)*: Formulates 2–4 lightweight non-blocking canary checks (`security_speculative_probe`) executed concurrently via `Promise.all`. Reality selects the winning vector in 1 turn.
    * *Gear 3 (Swarm DAG Fanout)*: Deconstructs large engagements into parallel sub-tasks dispatched to subordinate agents.
  * **State-Differential Reality Check**: Monitors environment state deltas (exit codes, output signatures). If 2 turns produce zero state progress, it triggers an immediate **State-Stagnation Break**.
  * **Tabu (Pruned Vectors) Ledger**: Permanently records failed vectors and injects negative constraints into session memory, strictly forbidding the model from re-attempting dead ends (e.g. endless offline hash cracking).

### 7. Unified Cyber Graph & Tri-Tier Memory Architecture
* **What it does**: Persists intelligence across long-term engagements and maps the entire attack surface as a connected topological graph.
* **How it works**:
  * **Unified Cyber Graph Engine (`lib/security/graph/cyber-graph-engine.ts`)**:
    * Models assets as typed nodes (`host`, `user`, `vulnerability`, `process`, `artifact`, `ioc`) with directional relationships (`CONNECTS_TO`, `LOGS_INTO`, `HAS_VULNERABILITY`, `EXFILTRATES_TO`, `CAN_COMPROMISE`).
    * **Dijkstra Shortest Attack Path**: Calculates the lowest-effort, highest-probability multi-hop exploit chain from initial foothold to target crown jewels.
    * **Forensic Blast Radius**: Computes the complete transitive blast radius from an infected node (patient zero), identifying tainted credentials and at-risk crown jewel assets.
    * **Visual Mermaid Diagrams**: Renders interactive topology diagrams directly in the chat UI.
  * **Tier 1 (Episodic Memory)**: Tracks live engagement state: active IP scopes, compromised hosts, discovered credentials, and chronological attack timeline.
  * **Tier 2 (Semantic Memory)**: Vector database indexing past vulnerability disclosures, CVE signatures, and organizational target profiles.
  * **Tier 3 (Collective Skills)**: Captures successful command and browser traces, scrubs confidential tokens, and persists 1-shot execution recipes for reuse across future sessions.
  * **Bidirectional Global Notebook (`ENGAGEMENT_NOTES.md`)**: Automatically syncs notes between operator and AI on disk every 4 seconds.

### 8. Sandboxed Kali Linux Runtime & Comprehensive DFIR Suite
* **What it does**: Equips the AI with an isolated Docker container (`redhunter-sandbox`) pre-loaded with offensive, binary reversing, and forensic toolchains without endangering the host system.
* **How it works**:
  * **Offensive Toolset**: `nmap`, `naabu`, `httpx`, `ffuf`, `dirsearch`, `sqlmap`, `hydra`, `nuclei`, `trivy`, `subfinder`, `katana`, `trufflehog`.
  * **Digital Forensics & Incident Response (DFIR) Suite**:
    * **Disk & File Forensics**: The Sleuth Kit (`fls`, `tsk_recover`, `mmls`, `fsstat`), `foremost`, `scalpel`, `testdisk`, and `dc3dd` for raw disk dumps (`.dd`, `.raw`, `.vmdk`, `.img`).
    * **Firmware Extraction**: `binwalk` for unpacking nested filesystems and proprietary embedded binaries.
    * **Volatile Memory Forensics**: `volatility3` for analyzing RAM dumps to detect injected code (`malfind`), hidden processes (`pslist`), and network sockets (`netscan`).
    * **Network Forensics & IoC Extraction**: `zeek` and `tshark` for automated protocol parsing (HTTP, DNS, SSL) and C2 beacon heartbeat detection.
    * **Malware Reverse Engineering & YARA**: `rizin`, `radare2`, Mandiant `floss`, `gdb`, `gdbserver`, and automated `yara` rule generation.
    * Python exploitation and binary auditing stack: `pwntools`, `pefile`, `capstone`, `ropper`.
  * **Zero-Trust Upload Quarantine & Direct Container Dispatch (`lib/utils/sandbox-file-utils.ts`)**:
    * **Air-Gapped Host Protection**: When an operator uploads suspect files (malicious binaries, suspicious firmware, corrupted multimedia, or unknown APKs), the host web application / Next.js server **never unpacks or executes the file**. The host acts strictly as an unprivileged binary stream proxy.
    * **Direct Streaming to Container**: `stageSandboxFile()` automatically streams uploaded files across the container boundary directly into the isolated sandbox filesystem (`/tmp/redhunter/...` or the active workspace).
    * **Multi-Format Ingestion Limits**:
      * 📸 **Photos & Static Images**: **10 MB** (PNG, JPEG, WebP, GIF, SVG, BMP, TIFF, RAW).
      * 📁 **General Files, Docs & Binaries**: **50 MB** (PDF, PCAP, APK, IPA, ELF, EXE, SO, code, logs).
      * 🎥 **Videos, Audio & Media in ZIP**: **2 GB** (2048 MB) for long surveillance recordings, high-res video, audio wiretaps, or zipped multi-file datasets. Automatically extracted (`unzip`) inside the sandbox for `ffmpeg` / `sox` analysis.
      * 📝 **Automatic Long Text Paste Conversion**: Pasting large text blocks ($\ge 2,500$ chars) automatically packages them into a `.txt` file attachment, eliminating UI freezing and conserving prompt tokens.
    * **Full Blast Radius Containment**: If a file contains an exploit payload designed to corrupt memory or escape a system, it executes exclusively inside the firewalled, cgroup-constrained Kali container. If damaged, the container is instantly recycled while the host application and database remain 100% online and untouched.
    * **Unrestricted Agent Liberty**: Inside the sandbox container, the AI agent can autonomously run compilers, decompilers, kernel fuzzers, and dynamic scripts with root/sudo authority without risk to the physical host.

### 9. Model Context Protocol (MCP) & Enterprise Connectors
* **What it does**: Connects RedHunter AI bidirectionally to enterprise SaaS, ticketing, and cloud infrastructure.
* **How it works**:
  * **Anthropic MCP Client & Server (`lib/mcp/mcp-client.ts`)**: Dynamically registers external tools and exposes RedHunter AI capabilities via JSON-RPC 2.0.
  * **Composio Integration (`lib/integrations/composio-client.ts`)**: Built-in support for 100+ platforms including GitHub, Jira, Slack, AWS, Linear, and Gmail.
  * **Pipedream Client (`lib/integrations/pipedream-client.ts`)**: Triggers automated webhooks to notify SecOps teams when critical vulnerabilities are confirmed.

### 10. Real-Time Task Progress Bar & Live State Synchronization
* **What it does**: Keeps the operator in complete control with an interactive, live-updating task checklist.
* **How it works**:
  * The agent proactively breaks down multi-step objectives into structured checklists (`todo_write`).
  * As each phase finishes (e.g. Reconnaissance), the agent invokes `todo_write({ merge: true, ... })` to mark the finished task `completed` and the next task `in_progress`.
  * The frontend dynamically renders the live progress bar (`1 / 4` ➔ `2 / 4` ➔ `3 / 4` ➔ `4 / 4`), updating checkmarks in real time without screen refresh.

### 11. Deep Vulnerability Root Cause Analysis (RCA) & Remediation Hotpatching
* **What it does**: Elevates standard pentesting to zero-day exploit R&D by dissecting crashes down to C-level root causes and synthesizing verified code hotpatches.
* **How it works**:
  * **Post-Mortem Crash Triage (`lib/security/rca/root-cause-analyzer.ts`)**: Automatically ingests GDB crash output or core dumps, extracting fault addresses, signals (`SIGSEGV`, `SIGABRT`), and registers (`$rip`, `$rsp`, `$rbp`, `$rax`).
  * **Memory Mitigations Audit**: Inspects binary defenses including ASLR, DEP/NX, Stack Canaries, PIE, and RELRO.
  * **Official CWE Mapping**: Accurately maps faulting primitives to official Common Weakness Enumerations (`CWE-120`, `CWE-121`, `CWE-134`, `CWE-416`).
  * **Automated Code Hotpatch Synthesis**: Generates clean, ready-to-merge C/Rust/Python diffs (e.g. replacing unsafe unbounded copies with bounded functions) and specifies compiler hardening flags (`-fstack-protector-strong`, `-D_FORTIFY_SOURCE=2`).
  * **Deterministic Proof-of-Exploit**: Pairs the patch with reproducible `curl` scripts and raw terminal traces for verifiable remediation.
 
### 12. Advanced OSINT, GEOINT & 12-Layer Multimodal Deepfake Forensic Framework
* **What it does**: Conducts technical OSINT, geospatial signal triangulation (GEOINT), astronomical solar chronolocation, and an industry-leading **12-Layer Multimodal Deepfake & Synthetic Media Forensic Framework** across video, audio, and images (`lib/ai/tools/osint-recon-tool.ts`, `lib/security/osint/deepfake-12layer-engine.ts`, `lib/security/osint/geoint-engine.ts`).
* **How it works**:
  * **12-Layer Multimodal Deepfake Detection Framework (`lib/security/osint/deepfake-12layer-engine.ts`)**:
    Modern generative models (Sora, Veo, Flux, Runway, ElevenLabs) pass traditional pixel heuristic tests. RedHunter AI enforces 12 inviolable physical, biological, and metadata layers:
    1. *Layer 1: Visual Artifacts & Spatial Morphology*: Boundary blending, warp fields, skin plasticity, earlobe/teeth structure.
    2. *Layer 2: Frequency Domain Analysis*: 2D Discrete Cosine Transform (DCT) and Fast Fourier Transform (FFT) testing natural $1/f^\alpha$ power-law falloff and detecting checkerboard high-frequency spikes.
    3. *Layer 3: Biological Signals (rPPG & Autonomic)*: Isolates green-channel ($500\text{--}600\text{nm}$) Remote Photoplethysmography to verify cyclic $0.75\text{--}3.5\text{ Hz}$ blood volume pulse (BVP), pupillary light reflex consistency, and Poisson blink distribution.
    4. *Layer 4: Physics Consistency & Optical Ray Geometry*: Multi-vector shadow intersection solver (enforcing sunlight parallelism $<5^\circ$ divergence), corneal reflection ray-tracing symmetry, and motion blur vs. angular velocity correlation.
    5. *Layer 5: Audio-Visual Synchronization*: Cross-modal phoneme-viseme alignment (verifies bilabial plosives $/b/, /p/, /m/$ lip closures), audio-to-video drift tracking (threshold $\pm 80\text{ms}$ per ITU-R BT.1359), and spatial room reverberation ($\text{RT}_{60}$) matching visible room volume.
    6. *Layer 6: Temporal Coherence & Optical Flow*: Farnebäck dense optical flow vector smoothness, micro-flicker on accessories/glasses rims, and biometric identity vector stability across frames.
    7. *Layer 7: Container, Codec & Multiplexing Forensics*: MP4/MOV atom topology (`ftyp`, `moov`, `mdat` ordering), encoder software signatures (`Lavf`, `x264` vs. camera hardware ISP), and variable frame rate (VFR) jitter.
    8. *Layer 8: Compression Forensics & Error Level Analysis (ELA)*: Computes high-contrast error residuals at fixed quality to expose localized double-compression ghosts and macroblock boundary anomalies.
    9. *Layer 9: Sensor Noise Ballistics (PRNU)*: Extracts Photo-Response Non-Uniformity sensor fingerprints via wavelet denoising to verify physical CMOS fixed-pattern noise.
    10. *Layer 10: AI Model Fingerprinting & Provenance*: Cryptographic C2PA provenance validation, SynthID frequency domain embedding extraction, and Sora/Veo/Flux generative model metadata signatures.
    11. *Layer 11: Semantic, Chronolocation & Environmental Ground Truth*: Cross-references solar azimuth and elevation with claimed GPS coordinates, seasonal vegetation biomes, and architectural plausibility.
    12. *Layer 12: Behavioral & Acoustic Stylometry*: Fundamental frequency ($F_0$) pitch contour variance, speech cadence, and neural vocoder phase-buzz detection for voice clones.
  * **Ground-Truth Reference Baseline Differential Analysis (Side-by-Side Calibration)**:
    - When verified authentic reference video or audio of a subject is provided, the AI switches to **Comparative Biometric & Acoustic Calibration**.
    - Calculates differential deltas: $\Delta_{\text{biometrics}}$ (facial bone and eye geometry), $\Delta_{\text{voiceprint}}$ (acoustic vocal tract formants $F_1, F_2, F_3, F_4$), $\Delta_{\text{motor}}$ (blink cadence and micro-expression habits), $\Delta_{\text{rPPG}}$ (cardiac micro-vascular blood flow), and $\Delta_{\text{linguistics}}$ (syllable pacing and audio-visual latency).
    - Proactive Inquiry Protocol: The AI autonomously prompts the investigator to provide authentic reference media whenever auditing suspected media of a specific person.
  * **CCTV & Convex Mirror Optical Inversion and Forensic Contrast Deck**:
    - *Convex Traffic & Security Dome Dewarping*: Corrects lateral inversion and radial distortion produced by convex traffic mirrors, parking garage mirrors, and surveillance domes where reflected text reads backwards.
    - *Interactive Viewer Forensics Toolbar (`app/components/ImageViewer.tsx`)*: Un-mirror (Flip H `scaleX(-1)`), Flip V, and forensic contrast presets (**Negative / Invert**, **Hi-Contrast**, and **OCR B&W**) directly in the UI.
  * **Federal/SWGDE Forensic Image Profiler Engine (`lib/security/osint/forensic-image-profiler.ts`)**:
    - *DQT Quantization Hashing & Hardware Profiling*: Extracts 64-byte Luminance & Chrominance matrices, computes MD5/SHA-256 hashes, and matches against known camera ISPs (Apple iPhone iOS, Samsung ISOCELL, Canon EOS, Nikon) and editing pipelines.
    - *Steganography & Trailing Byte Carver*: Carves hidden payloads appended past the JPEG EOI marker (`0xFFD9`), detects polyglot containers (ZIP, RAR, 7z, GZIP, PE, ELF), and calculates Shannon entropy.
    - *EXIF IFD1 Embedded Thumbnail Divergence*: Cross-examines main image canvas aspect ratio against the embedded hardware preview thumbnail to expose cropping, selective face-swapping, and tampering.
  * **5-Layer Geolocation & Signal Triangulation**: Triangulates target location across EXIF hardware, astronomical solar chronolocation ($\alpha = \arctan(H/L)$), historical weather archives, visual landmarks, and transit decals.
  * **Executive Deliverable Report Generation (`lib/security/osint/deepfake-report-generator.ts`)**:
    - Compiles high-resolution executive PDF dossiers and visual Markdown scorecards.
    - Full chain of custody with SHA-256, SHA-512, and MD5 cryptographic hashes compliant with **Federal Rules of Evidence (FRE) Rule 902(14)** and **SWGDE** digital evidence standards.
  * **Strict Ethical & Legal Safety Guardrails**: Built-in guardrails strictly forbid unauthorized facial recognition surveillance, doxxing, or private human tracking (CWE-359, GDPR Art. 9).

### 13. Satellite Communications (SATCOM), Military Cyber Electronic Warfare (EW) & RF Spectrum Operations (Aerospace SPARTA & JEMSO Framework)
* **What it does**: Provides military-grade cyber-electromagnetic spectrum operations (JEMSO), passive RF reconnaissance, and automated vulnerability hotpatching for satellite terminals, spacecraft bus architectures, tactical RF data links, and ground stations, strictly adhering to **Joint Publication 3-85 (Joint Electromagnetic Spectrum Operations)**, **Joint Publication 3-12 (Cyberspace Operations)**, and **The Aerospace Corporation SPARTA (Space Attack Research & Tactic Analysis)** framework.
* **How it works**:
  * **Direct Physical Hardware Abstraction (Zero Mocks / Zero Simulations)**:
    - **SDR Controller (`lib/security/hardware/satcom-physical-radio-controller.ts`)**: Direct host driver execution for **Ettus USRP B210/X310** (`uhd_find_devices`, `uhd_usrp_probe`, `uhd_rx_cfile`), **HackRF One** (`hackrf_info`, `hackrf_transfer`, `hackrf_sweep`), **LimeSDR** (`LimeUtil`), and **RTL-SDR v3/v4** (`rtl_test`, `rtl_sdr`, `rtl_power`). Dynamic local oscillator (LO) tuning, sample rate matching, and direct IQ sample acquisition (complex float32/int16).
    - **Directional Antenna Arrays**: Direct interface to directional **Yagi-Uda arrays** (VHF/UHF line-of-sight & tactical SATCOM), **Parabolic Reflector Dishes** (microwave C/X/Ku/Ka bands), and **Helical/QFH circularly polarized antennas** (RHCP/LHCP for satellite passes to eliminate Faraday rotation polarization fading).
    - **RF Front-End Conditioning (LNA, PA & Bias-Tee)**: Active Low-Noise Amplifier (LNA) management for sub-microvolt signal reception ($-120\text{ dBm}$ to $-140\text{ dBm}$ sensitivity threshold), Power Amplifier (PA) management, Bias-Tee active DC power injection (3.3V/5.0V), and receiver dynamic range protection against 1 dB compression point ($P_{1\text{dB}}$) front-end saturation.
    - **Physical GPSDO Clock Reference**: Validates 10 MHz reference clock and 1 PPS pulse synchronization on USRP hardware or GPSD daemon to enforce sub-part-per-billion frequency accuracy, coherent multi-channel phase alignment, and nanosecond timestamping.
    - **Antenna Tracking Rotator Interface**: Communicates directly with dual-axis antenna positioners via the universal military and amateur **Hamlib `rotctl` / `rotctld` protocol** over TCP port 4533 or serial. Commands azimuth/elevation coordinates (`P <az> <el>`) and queries real-time tracking locks (`p`).
    - **Orbital Mechanics & Real-Time Doppler Compensation**: SGP4 TLE orbital propagation (Norad two-line element sets) via Gpredict or internal SGP4 engine. Continuous dynamic Doppler frequency shift calculation ($\Delta f = f_0 \frac{v_{\text{rel}}}{c}$) dynamically feeding the SDR VFO frequency to maintain lock across satellite passes (AOS to LOS).
  * **The 3 Military Electronic Warfare (EW) Pillars**:
    - **1. Electronic Warfare Support (ES) / SIGINT & Spectrum Awareness**:
      * Autonomous wideband frequency sweeping across tactical and satellite bands to establish baseline spectral electromagnetic environment (EME).
      * Waterfall & Power Spectral Density (PSD) analysis to identify rogue carriers, burst transmissions, frequency hopping spread spectrum (FHSS) dwell patterns, and direct-sequence spread spectrum (DSSS) noise floors.
      * Blind signal classification: extracts modulation schemes (BPSK, QPSK, 8PSK, 16APSK, FSK, GFSK, MSK), symbol rates ($R_s$), roll-off factors, and carrier-to-noise ratios ($C/N_0$).
      * Emitter Direction Finding (DF): triangulating emitter bearing using directional antenna rotation (Yagi/dish) and received signal strength indication (RSSI) peak-power sweeps.
    - **2. Electronic Protection (EP) / Defensive Hardening & Resilience**:
      * Jamming resilience auditing: measuring Jammer-to-Signal ratio ($J/S$) and determining processing gain ($G_p = B_{\text{rf}} / R_b$). Auditing link margin against barrage, spot, and sweep jamming degradation.
      * GNSS & PNT Anti-Spoofing Auditing: auditing GPS L1 C/A receivers for pseudorange jumps and clock bias rate-of-change anomalies; validating cryptographic authentication via **Galileo OSNMA** (Open Service Navigation Message Authentication); monitoring GPSDO clock holdover drift.
      * RF Link Budget Verification: calculating link margin using the Friis transmission equation ($P_{\text{rx}} = P_{\text{tx}} + G_{\text{tx}} + G_{\text{rx}} - \text{FSPL} - L_{\text{atm}} - L_{\text{pol}} - L_{\text{cable}}$) to verify operational resilience under adverse atmospheric or standoff conditions.
      * Front-End Overload Hardening: auditing receiver automatic gain control (AGC) response and testing passive RF bandpass/notch filtering to reject high-power out-of-band energy without LNA clipping.
    - **3. Electronic Attack (EA) Resilience & Cyber-EW Convergence**:
      * Cross-Layer Protocol Integrity: fuzzing Space Data Link Security (**CCSDS 355.0-B-1 SDLS**) encryption flags, anti-replay sequence counters, and telecommand (TC) validation to prevent RF-delivered cyber exploitation.
      * Satellite Gateway & Firmware Resilience: auditing satellite terminal WAN interfaces (TR-069 port 7547, SNMPv1/v2c, HTTP/SSH) and baseband firmware binaries for hardcoded secrets, cryptographic weaknesses, and unauthorized telecommand execution pathways.
  * **Signal Processing & Telemetry Frame Decoding**:
    - Synthesizes production-ready **GNU Radio Companion Python flowgraphs** (`root_raised_cosine`, `costas_loop_cc`, `symbol_sync_cc`, `constellation_decoder_cb`) dynamically.
    - Directly executes **`gr-satellites`** and **`satdump`** CLI tools to demodulate and extract CCSDS 355.0-B-1, AX.25, DVB-S2 GSE, and NOAA weather telemetry frames.
  * **Dynamic Military-Approved SPARTA TTP Playbook Synthesizer (`lib/security/hardware/satcom-dynamic-ttp-engine.ts`)**:
    - Eliminates rigid static strings: dynamically analyzes target telemetry (carrier frequency, CPU architecture `arm64`/`sparc_leon3`/`x86_64`, framing standard, and modem OS).
    - Autonomously synthesizes custom, context-aware military audit scripts (Bash/Python/C) and production-ready remediation patches for all **Top 15 Aerospace Corporation SPARTA Controls** (`SPARTA-REC-0001` through `SPARTA-EXF-0015`).
    - Grounded in military and space standards: **CCSDS 355.0-B-1 (SDLS)**, **CCSDS 232.1-B-2 (COP-1)**, **MIL-STD-188-164C/165B**, **Joint Publication 3-85**, **Joint Publication 3-12**, **DoD Zero Trust Space Enclave Reference**, **NSA CSfC Space**, and **Galileo OSNMA**.

#### Operator Guidance & Step-by-Step Instructions

##### 1. Physical Hardware Setup & Interfacing
1. **SDR Connection**: Connect your SDR (Ettus USRP B210/X310, HackRF One, LimeSDR, or RTL-SDR) to a high-speed USB 3.0 / 10 GbE interface on the host machine.
2. **Antenna & Front-End Setup**:
   - For satellite passes / weak RF signals: Connect your directional antenna (Yagi-Uda or Parabolic Feedhorn) to the LNA RF IN port.
   - Connect the LNA RF OUT port to the SDR RX port using low-loss coaxial cable (RG-213 / LMR-400).
   - If using active Bias-Tee, ensure voltage is set correctly (3.3V or 5V DC) before powering on.
3. **GPSDO Timing Lock**: Connect the 10 MHz reference clock and 1 PPS pulse SMA cables from your GPSDO to the `REF IN` and `PPS IN` ports of your USRP/SDR. Verify the lock LED lights solid.
4. **Antenna Rotator (Hamlib)**:
   - Connect your rotator controller (e.g., Yaesu, SPID, AlfaSpid) to your computer via USB/serial.
   - Start the Hamlib rotator daemon:
     ```bash
     rotctld -m <rotator_model_id> -r /dev/ttyUSB0 -T 127.0.0.1 -t 4533
     ```
   - RedHunter AI will automatically communicate over TCP port 4533.

##### 2. Operational Prompt Workflows (How to Command RedHunter AI)
Simply prompt RedHunter AI in natural language; the autonomous agent will select the appropriate physical radio bridge tools:

* **Scenario A: Hardware Discovery & Clock Synchronization Audit**
  > *"RedHunter, discover all connected SDR hardware, check GPSDO 10 MHz reference clock and 1 PPS lock status, and query the antenna rotator position."*
  - **Tool Executed**: `security_satcom_sparta_bridge(action: "discover_satcom_hardware")` and `security_satcom_sparta_bridge(action: "check_gpsdo_reference")`.

* **Scenario B: Satellite Pass Tracking with Real-Time Doppler Compensation**
  > *"RedHunter, track the upcoming NOAA-19 / CubeSat pass. Propagate orbital TLE using SGP4, steer the antenna rotator via Hamlib to maintain pointing lock, and dynamically compensate for Doppler frequency shift on our USRP B210."*
  - **Tool Executed**: `security_satcom_sparta_bridge(action: "control_antenna_rotator", rotatorCommand: "set_position", rotatorAzimuth: 184.2, rotatorElevation: 42.6)`.

* **Scenario C: Passive Spectrum Power Sweeping & IQ Capture**
  > *"RedHunter, perform a passive spectrum power sweep on L-Band 1.6265 GHz with 25 dB LNA gain. Capture 5 seconds of 32-bit complex float IQ samples to disk without emitting RF, and plot the Power Spectral Density (PSD) to detect unmodulated carrier spikes."*
  - **Tool Executed**: `security_satcom_sparta_bridge(action: "start_passive_monitoring", carrierFrequencyHz: 1626500000, durationSeconds: 5, gainDb: 25)`.

* **Scenario D: GNU Radio Demodulation & Telemetry Extraction**
  > *"RedHunter, process the captured IQ file through a synthesized GNU Radio flowgraph to demodulate QPSK and deframe CCSDS 355.0-B-1 SDLS telemetry."*
  - **Tool Executed**: `security_satcom_sparta_bridge(action: "process_satellite_signal", framingProtocol: "CCSDS_355")`.

* **Scenario E: Full Military SPARTA & Cyber-EW Resilience Audit**
  > *"RedHunter, audit our SATCOM ground terminal gateway (192.168.1.1) against the Top 15 Aerospace SPARTA controls and Joint Pub 3-85 EW resilience guidelines. Synthesize deployable C/Python mitigation patches."*
  - **Tool Executed**: `security_satcom_sparta_bridge(action: "audit_sparta_top15", targetIp: "192.168.1.1")`.

##### 3. Strict Rules of Engagement (RoE)
- **Passive by Default**: All RF spectrum operations default to passive reception and monitoring.
- **Closed-Circuit Testing Only**: Any transmission testing (RF protocol fuzzing, jamming resilience validation) MUST be conducted inside shielded RF enclosures (TEM cells, Faraday cages) or via 50-ohm dummy load attenuators under authorized test range rules.


### 14. OSIRIS Live OSINT Matrix & Embedded Tactical Situational Awareness Platform
* **What it does**: Ingests real-time multi-layer open source intelligence (OSINT) inspired by the **OSIRIS platform (`osirisai.live`)**, aggregating georeferenced public CCTV/traffic webcams, live ADS-B air traffic transponders, USGS seismic event streams, undersea fiber optic cable corridors, and astronomical solar day/night terminator lines.
* **How it works**:
  * **Real-Time Data Ingestion Engine (`lib/security/osint/live-osint-matrix.ts`)**:
    - **Live USGS Earthquake Feeds**: Ingests `earthquake.usgs.gov` real-time GeoJSON streams, calculating magnitude, focal depth, tsunami alerts, and distance to target coordinates.
    - **OpenSky Network ADS-B Stream**: Connects to the OpenSky Network API to track active aircraft, decoding callsigns, ICAO24 addresses, barometric altitude, ground velocity, squawk codes, and heading vectors.
    - **Georeferenced Public CCTV Directory**: Maintains a curated directory of active public traffic webcams and municipal cameras across key strategic corridors (e.g. Kok-Art Pass, Osh, Bishkek, Tokyo Shibuya, London Thames Barrier, New York Harbor, Jebel Ali) with verified live HLS (`.m3u8`) and snapshot feeds.
    - **Strategic Submarine Fiber Cables**: Ingests international undersea communications cable paths (SEA-ME-WE 5, Apollo Transatlantic, Faster Trans-Pacific) with landing stations and capacity metrics.
    - **Astronomical Solar Day/Night Terminator**: Calculates the real-time solar declination, Greenwich Hour Angle, and 360° great-circle shadow arc to display daylight vs. nocturnal operational coverage.
    - **Cross-Domain SATCOM & RF Overpass Correlator**: Correlates ground station RF intercepts (SDR frequencies in UHF, S-band, or Ku-band) with overhead LEO/GEO satellite footprints and nearby camera feeds.
  * **Interactive Embedded Tactical OSIRIS Map (`components/osint/tactical-osiris-map.tsx`)**:
    - **Dark Military HUD**: Displays Zulu time (`06:54:52Z`), solar geomagnetic Kp index (`Kp0`), entity counter (`41,249 ENTITIES`), and status indicators.
    - **Dynamic Layer Toggles**: Sidebar controls to toggle CCTV cameras, ADS-B aircraft trails, USGS seismic rings, submarine cables, day/night shadows, and satellite passes.
    - **Pop-Up Secure Video Uplink HUD**: Clicking any camera pin opens a tactical picture-in-picture stream modal featuring live HLS playback, coordinate telemetry, azimuth/elevation angles, scanline CRT overlays, and target lock controls.
    - **Real-Time Seismic Incident Ticker**: Scrolling footer ticker broadcasting live earthquake alerts with magnitude severity badges and relative timestamps.
    - **Seamless Chat Embeds**: When requested, the AI assistant outputs an ````osiris ... ```` block, rendering the interactive tactical HUD directly inside the conversation.

### 15. Threat Actor Attribution, Adversarial Honeytokens & Forensic Intelligence Engine
* **What it does**: Bridges low-level artifact forensics with macro threat intelligence to identify nation-state threat groups (APTs) and ransomware syndicates across **10 orthogonal behavioral dimensions**, enforcing mathematical Bayesian likelihood distributions, Rule of 3+ multi-source verification, and Federal Rules of Evidence Rule 902(14) self-authenticating digital evidence generation.
* **How it works**:
  * **10-Vector Behavioral Feature Extraction Pipeline (`lib/security/forensics/`)**:
    - **Temporal Fingerprinting (`temporal-fingerprint.ts`)**: Models inter-command delta timing ($\Delta t$), kernel density estimations (KDE), diurnal active working-hour distributions (UTC 0-23), and cognitive pause breaks ($>300\text{s}$) to detect human fatigue vs. automated loops and calculate origin timezones.
    - **Language & Cultural Forensics (`language-forensics.ts`)**: Categorizes Unicode script blocks (`\p{Script=Cyrillic}`, `\p{Script=Han}`, `\p{Script=Arabic}`), extracts localized slang/transliterated operational tokens (Russian `parol`, `dostup`; Chinese Pinyin `mima`, `caidao`), and catches JCUKEN keyboard layout slipping (e.g. typing `ды` for `ls` or `сы` for `cd`).
    - **Tool Chain & MITRE ATT&CK Fingerprints (`toolchain-analyzer.ts`)**: Maps raw shell pipelines to official MITRE techniques and calculates vector cosine similarity against active threat groups (**APT28 / Fancy Bear**, **APT29 / Cozy Bear**, **Volt Typhoon**, **Lazarus Group**, and **LockBit Syndicate**).
    - **Infrastructure Reuse Graph (`crtsh-client.ts`, `rdap-client.ts`)**: Connects to the free public Certificate Transparency log search (`crt.sh`) to extract SSL serial numbers and Subject Alternative Names (SANs), coupled with RIR RDAP and RIPE Stat BGP prefix routing.
    - **Live Tor Project Bulk Exit Relay Filter (`tor-checker.ts`)**: Queries and caches the official Tor Project directory to neutralize spoofed geographic attributions.
    - **Cryptocurrency On-Chain Tracing (`mempool-client.ts`)**: Leverages 100% free Mempool.space and Blockstream APIs to parse Bitcoin UTXO flows, detect peeling chain behavior, and tag known KYC exchange cash-out deposit clusters (Binance, Coinbase, Kraken, Bitfinex).
    - **AI Adversarial Detection Engine (`ai-adversarial-detector.ts`)**: Evaluates sub-15ms execution burst rates, typo error absence, Shannon command entropy, and checks for adversarial prompt canary tripwires.
    - **Adversarial Honeytoken Manager (`honeytoken-manager.ts`)**: Dynamically provisions authentic decoy AWS STS access keys (`AKIA` format) and canary webhooks to capture an attacker's non-proxied IP, User-Agent, and headers.
  * **Mathematical Attribution Engine (`bayesian-attribution-engine.ts`)**:
    - **Bayesian Posterior Likelihoods**: Calculates $P(\text{Actor}_k \mid E) \propto P(E \mid \text{Actor}_k) \cdot P(\text{Actor}_k)$ across all candidate threat actors.
    - **Rule of 3+ Multi-Source Verification**: Demands affirmative correlation across $\ge 3$ independent axes (Infrastructure, Toolchain, Cultural, Temporal, Crypto) before certifying attribution.
    - **False-Flag & Deception Penalty**: Detects commercial VPNs, Tor exit nodes, and contradictory cultural artifacts to prevent false attribution.
    - **Court-Admissible FRE 902(14) Evidence**: Generates canonical JSON payloads anchored with SHA-256 hashes for courtroom submission.
  * **Autonomous DFIR Tool Integration (`lib/ai/tools/dfir-tools.ts`)**:
    - `dfir_threat_attribution`: Enables the RedHunter AI swarm to autonomously execute threat actor profiling during campaigns.
    - `dfir_honeytoken_deploy`: Deploys decoy canary credentials on demand.

### 16. White-Box Code Property Graph (CPG), Source-to-Sink Taint Engine & Reachability Analysis
* **What it does**: Turns any codebase, cloned git repository, or decompiled application into a queryable Code Property Graph (CPG) with deterministic source-to-sink taint tracking, blast radius impact analysis, and zero-false-positive dependency reachability (SCA) verification.
* **How it works**:
  * **Code Property Graph Engine (`lib/security/codegraph/code-graph-engine.ts`)**:
    - **AST & Semantic Symbol Parsing**: Ingests source files (TypeScript, JavaScript, Python, Go, Rust, C/C++) to extract HTTP routes, function declarations, input sources (`req.body`, `req.query`, `req.params`), execution sinks, and sanitizers.
    - **Source-to-Sink Dijkstra/BFS Taint Tracking**: Traces untrusted input dataflow paths down to dangerous execution sinks: OS Command Injection (CWE-78), SQL Injection (CWE-89), Dynamic Code Eval (CWE-94), SSRF (CWE-918), Path Traversal (CWE-22), and Insecure Deserialization (CWE-502).
    - **Sanitizer Neutralization Registry (`sanitizer-registry.ts`)**: Validates whether parameterized queries, numeric casting (`parseInt`), path basenames, or DOMPurify nodes sit along the dataflow path. Unmitigated paths are flagged as verified vulnerabilities with reproduction traces.
    - **Impact Radius & Blast Radius Calculation**: Traverses upstream call graphs using reverse BFS to calculate all callers, dependent modules, and exposed public HTTP endpoints affected by a vulnerable helper function.
    - **Supply Chain Reachability Verification (Zero-False-Positive SCA)**: Cross-references third-party library CVEs against the application's active call graph to eliminate false positives from uncalled library code.
  * **Autonomous AI Tool Suite (`lib/ai/tools/code-graph-tool.ts`)**:
    - `codegraph_index`: Ingests files or entire directories into the active Code Property Graph.
    - `codegraph_query_path`: Verifies source-to-sink dataflow reachability and sanitizer neutralization.
    - `codegraph_impact_radius`: Calculates upstream callers and exposed public endpoints.
    - `codegraph_audit_sinks`: Discovers unmitigated sinks and registers verified exploit paths directly into RedHunter's Unified Cyber Graph (`globalCyberGraph`).
    - `codegraph_check_reachability`: Audits third-party dependency reachability.

### 17. Autonomous Network Topology Inference & Architecture Cartography ("Eye in the Sky")
* **What it does**: Moves far beyond flat port scans to mathematically reconstruct full enterprise and cloud network topologies, middleboxes (stateful firewalls, load balancers, reverse proxies), Active Directory forests, and cross-domain server trust relationships without requiring internal agent access.
* **How it works**:
  * **Multi-Layer Topology Engine (`lib/security/topology/network-topology-engine.ts`)**:
    - **Mathematical TTL Delta & Hop Distance Solver**: Evaluates incoming packet TTL values against standard base operating systems ($64$ for Linux/BSD/Mac, $128$ for Windows, $255$ for Cisco/Juniper) to calculate exact hop distance ($H = TTL_{\text{base}} - TTL_{\text{received}}$).
    - **Multi-Port TTL Divergence**: Compares TTL bases across different ports on the same host to mathematically prove the presence of reverse proxies (Envoy, NGINX, HAProxy), SSL terminators, or Layer 7 load balancers (F5 BIG-IP, AWS ALB/NLB).
    - **TCP Window & Stack Characteristics**: Fingerprints stateful deep packet inspection firewalls (Palo Alto, Fortinet) and SYN proxies rewriting window options (e.g. static 65535 or 512).
    - **Purdue & Enterprise Zone Classification**: Categorizes assets into architectural tiers: Internet Edge, DMZ, Application Tier, Database Enclave, Active Directory Enclave, and Management Out-of-Band (OOB).
    - **Active Directory & Infrastructure Mapping via DNS**: Queries canonical DNS SRV records (`_ldap._tcp.dc._msdcs`, `_kerberos._tcp.dc._msdcs`, `_gc._msdcs`) and executes DNSSEC NSEC/NSEC3 zone walking to unearth Domain Controllers and internal services without noisy brute-force traffic.
    - **Universal Cross-Domain Trust Mapping**: Ingests Web/API reverse proxy links, Cloud IAM `sts:AssumeRole` trust chains, and physical hardware multi-homed bridges.
    - **Architectural Weak Point & Pivot Discovery**: Automatically detects high-risk architectural anomalies (e.g. DMZ servers with direct, uninspected port 389/88 access to Active Directory Domain Controllers, or cross-account administrator IAM takeovers).
  * **Autonomous AI Tool Suite (`lib/ai/tools/network-topology-tool.ts`)**:
    - `topology_infer_architecture`: Ingests packet telemetry, TTL hops, and middleboxes.
    - `topology_dns_zone_walk`: Discovers Active Directory Domain Controllers and KDCs via DNS SRV.
    - `topology_ingest_cross_domain`: Ingests Web/API microservices, Cloud IAM chains, and hardware bridges.
    - `topology_export_trust_report`: Generates Mermaid architecture diagrams and synchronizes verified assets and trust edges directly into RedHunter's Unified Cyber Graph (`globalCyberGraph`).

### 18. AI-Driven Binary Diffing, 1-Day Patch Analysis & Semantic Genetic Protocol Fuzzing
* **What it does**: Closes the critical "1-Day window" between vendor patch release and enterprise patch adoption. Rather than waiting for public exploit drops or CVE database updates, RedHunter AI instantly reverse-engineers software patches, isolates vulnerability mechanisms, identifies incomplete or bypassable fixes, and drives grammar-aware genetic fuzzing to uncover deep memory and logic flaws.
* **How it works**:
  * **AST & Binary Patch Diffing Engine (`lib/security/patch/patch-diff-engine.ts`)**:
    - **Unified Diff & AST Decomposition**: Ingests vendor git diffs (`+/-` lines) or unpatched vs. patched source files, identifying exact code hunks, added constraints, and modified execution branches.
    - **Fix Classification & Mapping**: Automatically categorizes security fixes (`bounds_check`, `input_sanitization`, `auth_enforcement`, `type_validation`, `memory_management`, `parameterized_query`) and maps them to concrete CWE identifiers (CWE-119, CWE-78, CWE-89, CWE-22, CWE-285, CWE-416).
    - **Patch Completeness & Bypass Scoring**: Detects fragile or incomplete vendor fixes (such as single-pass `.replace("../", "")` traversals, non-constant-time token comparisons, or missing recursion checks) and automatically generates functional bypass vectors (e.g. `....//`, double URL encoding, timing side channels).
    - **Sibling Function Vulnerability Analysis**: Scans surrounding repository files for sibling endpoints or helper functions that perform identical unvalidated operations but were missed by the vendor patch.
    - **Defensive Regression Test Synthesis**: Produces automated test harnesses that verify whether a patched target properly blocks boundary mutations, and exposes 1-day gaps in unpatched instances.
  * **Semantic Genetic Protocol Fuzzing Engine (`lib/security/fuzzing/genetic-fuzzer-engine.ts`)**:
    - **Grammar-Aware Schema Chromosomes**: Models structured payloads across complex protocols (`http2_rest`, `grpc_protobuf`, `graphql`, `websocket_json`, `length_prefixed_binary`, `tlv_custom_rpc`) as evolutionary chromosomes rather than random byte destruction.
    - **Intelligent Domain Mutators**: Applies 7 targeted mutation operators: boundary integer injection (32-bit/64-bit boundaries), type confusion swaps (scalar to nested object/array/null), deep recursive nesting (stack exhaustion probes), format specifier fuzzing (`%s%p%x%n`), unicode homoglyph slip, and array overflow expansion.
    - **Multi-Objective Genetic Fitness Function**: Quantifies payload efficacy based on response latency deltas (algorithmic DoS), HTTP 5xx fatal crashes, memory pressure, and parser divergence ($F = W_{\text{latency}} \cdot \Delta t + W_{\text{error}} \cdot S_{5xx} + W_{\text{complexity}} \cdot C$).
    - **Elite Survivor Selection & Crossover Breeding**: Carries forward the top 30% elite edge-case payloads across successive generations while breeding novel offspring via gene crossover recombination.
    - **Automated Crash Triage & Disassembly**: Disassembles unhandled exceptions, SIGSEGV crashes, and timeouts into reproducible curl commands, proof-of-concept payloads, and root-cause remediations.
  * **Autonomous AI Tool Suite (`lib/ai/tools/fuzzing-patch-tools.ts`)**:
    - `patch_diff_analyze`: Ingests git diffs or source code versions, classifies vulnerability mechanisms, detects bypass vectors, and registers 1-day gaps into the Cyber Graph (`globalCyberGraph`).
    - `semantic_genetic_fuzz`: Deploys evolutionary protocol fuzzing campaigns with latency/crash-guided genetic feedback.
    - `fuzz_triage_crash`: Disassembles crash traces, unhandled exceptions, and latency anomalies into actionable reproduction harnesses.

### 19. Imagery Intelligence (IMINT) & Cyber-Physical Visual Reconnaissance Engine
* **What it does**: Bridges digital offensive operations with physical visual reality by extracting actionable technical network architecture, hardware models, credentials, and camera/RF geometry directly from photos, whiteboard diagrams, hardware faceplates, and satellite imagery.
* **How it works**:
  * **Whiteboard & Architecture Schematic Vectorizer (`imint_carve_architecture_diagram`)**: Parses whiteboard photos, hand-drawn network diagrams, or cloud schematics to extract subnets, firewalls, reverse proxies, and server nodes directly into RedHunter's active Cyber Graph and Network Topology Engine with Mermaid diagram rendering.
  * **Visual Secret & Credential Carving (`imint_analyze_visual_asset`)**: Scans visual text for exposed developer keys (AWS `AKIA...`, GitHub `ghp_...`, JWT tokens, SSH keys, database URIs, Wi-Fi PSK) and applies the mandatory 4-Step Verification Protocol.
  * **Hardware Chassis & Port Fingerprinting (`imint_hardware_fingerprint`)**: Analyzes physical server, switch, or firewall faceplates to classify port clusters (RJ45, SFP, DB9/RJ45 serial console, USB, terminal blocks) and identify default baud rates (9600 vs. 115200) and rollover pinouts for bootloader break injection.
  * **Surveillance Camera & SATCOM Dish Geometry (`imint_camera_blindspot_calc`, `imint_solve_rf_dish_geometry`)**: Calculates ground blind-spot corridors beneath surveillance camera mounting masts ($d_{\min} = h \cdot \tan(\theta - \phi/2)$) and solves parabolic dish focal length ($f = D^2/16c$) and GEO look angles.
  * **Steganography & Polyglot Carving**: Scans file bitstreams for payloads hidden past file terminators (JPEG `0xFFD9`, PNG `IEND`, GIF `0x3B`) and identifies embedded ZIP, GZIP, ELF, or PE polyglots with Shannon entropy analysis.
  * **Strict Privacy & Anti-Doxxing Guardrails**: Rejects unconsented human facial recognition, biometric identity surveillance, or personal tracking (CWE-359, GDPR Art. 9).
  * **Autonomous AI Tool Suite (`lib/ai/tools/imint-tool.ts`)**:
    - `imint_analyze_visual_asset`: Master visual asset analyzer with steganography and secret carving.
    - `imint_carve_architecture_diagram`: Whiteboard vectorizer syncing nodes into the Cyber Graph.
    - `imint_hardware_fingerprint`: Port geometry and serial console parameter resolver.
    - `imint_solve_rf_dish_geometry`: Parabolic dish focal length, f/D, and GEO look angle solver.
    - `imint_camera_blindspot_calc`: Surveillance camera FoV and ground blind-spot ray tracer.

---

## Interactive Live Computer Studio UI

RedHunter AI features an integrated multi-tab workspace designed for security operators:

```
┌───────────────────────────────────────┬───────────────────────────────────────────────────────┐
│              CHAT / PROMPT STREAM     │                LIVE COMPUTER STUDIO                   │
├───────────────────────────────────────┼───────────────────────────────────────────────────────┤
│ [Reconnaissance: Enumerate endpoints] │ [>_ Terminal] [</> Code] [🌐 Browser] [🖥️ Desktop]    │
│                                       ├───────────────────────────────────────────────────────┤
│ [✓] Found open port 3000 (Node.js)    │ kali@sandbox:~$ nmap -sV -p- 10.0.5.10                │
│ [✓] Discovered SQLi on /rest/products │ PORT     STATE SERVICE VERSION                        │
│ [→] Testing privilege escalation...   │ 3000/tcp open  http    Node.js Express framework      │
│                                       │                                                       │
│ Task progress: [ 2 / 4 ] (50%)        │ ----------------------------------------------------- │
│                                       │ PENTEST_REPORT.md | EXPLORER: 24 files                │
└───────────────────────────────────────┴───────────────────────────────────────────────────────┘
```

* **Terminal Tab**: Direct interactive shell access to the Kali Linux container.
* **Code Editor Tab**: Built-in syntax-highlighted IDE for inspecting scripts, wordlists, and PoC exploits.
* **Browser Tab**: Live dual-browser viewer streaming cloud CDP canvas replays or local operator sessions.
* **Desktop Tab**: Interactive noVNC stream of the Kali Linux XFCE desktop (`DISPLAY=:1`).
* **Remote Control Tab**: Physical hardware & network appliance management deck with WebSerial API pairing (COM/tty), automated auto-baud negotiation (115200–9600), 1-click bridge scripts (`start-redhunter.bat`, `.ps1`, `.sh`), and live serial execution.
* **Files & Forensic Viewer Tab**: Real-time explorer for browsing artifacts, `.pcap` files, and courtroom reports, coupled with the integrated **Forensic Image Deck** for lateral mirror inversion (`scaleX(-1)`), radial dewarping, and contrast filter presets (Negative, Hi-Contrast, OCR B&W).

---

## Getting Started & Installation

### System Prerequisites

* **Operating System**: Linux, macOS, or Windows (WSL2 recommended for Windows).
* **Node.js**: `v20.x` or higher.
* **Package Manager**: `pnpm` (`v9.x` or higher).
* **Docker Engine**: Installed and running (for the Kali Linux sandbox container).
* **Android SDK / ADB** *(optional)*: For physical USB mobile penetration testing.

---

### Environment Configuration

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SunnyThakur25/REDHUNTER-AI.git
   cd REDHUNTER-AI
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Open `.env.local` and populate the required API keys:
   ```env
   # LLM Model Providers
   OPENROUTER_API_KEY="sk-or-v1-..."
   # Or direct providers:
   ANTHROPIC_API_KEY="sk-ant-..."
   OPENAI_API_KEY="sk-..."
   GEMINI_API_KEY="..."

   # Real-Time Backend (Convex)
   NEXT_PUBLIC_CONVEX_URL="https://your-deployment.convex.cloud"

   # Authentication & Workspaces (WorkOS)
   WORKOS_API_KEY="sk_..."
   WORKOS_CLIENT_ID="client_..."
   WORKOS_COOKIE_PASSWORD="32-character-random-password-here"

   # Optional Sandbox / Cloud Services
   E2B_API_KEY="..."
   BROWSERBASE_API_KEY="..."
   TAVILY_API_KEY="..."
   ```

4. **Initialize Convex Backend:**
   ```bash
   pnpm dlx convex dev
   ```

---

### Running the Sandboxed Kali Linux Runtime

RedHunter AI executes security commands inside an isolated Docker container (`redhunter-sandbox`):

```bash
# Pull or build the Kali sandbox image
docker run -d --name redhunter-sandbox \
  -p 4200:4200 \
  -p 5901:5901 \
  -p 6080:6080 \
  -v redhunter-workspace:/home/user/workspace \
  pentest-copilot-main-kali:latest
```

---

### Launching the Development Server

Start the Next.js development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Comprehensive Codebase Architecture

```
redhunter-ai/
├── app/
│   ├── (chat)/                             # Primary chat interface & conversational runtime
│   │   └── page.tsx                        # Main landing & interactive prompt dashboard
│   ├── api/
│   │   ├── chat/route.ts                   # Core streaming endpoint & AI orchestration
│   │   ├── sandbox/                        # Sandbox proxy: files, terminal, desktop
│   │   └── browser-operator/               # Local Chrome/Edge CDP bridge endpoints
│   ├── components/
│   │   ├── chat.tsx                        # Chat state, message rendering, tool streaming
│   │   ├── ComputerSidebar.tsx             # Live Studio: Terminal, Code, Desktop, Browser
│   │   ├── TodoPanel.tsx                   # Live floating Task Progress Bar widget
│   │   ├── QueuedMessagesPanel.tsx         # Mid-flight message steering panel
│   │   ├── ReportsLibraryDialog.tsx        # Professional pentest report exporter
│   │   └── ScheduledScansDialog.tsx        # Continuous CART scheduling interface
├── lib/
│   ├── ai/
│   │   ├── tools/                          # Vercel AI SDK Tool Implementations
│   │   │   ├── run-terminal-cmd.ts         # Kali Linux CLI execution & anti-loop engine
│   │   │   ├── todo-write.ts               # Task progress planning & live synchronization
│   │   │   ├── mobile-touch.ts             # USB mobile touch & gesture injection
│   │   │   ├── mobile-screencap.ts         # AMOLED screen capture + uiautomator parser
│   │   │   └── mobile-app-control.ts       # App launch, package list, APK dump
│   │   ├── providers.ts                    # Multi-model routing (Claude, GPT-4o, Gemini, DeepSeek)
│   │   └── self-healing-loop.ts            # Self-correction & anti-stagnation guards
│   ├── browser/
│   │   ├── local-browser-operator.ts       # Manus-style local CDP browser bridge
│   │   └── stagehand-browser.ts            # Dedicated cloud browser automation
│   ├── mobile/
│   │   └── adb-resolver.ts                 # Dynamic cross-platform ADB binary resolver
│   ├── desktop/
│   │   ├── agent-desktop.ts                # 4-Engine Linux Virtual Desktop computer use
│   │   └── screen-capture.ts               # Shared memory mss/scrot frame grabber
│   ├── security/
│   │   ├── dag/                            # Super-Agent Orchestrator & DAG execution
│   │   ├── memory/                         # Tri-tier memory (Episodic, Semantic, Skills)
│   │   ├── stealth/                        # Tactical evasion & WAF detection
│   │   ├── hypothesis/                     # Polyglot logic and protocol fuzzers
│   │   └── reporting/                      # Deliverable generator (CVSS 3.1/4.0, Mermaid)
│   ├── mcp/
│   │   ├── mcp-client.ts                   # Anthropic Model Context Protocol client
│   │   └── mcp-server.ts                   # Standardized MCP server implementation
│   ├── integrations/
│   │   ├── composio-client.ts              # Composio enterprise connector (100+ apps)
│   │   └── pipedream-client.ts             # Pipedream webhook dispatch engine
│   └── system-prompt.ts                    # Autonomous agent prompt & methodology assembler
└── public/
    └── captures/                           # Lossless mobile screencaps & desktop traces
```

---

## Ethical Use & Responsible Disclosure

> **IMPORTANT LEGAL NOTICE**:
> 
> RedHunter AI is designed exclusively for authorized penetration testing, vulnerability assessment, red teaming exercises, and defensive security validation.
> 
> Testing against networks, web applications, cloud infrastructure, or mobile devices without prior explicit, written consent from the asset owner is illegal and unethical. The creators, contributors, and maintainers of RedHunter AI accept no liability and are not responsible for any misuse, damage, or legal consequences resulting from this software.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
