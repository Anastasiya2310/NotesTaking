import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

function IconCross(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 6 12 12M18 6 6 18"  
      />
    </SvgIcon>
  )
}

export default IconCross;