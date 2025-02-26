import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

function IconCheckMark(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path 
        fill="currentColor"
        stroke="currentColor"
        fillRule="evenodd"
        strokeWidth={0}
        d="m15.993 10.222-4.618 4.618a.746.746 0 0 1-1.061 0l-2.309-2.309a.75.75 0 0 1 1.06-1.061l1.78 1.779 4.087-4.088a.75.75 0 1 1 1.061 1.061ZM12 2.5c-5.238 0-9.5 4.262-9.5 9.5 0 5.239 4.262 9.5 9.5 9.5s9.5-4.261 9.5-9.5c0-5.238-4.262-9.5-9.5-9.5Z" 
        clipRule="evenodd"
      />
    </SvgIcon>
  )
}

export default IconCheckMark;