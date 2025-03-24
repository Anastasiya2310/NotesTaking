import { TextField } from '@mui/material'

const Search = ({ searchQuery, setSearchQuery }: { searchQuery:string,  setSearchQuery: (query:string) => void}) => {
  return (
    <TextField 
      id="outlined-basic" 
      label="Search by title, content or tags..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      defaultValue="" 
      variant="outlined" 
      sx={{ 
      width: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "300px"
      } 
    }} />
  )
} 

export default Search;