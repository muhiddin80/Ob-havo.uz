const Wind = ({ height, width }: { height?: string; width?: string }) => {
  return (
    <svg
      width={width || "80"}
      height={height || "80"}
      viewBox="0 0 263 221"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M119.655 130.795C119.655 130.795 184.565 134.303 213.354 125.943C242.143 117.583 242.102 74.1972 213.354 63.5022C184.606 52.8072 174.781 91.0351 174.781 91.0351"
        stroke="#D0D0D0"
        stroke-width="16"
        stroke-linecap="round"
      />
      <path
        d="M8.20249 56.0927C8.20249 56.0927 69.632 77.3567 99.6101 77.2558C129.588 77.155 155.142 51.273 130.456 33.0683C105.769 14.8636 72.1533 33.068 72.1533 33.068"
        stroke="#D0D0D0"
        stroke-width="16"
        stroke-linecap="round"
      />
      <path
        d="M8.00049 177.656C8.00049 177.656 105.57 168.841 148.583 177.656C191.596 186.471 177.899 211.756 157.514 212.917C137.129 214.078 118.314 200.679 118.314 200.679"
        stroke="#D0D0D0"
        stroke-width="16"
        stroke-linecap="round"
      />
      <path
        d="M215.668 177.591H254.46"
        stroke="#D0D0D0"
        stroke-width="16"
        stroke-linecap="round"
      />
      <path
        d="M38.6895 131.373H77.4815"
        stroke="#D0D0D0"
        stroke-width="16"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { Wind };
