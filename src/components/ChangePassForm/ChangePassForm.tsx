import { useState } from "react"
import { 
  Box,
  Button, 
  OutlinedInput, 
  InputLabel,
  InputAdornment,
  IconButton
} from '@mui/material'
import { 
  IconShowPass,
  IconHidePass
} from "../../assets/icons"

function ChangePassForm () {
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean}>({
    oldPass: false,
    newPass: false,
    confirmNewPass: false,
  });

  const handleClickShowPassword = (field: string) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{ 
        "& > :not(style)": {
          width: "530px"
        },
        display: "flex",
        flexDitection: "column",
        flexWrap: "wrap",
        gap: 2
      }}
      noValidate
      autoComplete="off"
    >
      <Box 
        sx={{ 
          "& > :not(style)": {
            width: {
              lg: "530px"
            },
          },
          display: "flex",
          flexDitection: "column",
          flexWrap: "wrap",
          gap: 2
        }}
      >
        <>
          <InputLabel htmlFor="old-pass">Old Password</InputLabel>
          <OutlinedInput
            id="old-pass"
            type={showPassword.oldPass ? "text" : "password"}
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword.oldPass ? "hide the password" : "display the password"
                  }
                  onClick={() => handleClickShowPassword("oldPass")}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword.oldPass ? <IconHidePass /> : <IconShowPass />}
                </IconButton>
              </InputAdornment>
            }
          />
        </>
        <>
          <InputLabel htmlFor="new-pass">New Password</InputLabel>
          <OutlinedInput
            id="new-pass"
            type={showPassword.newPass ? "text" : "password"}
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword.newPass ? "hide the password" : "display the password"
                  }
                  onClick={() => handleClickShowPassword("newPass")}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword.newPass ? <IconHidePass /> : <IconShowPass />}
                </IconButton>
              </InputAdornment>
            }
          />
        </>
        <>
          <InputLabel htmlFor="confirm-new-pass">Confirm New Password</InputLabel>
          <OutlinedInput
            id="confirm-new-pass"
            type={showPassword.confirmNewPass ? "text" : "password"}
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword.confirmNewPass ? "hide the password" : "display the password"
                  }
                  onClick={() => handleClickShowPassword("confirmNewPass")}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword.confirmNewPass ? <IconHidePass /> : <IconShowPass />}
                </IconButton>
              </InputAdornment>
            }
          />
        </>
      </Box>
      
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Button 
          variant="contained" 
          sx={{ width: "auto" }}>
            Save Password
        </Button>
      </Box>
    </Box>
  )
}

export default ChangePassForm;