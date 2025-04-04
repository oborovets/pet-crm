import SvgIcon from '../svg-icon/svg-icon';

export default function Logo() {
  return (
    <SvgIcon viewBox="0 0 490 570">
      <path
        d="M245 70 C 350 70, 400 250, 245 400 C 90 250, 140 70, 245 70 Z"
        stroke="#002A44"
        strokeWidth="20"
        fill="none"
      />
      <polygon points="245,10 270,60 220,60" fill="#002A44" />

      <circle cx="245" cy="220" r="40" fill="#2ECC71" />
      <ellipse cx="245" cy="300" rx="70" ry="50" fill="#2ECC71" />

      <text
        x="300"
        y="330"
        fontFamily="Arial, sans-serif"
        fontSize="120"
        fill="#002A44"
        fontWeight="bold"
      >
        CRM
      </text>
    </SvgIcon>
  );
}
