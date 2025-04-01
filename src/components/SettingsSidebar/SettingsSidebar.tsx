import { Box, Tab } from '@mui/material'
import { TabList } from "@mui/lab";
import { IconChevronR } from "../../assets/icons"
import { ISettingsSidebar } from "../../interfaces/interfaces";

function SettingsSidebar({ tabValue, setTabValue, settingsMenu, handleTabChange }: 
  { 
    tabValue: number, 
    setTabValue: (value: number) => void, 
    settingsMenu: ISettingsSidebar[], 
    handleTabChange: (e: React.SyntheticEvent, newValue: number) => void 
  }) {

  return (
    <>
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
            value={index} 
            onClick={() => setTabValue(index)}
            label={
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {item.icon}
                  {item.label}
                </Box>
                {tabValue === index ? <IconChevronR /> : null}
              </Box>
            }
            sx={{ 
              textTransform: "capitalize",
              display: "flex",
              alignItems: "flex-start",
              p: 1,
              "&.Mui-selected": {
                color: "neutral.900",
              },
              ...(tabValue === index && {
                borderRadius: 0.75,
                backgroundColor: "neutral.100",
              }),
            }}
          />
        ))}
      </TabList>
    </> 
  )
}

export default SettingsSidebar;

