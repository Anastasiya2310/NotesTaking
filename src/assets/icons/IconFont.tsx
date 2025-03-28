import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

function IconFont(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd" 
        strokeWidth={0}
        d="M20.999 10.979H14.63a1 1 0 0 0-1 1v1.13a1 1 0 1 0 2 0v-.13h1.154v4.409h-.39a1 1 0 1 0 0 2h2.84a1 1 0 1 0 0-2h-.45v-4.41h1.214v.13a1 1 0 1 0 2 0v-1.13a1 1 0 0 0-1-1Z"  
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd" 
        strokeWidth={0}
        d="M12.185 17.388H10.29V6.61h4.415v1.25a1 1 0 0 0 2 0V5.61a1 1 0 0 0-1-1H2.999a1 1 0 0 0-1 1v2.25a1 1 0 0 0 2 0V6.61H8.29v10.78H6.517a1 1 0 1 0 0 2h5.668a1 1 0 1 0 0-2Z"  
        clipRule="evenodd"
      />
    </SvgIcon>
  )
}

export default IconFont;