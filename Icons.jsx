import React from 'react';

export const PayPalMark = () => (
  <svg
    className="pp-logo-mark"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <g clipPath="url(#pp-clip)">
      <path
        fill="#002991"
        d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"
      />
      <path
        fill="#60CDFF"
        d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"
      />
      <path
        fill="#008CFF"
        d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"
      />
    </g>
    <defs>
      <clipPath id="pp-clip">
        <path fill="#fff" d="M7.056 3h37.35v45H7.056z" />
      </clipPath>
    </defs>
  </svg>
);

export const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M22.0264 9.00293L12 19.0283L1.97461 9.00293L3.38867 7.58887L12 16.2002L20.6123 7.58887L22.0264 9.00293Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowRightIcon = ({ className, size = 16 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M19 12.0029L8.97363 22.0293L7.55957 20.6152L16.1719 12.0029L7.55957 3.3916L8.97363 1.97754L19 12.0029Z"
      fill="currentColor"
    />
  </svg>
);

export const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
