import { useState } from "react";
import { Grid2, Box, Tab, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import { TabContext, TabList, TabPanel } from "@mui/lab";

function Settings() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (e: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  }
  return (
    <Grid2 container sx={{ flexDirection: "row", alignItems: "flex-start", width: "100%" }}>
      <TabContext value={tabValue}>
        <Grid2 size={{ xl: 3 }}>
          <Box sx={{ 
            height: `calc(100vh - 90px)`, 
            overflow: "scroll", 
            flexDirection: "column", 
            pr: 2, 
            pt: 2.5, 
            textAlign: "left", 
            borderRight: 1, 
            borderColor: "neutral.200",
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: 241,
            }
          }}>
            <TabList 
              variant="scrollable"
              orientation="vertical"
              onChange={handleTabChange}
              sx={{ 
                height: `calc(100vh - 90px)`,
                textAlign: "left",
                "& .MuiTabs-indicator": {
                  display: "none",
                }, 
              }}
            >
              <Tab 
                label="Color Theme" 
                value={0} 
                sx={{ 
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "flex-start",
                  p: 1,
                  borderBottom: 1, 
                  borderColor: "neutral.200",
                  "&.Mui-selected": {
                    borderRadius: 0.75,
                    backgroundColor: "neutral.100",
                    color: "neutral.900",
                    borderBottom: 1,
                    borderColor: "transparent",
                  },
                }}
              />
              <Tab 
                label="Font Theme" 
                value={1} 
                sx={{ 
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "flex-start",
                  p: 1,
                  borderBottom: 1, 
                  borderColor: "neutral.200",
                  "&.Mui-selected": {
                    borderRadius: 0.75,
                    backgroundColor: "neutral.100",
                    color: "neutral.900",
                    borderBottom: 1,
                    borderColor: "transparent",
                  },
                }}
              />
              <Tab 
                label="Change Password" 
                value={2} 
                sx={{ 
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "flex-start",
                  p: 1,
                  borderBottom: 1, 
                  borderColor: "neutral.200",
                  "&.Mui-selected": {
                    borderRadius: 0.75,
                    backgroundColor: "neutral.100",
                    color: "neutral.900",
                    borderBottom: 1,
                    borderColor: "transparent",
                  },
                }}
              />
            </TabList>
          </Box>
        </Grid2>

        <Grid2 size={{ xl: 9 }}>
          <TabPanel value={0} sx={{ px: 0 }}>
            <Typography variant="h1" component="h1">Color Theme</Typography>
            <Typography variant="body1" component="div">Choose your color theme:</Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Light mode"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Light mode" control={<Radio />} label="Light mode" />
                <FormControlLabel value="Dark mode" control={<Radio />} label="Dark mode" />
                <FormControlLabel value="System" control={<Radio />} label="System" />
              </RadioGroup>
            </FormControl>
          </TabPanel>
          <TabPanel value={1} sx={{ px: 0 }}>
            <Typography variant="h1" component="h1">Font Theme</Typography>
            <Typography variant="body1" component="div">Choose your font theme:</Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Sans-serif"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Sans-serif" control={<Radio />} label="Sans-serif" />
                <FormControlLabel value="Serif" control={<Radio />} label="Serif" />
                <FormControlLabel value="Monospace" control={<Radio />} label="Monospace" />
              </RadioGroup>
            </FormControl>
          </TabPanel>
          <TabPanel value={2} sx={{ px: 0 }}>
            <Typography variant="h1" component="h1">Change Password</Typography>
            <Typography variant="body1" component="div">Choose your Password</Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Pass1"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Pass1" control={<Radio />} label="Pass1" />
                <FormControlLabel value="Pass2" control={<Radio />} label="Pass2" />
                <FormControlLabel value="PAss3" control={<Radio />} label="Pass3" />
              </RadioGroup>
            </FormControl>
          </TabPanel>
        </Grid2>
      </TabContext>
    </Grid2>
  )
}

export default Settings;

