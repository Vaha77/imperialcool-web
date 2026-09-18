import type { SVGProps } from "react";

const common: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 48 48",
  fill: "none",
  strokeWidth: 1.3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/** Wall-mounted air cooler / evaporator: housing with front vents and airflow. */
export function IconEvaporator(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...common} {...props}>
      <rect x="7" y="10" width="34" height="14" rx="3" stroke="currentColor" />
      <path d="M12 15h24M12 19h24" stroke="currentColor" opacity={0.7} />
      <path d="M13 28c3 4 3 8 0 12M24 28c3 4 3 8 0 12M35 28c3 4 3 8 0 12" stroke="currentColor" />
    </svg>
  );
}

/** Condenser: finned coil block. */
export function IconCondenser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...common} {...props}>
      <rect x="8" y="10" width="32" height="26" rx="2" stroke="currentColor" />
      {Array.from({ length: 7 }).map((_, i) => (
        <path key={i} d={`M${13 + i * 3.6} 10v26`} stroke="currentColor" opacity={0.7} />
      ))}
      <path d="M8 40h32" stroke="currentColor" />
    </svg>
  );
}

/** Hermetic compressor: domed cylindrical body on a base, with suction and discharge lines. */
export function IconCompressor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...common} {...props}>
      <path
        d="M14 34V20a10 10 0 0 1 20 0v14"
        stroke="currentColor"
      />
      <path d="M11 34h26v6H11z" stroke="currentColor" />
      <path d="M34 17h6M40 17v6" stroke="currentColor" />
      <path d="M10 22H6" stroke="currentColor" />
      <path d="M17 40v3M31 40v3" stroke="currentColor" opacity={0.6} />
    </svg>
  );
}

/** Systems & components: connected nodes. */
export function IconSystems(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...common} {...props}>
      <circle cx="24" cy="24" r="6" stroke="currentColor" />
      <path
        d="M24 8v6M24 34v6M8 24h6M34 24h6M12.5 12.5l4.2 4.2M31.3 31.3l4.2 4.2M35.5 12.5l-4.2 4.2M16.7 31.3l-4.2 4.2"
        stroke="currentColor"
      />
    </svg>
  );
}
