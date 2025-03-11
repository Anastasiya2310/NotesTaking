import { Typography, Box, TextField, Grid2 } from '@mui/material'
import IconSettings from '../../assets/icons/IconSettings';

function Header({ title }: {title: string}) {
  return (
    <>
      <Grid2 container sx={{ px: 4, py: 2, width: "100%", justifyContent: "space-between", alignItems: "center", maxHeight: "81px", borderBottom:(theme) => `1px solid ${theme.palette.neutral?.[200]}` }}>
        <Box component="header">
          <Typography variant="h1">{title}</Typography>
        </Box>
        <Box>
          <Grid2 container sx={{ alignItems: "center" }}>
            <TextField id="outlined-basic" label="Search by title, content or tags..." defaultValue="" variant="outlined" sx={{ 
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "300px"
              } 
            }} />
            <IconSettings sx={{ ml: 3, color:(theme) => theme.palette.neutral?.[500] }}/>
          </Grid2>
        </Box>
      </Grid2>
    </>
  )
}

export default Header;