import { useState } from "react";
import { Grid2, Box, Tab, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { IconSun, IconLock, IconFont, IconChevronR } from "../../assets/icons"

function Settings() {
  const [tabValue, setTabValue] = useState(0);
  const settingsMenu = [
    { key: "colorTheme", label: "Color Theme", icon: <IconSun />, options: ["Light mode", "Dark mode", "System"] },
    { key: "fontTheme", label: "Font Theme", icon: <IconFont />, options: ["Sans-serif", "Serif", "Monospace"] },
    { key: "changePass", label: "Change Password", icon: <IconLock />, options: ["Pass1", "Pass2", "Pass3"] },
  ];

  const SettingsContent = ({title, description, options}: {title: string, description: string, options: string[]}) => {
    return (
      <>
        <Typography variant="h1" component="h1">{title}</Typography>
        <Typography variant="body1" component="div">{description}</Typography>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={options[0]}
            name="radio-buttons-group"
          >
            {options.map((option) => (
              <FormControlLabel value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </FormControl>
      </>
    )
  }

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
              {settingsMenu.map((item, index) => (
                <Tab 
                  key={item.key}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: 1 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {item.icon}
                        {item.label}
                      </Box>
                      {tabValue === index ? <IconChevronR /> : null}
                    </Box>
                  }
                  value={index} 
                  sx={{ 
                    textTransform: "capitalize",
                    display: "flex",
                    alignItems: "flex-start",
                    p: 1,
                    "&.Mui-selected": {
                      borderRadius: 0.75,
                      backgroundColor: "neutral.100",
                      color: "neutral.900",
                    },
                  }}
                />
              ))}
            </TabList>
          </Box>
        </Grid2>

        <Grid2 size={{ xl: 9 }}>
          {settingsMenu.map((item, index) => (
            <TabPanel key={item.key} value={index} sx={{ px: 0 }}>
              <SettingsContent title={item.label} description={item.key.includes("changePass") ? item.label : `Choose your ${item.label}`} options={item.options} />
            </TabPanel>
          ))}
        </Grid2>
      </TabContext>
    </Grid2>
  )
}

export default Settings;

