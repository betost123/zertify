import * as React from "react";

interface Props {
  color?: string;
}

export const InfoIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_972_121)'>
      <path
        d='M14.4506 17.8524H12.9206V10.6677C12.9206 10.4605 12.7529 10.2927 12.5456 10.2927H10.8504C10.6433 10.2927 10.4754 10.4605 10.4754 10.6677C10.4754 10.875 10.6433 11.0427 10.8504 11.0427H12.1706V17.8524H10.25C10.0429 17.8524 9.875 18.0201 9.875 18.2274C9.875 18.4347 10.0429 18.6024 10.25 18.6024H14.4506C14.6579 18.6024 14.8256 18.4347 14.8256 18.2274C14.8256 18.0201 14.6579 17.8524 14.4506 17.8524Z'
        fill='white'
      />
      <path
        d='M12 7.875C12.6213 7.875 13.125 7.37132 13.125 6.75C13.125 6.12868 12.6213 5.625 12 5.625C11.3787 5.625 10.875 6.12868 10.875 6.75C10.875 7.37132 11.3787 7.875 12 7.875Z'
        fill='white'
      />
      <path
        d='M12 0C5.37259 0 0 5.37259 0 12C0 18.6274 5.37259 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0ZM12 23.25C5.79671 23.25 0.75 18.2033 0.75 12C0.75 5.79675 5.79671 0.75 12 0.75C18.2033 0.75 23.25 5.79675 23.25 12C23.25 18.2033 18.2033 23.25 12 23.25Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_972_121'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export const ChevronRightIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9 17L14.22 11.78L9 6.56'
      stroke='white'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

export const BuilidngIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_974_144)'>
      <path
        d='M22.3258 23.9999H1.67409C1.43399 23.9999 1.23932 23.8052 1.23932 23.5651V4.56507C1.23932 4.38725 1.34758 4.22747 1.51268 4.16139L11.8385 0.030828C11.9724 -0.0225403 12.1243 -0.00634505 12.2437 0.074414C12.3633 0.155282 12.4348 0.29017 12.4348 0.434515V8.70574L22.1645 4.81365C22.2984 4.76029 22.4503 4.77637 22.5697 4.85724C22.6893 4.93811 22.7608 5.073 22.7608 5.21734V23.5651C22.7606 23.8052 22.5659 23.9999 22.3258 23.9999ZM12.4347 23.1303H21.891V5.8595L12.4347 9.64224V23.1303V23.1303ZM2.10887 23.1303H11.5652V1.07667L2.10887 4.85941V23.1303ZM20.0794 21.9377C19.8393 21.9377 19.6447 21.7431 19.6447 21.503V17.631H17.5976V21.503C17.5976 21.7431 17.403 21.9377 17.1629 21.9377C16.9228 21.9377 16.7281 21.7431 16.7281 21.503V17.631H14.6811V21.503C14.6811 21.7431 14.4864 21.9377 14.2463 21.9377C14.0062 21.9377 13.8115 21.7431 13.8115 21.503V11.3584C13.8115 11.1183 14.0062 10.9236 14.2463 10.9236C14.4864 10.9236 14.6811 11.1183 14.6811 11.3584V13.0023H16.7281V9.98169C16.7281 9.74159 16.9228 9.54692 17.1629 9.54692C17.403 9.54692 17.5976 9.74159 17.5976 9.98169V13.0023H19.6447V8.93997C19.6447 8.69987 19.8393 8.5052 20.0794 8.5052C20.3195 8.5052 20.5142 8.69987 20.5142 8.93997V21.503C20.5142 21.7431 20.3195 21.9377 20.0794 21.9377ZM17.5976 16.7614H19.6447V13.8718H17.5976V16.7614ZM14.6811 16.7614H16.7281V13.8718H14.6811V16.7614ZM9.75358 21.9377C9.51348 21.9377 9.31881 21.7431 9.31881 21.503V17.6084H7.27179V21.503C7.27179 21.7431 7.07712 21.9377 6.83702 21.9377C6.59692 21.9377 6.40225 21.7431 6.40225 21.503V17.6084H4.35523V21.503C4.35523 21.7431 4.16056 21.9377 3.92045 21.9377C3.68035 21.9377 3.48568 21.7431 3.48568 21.503V6.70263C3.48568 6.46253 3.68035 6.26786 3.92045 6.26786C4.16056 6.26786 4.35523 6.46253 4.35523 6.70263V9.22062H6.40225V5.32603C6.40225 5.08593 6.59692 4.89126 6.83702 4.89126C7.07712 4.89126 7.27179 5.08593 7.27179 5.32603V9.22062H9.31881V4.28421C9.31881 4.04411 9.51348 3.84944 9.75358 3.84944C9.99369 3.84944 10.1884 4.04411 10.1884 4.28421V21.503C10.1884 21.7431 9.99369 21.9377 9.75358 21.9377ZM7.27179 16.7388H9.31881V13.8492H7.27179V16.7388ZM4.35523 16.7388H6.40225V13.8492H4.35523V16.7388ZM7.27179 12.9797H9.31881V10.0902H7.27179V12.9797ZM4.35523 12.9797H6.40225V10.0902H4.35523V12.9797Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_974_144'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export const CheckboxGreenIcon = () => (
  <svg
    width='21'
    height='16'
    viewBox='0 0 21 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_974_161)'>
      <path
        d='M19.0299 1.5143L7.62873 13.8848'
        stroke='#87FF5D'
        stroke-width='4'
      />
      <path
        d='M1.3705 6.01094L9.82851 13.9689'
        stroke='#87FF5D'
        stroke-width='4'
      />
    </g>
    <defs>
      <clipPath id='clip0_974_161'>
        <rect width='21' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export const CrossRedIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.99982 2.42322L14.2551 13.7954'
      stroke='#E96F6F'
      stroke-width='4'
    />
    <line
      x1='2.14855'
      y1='13.4489'
      x2='14.1486'
      y2='2.44891'
      stroke='#E96F6F'
      stroke-width='4'
    />
  </svg>
);

export const CrossWhiteIcon: React.FunctionComponent<Props> = ({
  color = "white",
}) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18.7116 6.29826C18.3271 5.91373 17.7059 5.91373 17.3214 6.29826L12.5 11.1098L7.67861 6.2884C7.29408 5.90387 6.67292 5.90387 6.2884 6.2884C5.90387 6.67292 5.90387 7.29408 6.2884 7.67861L11.1098 12.5L6.2884 17.3214C5.90387 17.7059 5.90387 18.3271 6.2884 18.7116C6.67292 19.0961 7.29408 19.0961 7.67861 18.7116L12.5 13.8902L17.3214 18.7116C17.7059 19.0961 18.3271 19.0961 18.7116 18.7116C19.0961 18.3271 19.0961 17.7059 18.7116 17.3214L13.8902 12.5L18.7116 7.67861C19.0863 7.30394 19.0863 6.67292 18.7116 6.29826Z'
      fill={color}
    />
  </svg>
);
