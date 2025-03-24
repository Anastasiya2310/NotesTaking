import { Typography, Box, Grid2 } from '@mui/material'
import IconSettings from '../../assets/icons/IconSettings';
import Search from '../Search/Search'

function Header({ title, searchQuery, setSearchQuery }: {title: string, searchQuery: string, setSearchQuery: (query:string) => void }) {
  return (
    <>
      <Grid2 container sx={{ px: 4, py: 2, width: "100%", justifyContent: "space-between", alignItems: "center", maxHeight: "81px", borderBottom:(theme) => `1px solid ${theme.palette.neutral?.[200]}` }}>
        <Box component="header">
          <Typography variant="h1">{title}</Typography>
        </Box>
        <Box>
          <Grid2 container sx={{ alignItems: "center" }}>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <IconSettings sx={{ ml: 3, color:(theme) => theme.palette.neutral?.[500] }}/>
          </Grid2>
        </Box>
      </Grid2>
    </>
  )
}

export default Header;