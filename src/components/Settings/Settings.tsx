import { useState } from "react";
import { Grid2, Box, Tab, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { 
  IconSun, 
  IconLock, 
  IconFont, 
  IconChevronR, 
  IconMoon, 
  IconSystemTheme,
  IconSansSerif, 
  IconSerif,
  IconMonospace 
} from "../../assets/icons"

function Settings() {
  const [tabValue, setTabValue] = useState(0);

  const settingsMenu = [
    { 
      key: "colorTheme", 
      label: "Color Theme", 
      icon: <IconSun />, 
      options: ["Light mode", "Dark mode", "System"],
      optionDescription: ["Pick a clean and classic light theme.", "Select a sleek and modern dark theme.", "Adapts to your device`s theme."],
      optionsIcons: [<IconSun />, <IconMoon />, <IconSystemTheme />]  
    },
    { 
      key: "fontTheme", 
      label: "Font Theme", 
      icon: <IconFont />, 
      options: ["Sans-serif", "Serif", "Monospace"],
      optionDescription: ["Clean and modern, easy to read.", "Classic and elegant for a timeless feel.", "Code-like, great for a technical vibe."],
      optionsIcons: [<IconSansSerif />, <IconSerif />, <IconMonospace />] 
    },
    { 
      key: "changePass", 
      label: "Change Password", 
      icon: <IconLock />
    }
  ];

  const SettingsContent = ({title, description, options, optionsIcons, optionDescription }: {title: string, description: string, options?: string[], optionsIcons?:React.ReactNode[], optionDescription?:string[] }) => {
    const [selectedValue, setSelectedValue] = useState(options ? options[0] : "");
    return (
      <>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h3" component="h3">{title}</Typography>
          <Typography variant="h5" component="h5" sx={{ my: 1 }}>{description}</Typography>
        </Box>
        <FormControl 
          sx={{ 
            width: {
              lg: "530px"
            } 
          }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={selectedValue}
            defaultValue={selectedValue}
            onChange={(event) => setSelectedValue(event.target.value)}
            name="radio-buttons-group"
          >
            {options?.map((option, index) => (
              <FormControlLabel 
                value={option} 
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ width: "24px", height: "24px", p: 1, border: "1px solid", borderColor: "neutral.200", borderRadius: 1.5, backgroundColor: "white" }}>{optionsIcons && optionsIcons[index]}</Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="body1">{option}</Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {optionDescription && optionDescription[index]}
                      </Typography>
                    </Box>
                  </Box>
                } 
                control={<Radio />} 
                sx={{ 
                  flexDirection: "row-reverse", 
                  justifyContent: "space-between", 
                  width: "100%", 
                  ml: 0, 
                  p: 2, 
                  border: "1px solid", 
                  borderColor: "neutral.200", 
                  borderRadius: 1.5, 
                  mb: 2,
                  backgroundColor: selectedValue === option ? "neutral.100" : "transparent"
                }}
              />
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
            <TabPanel key={item.key} value={index} sx={{ px: 2.5 }}>
              <SettingsContent title={item.label} description={item.key.includes("changePass") ? item.label : `Choose your ${item.label.toLowerCase()}:`} options={item.options} optionsIcons={item.optionsIcons} optionDescription={item.optionDescription} />
            </TabPanel>
          ))}
        </Grid2>
      </TabContext>
    </Grid2>
  )
}

export default Settings;

