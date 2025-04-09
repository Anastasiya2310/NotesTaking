import { Typography, Box, Grid2, Button } from '@mui/material'
import IconSettings from '../../assets/icons/IconSettings';
import Search from '../Search/Search'

function Header({ title, searchQuery, setSearchQuery, showSettings, setShowSettings }: {
  title: string, 
  searchQuery: string, 
  setSearchQuery: (query:string) => void,
  showSettings: boolean,
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
 }) {
  return (
    <>
      <Grid2 container sx={{ px: 4, py: 2, width: "100%", justifyContent: "space-between", alignItems: "center", maxHeight: "81px", borderBottom:(theme) => `1px solid ${theme.palette.divider}` }}>
        <Box component="header">
          <Typography variant="h1">{title}</Typography>
        </Box>
        <Box>
          <Grid2 container sx={{ alignItems: "center" }}>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Button onClick={() => setShowSettings(prev => !prev)} sx={{ ml: 3, p: 1, "&.MuiButton-text:hover": { backgroundColor: "transparent" }, "&:active": { backgroundColor: "transparent" } }}>
              <IconSettings sx={{ color:(theme) => theme.palette.neutral?.[500], "&:hover": { color: (theme) =>  theme.palette.neutral?.[800]} }}/>
            </Button>
          </Grid2>
        </Box>
      </Grid2>
    </>
  )
}

export default Header;