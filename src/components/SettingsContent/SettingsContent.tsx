import { useState, useEffect, useMemo } from "react";
import { 
  Box, 
  Typography, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl,
  Button
} from '@mui/material'
import { useThemeContext } from "../ThemeContext/ThemeContext";

type ThemeMode = "light" | "dark" | "system";
type ThemeLabels = "Light mode" | "Dark mode" | "System";

const SettingsContent = ({title, description, options, optionsIcons, optionDescription, form, settingKey }: 
  {title: string, 
  description?: string | null, 
  options?: string[], 
  optionsIcons?:React.ReactNode[], 
  optionDescription?:string[], 
  form?: React.ReactNode[],
  settingKey?: string
}) => {

  const labelToTheme = useMemo(() => ({
    "Light mode": "light" as ThemeMode,
    "Dark mode": "dark" as ThemeMode,
    "System": "system" as ThemeMode
  }), []);

  const [selectedValue, setSelectedValue] = useState(options ? options[0] : "");

  const { mode, toggleMode, persistMode } = useThemeContext();

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value as ThemeLabels;
    setSelectedValue(newLabel);
  
    const newMode = labelToTheme[newLabel];
    if (newMode) {
      toggleMode(newMode);
    }
  };

  useEffect(() => {
    const themeLabel = Object.keys(labelToTheme).find(key => labelToTheme[key as ThemeLabels] === mode) as ThemeLabels | undefined;
    if (themeLabel) {
      setSelectedValue(themeLabel);
    }
  }, [mode, labelToTheme]);

  const handleApplyChanges = () => {
    console.log("Apply button clicked. settingKey =", settingKey);
    if (settingKey === "colorTheme") {
      const newMode = labelToTheme[selectedValue as ThemeLabels];
      console.log("Applying theme:", newMode);
      if (newMode) {
        persistMode(newMode);
      }
    }
  };
  
  return (
    <Box sx={{ 
      mb: 3
    }}>
      <Typography variant="h3" component="h3">{title}</Typography>
      {description ? (
        <Typography variant="h5" component="h5" sx={{ my: 1 }}>{description}</Typography>
      ) : null}
    
      <FormControl fullWidth>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedValue}
          onChange={handleRadioChange}
          name="radio-buttons-group"
          sx={{ width: {
            lg: "530px",
          } }}
        >
          {options?.map((option, index) => (
            <FormControlLabel
              key={option} 
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: {lg: "350px"}, boxSizing: "border-box"}}>
                  <Box sx={{ width: "42px", height: "42px", p: 1, border: "1px solid", borderColor: "neutral.200", borderRadius: 1.5, backgroundColor: "white" }}>{optionsIcons && optionsIcons[index]}</Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body1">{option}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {optionDescription && optionDescription[index]}
                    </Typography>
                  </Box>
                </Box>
              } 
              value={option}
              control={<Radio />} 
              sx={{ 
                flexDirection: "row-reverse", 
                justifyContent: "space-between", 
                ml: 0,
                mb: 2,
                mr: 0, 
                p: 2, 
                border: "1px solid", 
                borderColor: "neutral.200", 
                borderRadius: 1.5, 
                backgroundColor: selectedValue === option ? "neutral.100" : "transparent",
                maxWidth: {
                  lg: "530px"
                }
              }}
            />
          ))}
        </RadioGroup>
        {options ? <Box sx={{ width: "530px", display: "flex", justifyContent: "flex-end" }}><Button variant="contained" onClick={handleApplyChanges}>Apply changes</Button></Box> : null}
      </FormControl>
    </Box>
  )
}

export default SettingsContent;