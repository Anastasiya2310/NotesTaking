import { Box, MenuItem, FormControl, ListItemText, Select, SelectChangeEvent, Checkbox, Typography } from "@mui/material";

function MultipleSelectCheckmarks({ 
  tagsList, 
  selectedTags, 
  handleTagChange 
  }: { 
    tagsList: string[], 
    selectedTags: string[],
    handleTagChange: (event: SelectChangeEvent<typeof selectedTags>) => void; 
  }) {
  return (
    <div>
      <FormControl sx={{ m: 0, width: 300, p: 0 }}>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedTags}
          onChange={handleTagChange}
          displayEmpty
          renderValue={(selected) => {
            if(selected.length === 0) {
              return <Box sx={{ color: "neutral.300" }}><Typography variant="h5">Select tags...</Typography></Box>
            }
            return <Typography variant="h5">{selected.join(", ")}</Typography>
          }}
          sx={{
            p: 0,
            ".MuiSelect-select": { p: 0, ml: 0 },
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" }
          }}
        >
          <MenuItem value="" disabled>
            Select tags...
          </MenuItem>
          {tagsList.map((tag) => (
            <MenuItem key={tag} value={tag}>
              <Checkbox checked={selectedTags.includes(tag)} />
              <ListItemText primary={tag} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelectCheckmarks;