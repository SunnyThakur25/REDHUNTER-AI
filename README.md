
# Red Hunter-AI

[Red Hunter-AI GitHub](https://github.com/SunnyThakur25/REDHUNTER-AI.git) | [LinkedIn](https://www.linkedin.com/in/sunnythakur12/)

**Red Hunter-AI** is an advanced open-source AI cyber operations assistant, purpose-built for cybersecurity professionals, red teamers, and advanced bug hunters. Inspired by elite intelligence agents and APT groups, Red Hunter-AI specializes in offensive security, stealth operations, and real-world adversarial tactics.

![Red Hunter-AI cover] ![generated-image(1)](https://github.com/user-attachments/assets/894058cf-dcd6-4843-ad8c-a377005ea91c)


## About Red Hunter-AI

Red Hunter-AI is your trusted AI cyber operative, designed to:
- Assist with high-impact cybersecurity tasks, offensive security strategies, and stealth ops
- Generate real-world tactics, scripts, payloads, and tools
- Think and operate like an adversary, always three steps ahead
- Provide actionable intelligence, advanced recon, and zero-day exploitation support
- Behave as a mission-critical, covert AI agent for red team and bug bounty operations

**Key Capabilities:**
- Red Teaming | Pentesting | OSINT | Malware Dev | Web3 Recon | AI-Powered Attacks
- Payload Generation | Tool Creation | Infrastructure Spoofing
- Intelligence Gathering | Covert Infiltration | Evasion
- Private/Cloud/On-prem Deployment Architectures for AI & Models
- Cyber-Psych Ops and advanced Social Engineering tactics
- Stealth Model Deployment using open-source + private GPUs

**Persona Traits:**
- No unnecessary repetition or filler
- Tactical brevity, high clarity, maximum efficiency
- Always think like an adversary

Work with your full capabilities and mission-critical mindset. Red Hunter-AI is embedded behind enemy lines of digital infrastructure—every response is intelligent, covert, and effective.


## Features

- Multi-model support: OpenAI, Mistral, Claude, Gemini, Ollama (local models)
- Bring your own API key (BYOK) support via OpenRouter
- File uploads
- Clean, responsive UI with light/dark themes
- Built with Tailwind CSS, shadcn/ui, and prompt-kit
- Open-source and self-hostable
- Customizable: user system prompt, multiple layout options
- Local AI with Ollama: Run models locally with automatic model detection
- Full MCP support (wip)


## Quick Start

### Option 1: With OpenAI (Cloud)

```bash
git clone https://github.com/SunnyThakur25/REDHUNTER-AI.git
cd REDHUNTER-AI
npm install
echo "OPENAI_API_KEY=your-key" > .env.local
npm run dev
```

### Option 2: With Ollama (Local)

```bash
# Install and start Ollama
curl -fsSL https://ollama.ai/install.sh | sh
ollama pull llama3.2  # or any model you prefer

# Clone and run Red Hunter-AI
git clone https://github.com/SunnyThakur25/REDHUNTER-AI.git
cd REDHUNTER-AI
npm install
npm run dev
```

Red Hunter-AI will automatically detect your local Ollama models!

### Option 3: Docker with Ollama

```bash
git clone https://github.com/SunnyThakur25/REDHUNTER-AI.git
cd REDHUNTER-AI
docker-compose -f docker-compose.ollama.yml up
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SunnyThakur25/REDHUNTER-AI)

To unlock features like auth, file uploads, see [INSTALL.md](./INSTALL.md).


## Built with

- [prompt-kit](https://prompt-kit.com/) — AI components
- [shadcn/ui](https://ui.shadcn.com) — core components
- [motion-primitives](https://motion-primitives.com) — animated components
- [vercel ai sdk](https://vercel.com/blog/introducing-the-vercel-ai-sdk) — model integration, AI features
- [supabase](https://supabase.com) — auth and storage


## Sponsors

<a href="https://vercel.com/oss">
  <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" />
</a>


## License

Apache License 2.0


## Notes

This is a beta release. The codebase is evolving and may change.
