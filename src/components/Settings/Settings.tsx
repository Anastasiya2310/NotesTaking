import { useState } from "react";
import { Grid2, Box, Tab, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import { TabContext, TabList, TabPanel } from "@mui/lab";

function Settings() {
  const [tabValue, setTabValue] = useState("tab1");

  const handleTabChange = (e: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  }
  return (
    <Grid2 container sx={{ flexDirection: "column", alignItems: "flex-start", px: 4, width: "100%" }}>
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
                lg: 210,
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
                  key="01"
                  label="Color Theme" 
                  value="tab1" 
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
                  key="02"
                  label="Font Theme" 
                  value="tab2" 
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
                  key="03"
                  label="Change Password" 
                  value="tab3" 
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
          <TabPanel key="01" value="01" sx={{ px: 0 }}>
            <Typography variant="h1" component="h1">Font Theme</Typography>
            <Typography variant="body1" component="div">Choose your own theme</Typography>
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
        </Grid2>
      </TabContext>
    </Grid2>
  )
}

export default Settings;

