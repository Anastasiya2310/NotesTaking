import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

function IconLock(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M16.424 9.448V7.3a4.552 4.552 0 0 0-4.551-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M15.683 21.25H8.042a3.792 3.792 0 0 1-3.792-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z"
        clipRule="evenOdd"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M11.862 14.203v2.22"
        clipRule="evenOdd"
      />
    </SvgIcon>
  )
}

export default IconLock;