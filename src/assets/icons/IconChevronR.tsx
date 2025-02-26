import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

function IconChevronR(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd" 
        strokeWidth={0}
        d="M9.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L12.94 12 9.47 8.53a.75.75 0 0 1 0-1.06Z"  
        clipRule="evenodd"
      />
    </SvgIcon>
  )
}

export default IconChevronR;