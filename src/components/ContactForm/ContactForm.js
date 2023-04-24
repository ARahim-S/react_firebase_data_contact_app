import {
  Box,
  Grid,
  Stack,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const ContactForm = () => {
  const genders = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];
  return (
    <Grid
      className="main-grid"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs="auto">
        <h1 className="main-header">Contact App</h1>
      </Grid>
      <Grid item xs="auto">
        <h3 className="second-header">Add Contact</h3>
      </Grid>
      <Grid item xs="auto">
        <Box
          sx={{
            border: "2px solid black",
            padding: "4rem",
            borderRadius: "1rem",
          }}
        >
          <form>
            <Stack spacing={3} direction={"column"}>
              <TextField
                required
                variant="outlined"
                name="username"
                label="Required"
                defaultValue="Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                required
                label="Required"
                defaultValue="457-854-785"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneEnabledIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField select label="Select" defaultValue="Gender">
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button variant="contained" type="submit" value="submit">
                Add Contact
              </Button>
            </Stack>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
