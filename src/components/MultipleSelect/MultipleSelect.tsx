import {
  Box,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  SelectChangeEvent,
  Checkbox,
  Typography,
} from "@mui/material";

function MultipleSelectCheckmarks({
  tagsList,
  selectedTags,
  handleTagChange,
}: {
  tagsList: string[];
  selectedTags: string[];
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
            if (selected.length === 0) {
              return (
                <Box sx={{ color: "background.notesActive", p: 0 }}>
                  <Typography variant="h5">Select tags...</Typography>
                </Box>
              );
            }
            return <Typography variant="h5">{selected.join(", ")}</Typography>;
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "background.paper", // optional background color
              },
            },
            MenuListProps: {
              sx: {
                pt: 0, // remove top padding
                pb: 0, // remove bottom padding
              },
            },
          }}
          sx={{
            color: "text.primary",
            p: 0,
            m: 0,
            ".MuiSelect-select": { p: 0, ml: 0 },
            "& .MuiOutlinedInput-notchedOutline": { border: "none", p: 0 },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none", p: 0 },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none", p: 0 },
          }}
        >
          <MenuItem value="" disabled sx={{
            backgroundColor: "background.notesActive",
            color: "text.primary",
          }}>
            Select tags...
          </MenuItem>
          {tagsList.map((tag) => (
            <MenuItem
              key={tag}
              value={tag}
              sx={{ 
                p: 0, 
                m: 0, 
                backgroundColor: "background.notesActive" ,
                "&.MuiMenuItem-root.Mui-selected, &.Mui-selected:hover" : {
                  backgroundColor: "background.notesActive",
                  color: "text.primary",
                },
                "&:hover" : {
                  backgroundColor: "divider",
                }

              }}
            >
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
