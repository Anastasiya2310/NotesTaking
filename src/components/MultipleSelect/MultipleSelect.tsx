import { useState } from "react"
import { Box, MenuItem, FormControl, ListItemText, Select, SelectChangeEvent, Checkbox, Typography } from "@mui/material";
import { INote } from "../../interfaces/interfaces";

function MultipleSelectCheckmarks({ tagsList, note }: { tagsList: string[], note: INote }) {
  const [selectedTags, setSelectedTags] = useState<string[]>(note.tags || []);

  const tags = tagsList;

  const handleChange = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: 300, p: 0 }}>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedTags}
          onChange={handleChange}
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
          {tags.map((tag) => (
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