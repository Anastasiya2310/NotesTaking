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
type FontTheme = "sans-serif" | "serif" | "monospace";

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

  const { mode, toggleMode, persistMode, fontTheme, setFontTheme } = useThemeContext();
  const [selectedValue, setSelectedValue] = useState(options ? options[0] : "");

  useEffect(() => {
    if(settingKey === "colorTheme") {
      const themeLabel = Object.keys(labelToTheme).find(key => labelToTheme[key as ThemeLabels] === mode) as ThemeLabels | undefined;
      if (themeLabel) {
        setSelectedValue(themeLabel);
      }
    }
    if(settingKey === "fontTheme") {
      setSelectedValue(fontTheme);
    }
  }, [mode, fontTheme, labelToTheme, settingKey])

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value;
    setSelectedValue(newLabel);

    if(settingKey === "colorTheme") {
      const newMode = labelToTheme[newLabel as ThemeLabels];
      if (newMode) toggleMode(newMode);
    }
    if(settingKey === "fontTheme") {
      setFontTheme(newLabel as FontTheme)
    }
  };

  const handleApplyChanges = () => {
    console.log("Apply button clicked. settingKey =", settingKey);
    if (settingKey === "colorTheme") {
      const newMode = labelToTheme[selectedValue as ThemeLabels];
      if (newMode) persistMode(newMode);
    }
    if(settingKey === "fontTheme") {
      setFontTheme(selectedValue as FontTheme);
      localStorage.setItem("font-theme", selectedValue);
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
          name={`${settingKey}-radio-buttons-group`}
          sx={{ width: {
            lg: "530px",
          } }}
        >
          {options?.map((option, index) => (
            <FormControlLabel
              key={option} 
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: {lg: "350px"}, boxSizing: "border-box"}}>
                  <Box sx={{ width: "42px", height: "42px", p: 1, border: "1px solid", borderColor: "divider", borderRadius: 1.5, backgroundColor: "background.default" }}>{optionsIcons && optionsIcons[index]}</Box>
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
                borderColor: "divider", 
                borderRadius: 1.5, 
                backgroundColor: selectedValue === option ? "background.notesActive" : "transparent",
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