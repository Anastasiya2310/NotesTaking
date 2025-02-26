import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

function IconMenu(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 16.762c-.695 0-1.262.565-1.262 1.26a1.262 1.262 0 0 0 2.523 0c0-.695-.566-1.26-1.26-1.26ZM12 10.74c-.695 0-1.262.565-1.262 1.261a1.262 1.262 0 0 0 2.523 0c0-.696-.566-1.26-1.26-1.26ZM12 7.24c.695 0 1.261-.565 1.261-1.261a1.262 1.262 0 0 0-2.523 0c0 .696.567 1.26 1.262 1.26Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  )
}

export default IconMenu;