import { useState } from "react";
import { 
  Box, 
  Typography, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl,
  Button
} from '@mui/material'

const SettingsContent = ({title, description, options, optionsIcons, optionDescription, form }: {title: string, description?: string | null, options?: string[], optionsIcons?:React.ReactNode[], optionDescription?:string[], form?: React.ReactNode[]}) => {
  const [selectedValue, setSelectedValue] = useState(options ? options[0] : "");
  return (
    <>
      <Box sx={{ 
        mb: 3
      }}>
        <Typography variant="h3" component="h3">{title}</Typography>
        {description ? (
          <Typography variant="h5" component="h5" sx={{ my: 1 }}>{description}</Typography>
        ) : null}
      </Box>
      <FormControl fullWidth>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedValue}
          defaultValue={selectedValue}
          onChange={(event) => setSelectedValue(event.target.value)}
          name="radio-buttons-group"
          sx={{ width: {
            lg: "530px",
          } }}
        >
          {options?.map((option, index) => (
            <>
              <FormControlLabel 
                value={option} 
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: {lg: "350px"}, boxSizing:"border-box" }}>
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
            </>
          ))}
        </RadioGroup>
        {options ? <Box sx={{ width: "530px", display: "flex", justifyContent: "flex-end" }}><Button variant="contained">Apply changes</Button></Box> : null}
      </FormControl>
    </>
  )
}

export default SettingsContent;