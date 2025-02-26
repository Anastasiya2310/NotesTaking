import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

function IconArrLeft(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path 
        fill="currentColor" 
        stroke="currentColor"
        fillRule="evenodd" 
        d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" 
        clipRule="evenodd"
      />
    </SvgIcon>
  )
}

export default IconArrLeft;