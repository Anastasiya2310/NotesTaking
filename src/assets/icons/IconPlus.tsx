import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

function IconPlus(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 5a.75.75 0 0 1 .75.75V11H18a.75.75 0 0 1 0 1.5h-5.25v5.25a.75.75 0 0 1-1.5 0V12.5H6A.75.75 0 0 1 6 11h5.25V5.75A.75.75 0 0 1 12 5Z"
      />
    </SvgIcon>
  )
}

export default IconPlus;