import { useState } from "react";
import { 
  Grid2, 
  Box
} from '@mui/material'
import { TabContext, TabPanel } from "@mui/lab";
import { 
  IconSun, 
  IconLock, 
  IconFont, 
  IconMoon, 
  IconSystemTheme,
  IconSansSerif, 
  IconSerif,
  IconMonospace 
} from "../../assets/icons"
import ChangePassForm from "../ChangePassForm/ChangePassForm";
import SettingsContent from "../SettingsContent/SettingsContent";
import SettingsSidebar from "../SettingsSidebar/SettingsSidebar";
import { ISettingsSidebar } from "../../interfaces/interfaces";

function Settings() {
  const [tabValue, setTabValue] = useState(0);

  const settingsMenu:ISettingsSidebar[] = [
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
      icon: <IconLock />,
      form: <ChangePassForm />
    }
  ];

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
            borderColor: "divider",
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: 241,
            }
          }}>
            <SettingsSidebar tabValue={tabValue} setTabValue={setTabValue} settingsMenu={settingsMenu} handleTabChange={handleTabChange} />
          </Box>
        </Grid2>

        <Grid2 size={{ xl: 9 }}>
          {settingsMenu.map((item, index) => (
            <TabPanel key={item.key} value={index} sx={{ px: 2.5 }}>
              <SettingsContent title={item.label} description={item.key.includes("changePass") ? null : `Choose your ${item.label.toLowerCase()}:`} options={item.options} optionsIcons={item.optionsIcons} optionDescription={item.optionDescription} settingKey="colorTheme" />
              {item.form ? item.form : null}
            </TabPanel>
          ))}
        </Grid2>
      </TabContext>
    </Grid2>
  )
}

export default Settings;

