import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppHeader from "./AppHeader";
import { Divider } from "@mui/material";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState({
    productUpdates: true,
    securityUpdates: false,
  });
  const [phoneNotifications, setPhoneNotifications] = useState({
    email: true,
    securityUpdates: false,
  });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmailNotifications({
      ...emailNotifications,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePhoneChange = (event) => {
    setPhoneNotifications({
      ...phoneNotifications,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "currentPassword":
        setCurrentPassword(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", {
      emailNotifications,
      phoneNotifications,
      currentPassword,
      newPassword,
      confirmPassword,
    });
  };

  return (
    <>
      <AppHeader />
      <Typography
        variant="h4"
        sx={{ position: "relative", top: "130px", left: "0px" , paddingInlineStart:'30px' }}
      >
        Settings
      </Typography>
      <Box sx={{ padding: 2, marginBlockStart: "130px" }}>
        <Box
          sx={{
            mt: 2,
            border: "1px solid #c3c7cc63",
            paddingBlock: "30px",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #c3c7cc63",
              paddingInlineStart: "20px",
              paddingBlockEnd: "20px",
            }}
          >
            <Typography variant="h6">Notifications</Typography>
            <Typography variant="body2">Manage the notifications</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <Box sx={{ mt: 2, paddingInlineStart: "20px" }}>
              <Typography variant="h6">Email</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={emailNotifications.productUpdates}
                      onChange={handleEmailChange}
                      name="productUpdates"
                    />
                  }
                  label="Product updates"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={emailNotifications.securityUpdates}
                      onChange={handleEmailChange}
                      name="securityUpdates"
                    />
                  }
                  label="Security updates"
                />
              </Box>
            </Box>

            <Box sx={{ mt: 2, paddingInlineStart: "20px" }}>
              <Typography variant="h6">Phone</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={phoneNotifications.email}
                      onChange={handlePhoneChange}
                      name="email"
                    />
                  }
                  label="Email"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={phoneNotifications.securityUpdates}
                      onChange={handlePhoneChange}
                      name="securityUpdates"
                    />
                  }
                  label="Security updates"
                />
              </Box>
            </Box>
          </Box>
          <Divider sx={{backgroundColor:'#c3c7cc63', marginBlockStart:'10px'}}></Divider>
            <Button color="primary" variant="contained" sx={{position:'relative', top:'15px', left:'1060px', borderRadius:'10px',textTransform:'none'}}>Save changes</Button>
        </Box>

        <Box
          sx={{
            mt: 4,
            border: "1px solid #c3c7cc63",
            borderRadius: "20px",
            paddingBlockEnd: "30px",
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #c3c7cc63",
              paddingBlock: "20px",
              paddingInlineStart: "30px",
            }}
          >
            <Typography variant="h6">Password</Typography>
            <Typography variant="p" color="#aaa">Update Password</Typography>
          </Box>
          <Box sx={{ paddingInlineStart: "20px", paddingBlock:'20px' }}>
           
            <TextField
              label="Password"
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
              name="newPassword"
              sx={{ mt: 2, width: "70%", borderRadius:'20px' }}
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={handlePasswordChange}
              name="confirmPassword"
              sx={{ mt: 2, width: "70%" }}
              required
            />
          </Box>
          <Divider sx={{backgroundColor:'#c3c7cc63', marginBlockStart:'10px'}}></Divider>

          <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, textTransform:'none', top:'10px', left:'1100px', borderRadius:'10px' }}
          onClick={handleSaveChanges}
        >
          Update
        </Button>
        </Box>

        
      </Box>
    </>
  );
};

export default Settings;
