import type { SVGProps } from "react";

const common: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 48 48",
  fill: "none",
  strokeWidth: 1.3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconFactory(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...common} {...props}>
      <path d="M6 40V20l9 6v-6l9 6v-6l9 6V12h9v28H6Z" stroke="currentColor" />
      <path d="M6 40h36" stroke="currentColor" />
      <path d="M14 40v-8M23 40v-8M32 40v-8" stroke="currentColor" />
    </svg>
  );
}

export function IconGauge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...common} {...props}>
      <path
        d="M8 30a16 16 0 1 1 32 0"
        stroke="currentColor"
      />
      <path d="M24 30 32 18" stroke="currentColor" />
      <circle cx="24" cy="30" r="2.2" stroke="currentColor" />
      <path d="M4 38h40" stroke="currentColor" opacity={0.5} />
    </svg>
  );
}

export function IconBrandTag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...common} {...props}>
      <path
        d="M25 8H14L8 14v11l19 19 17-17L25 8Z"
        stroke="currentColor"
      />
      <circle cx="18" cy="18" r="2.4" stroke="currentColor" />
    </svg>
  );
}

export function IconCustomer(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...common} {...props}>
      <circle cx="24" cy="16" r="7" stroke="currentColor" />
      <path d="M10 40c1.5-9 7-13 14-13s12.5 4 14 13" stroke="currentColor" />
    </svg>
  );
}
