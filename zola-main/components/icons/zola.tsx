import * as React from "react"
import type { SVGProps } from "react"

export function RedHunterAIIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <circle cx="40" cy="40" r="38" stroke="#B71C1C" strokeWidth="4" fill="#FF5252" />
      <rect x="25" y="30" width="30" height="20" rx="10" fill="#fff" stroke="#B71C1C" strokeWidth="2" />
      <ellipse cx="40" cy="40" rx="8" ry="10" fill="#B71C1C" />
      <ellipse cx="35" cy="38" rx="2" ry="3" fill="#fff" />
      <ellipse cx="45" cy="38" rx="2" ry="3" fill="#fff" />
      <rect x="32" y="50" width="16" height="4" rx="2" fill="#B71C1C" />
      <text x="40" y="75" textAnchor="middle" fontSize="10" fill="#B71C1C" fontWeight="bold">Red Hunter-AI</text>
    </svg>
  )
}
