import { Grid2, Box, Tab, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import { TabContext, TabList, TabPanel } from "@mui/lab";

function Settings() {

  return (
    <Grid2 size={{ xs: 12, lg: 9 }} sx={{ flexDirection: "column", alignItems: "flex-start" }}>
      <TabContext value="tab1">
        <Grid2 container spacing={3} sx={{ alignItems: "flex-start", px: 4, width: "100%" }}>
          <Grid2 size={{ lg: 3 }}>
            <Box sx={{ height: `calc(100vh - 90px)`, overflow: "scroll", flexDirection: "column", pr: 2, pt: 2.5, textAlign: "left", borderRight: 1, borderColor: "neutral.200"}}>
              <TabList 
                variant="scrollable"
                orientation="vertical"
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

          <Grid2 size={{ lg: 9 }}>
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
        </Grid2>
      </TabContext>
    </Grid2>
  )
}

export default Settings;

