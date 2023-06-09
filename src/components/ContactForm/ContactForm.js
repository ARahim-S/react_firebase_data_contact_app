import {
  Box,
  Grid,
  Stack,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const ContactForm = ({ info, setInfo, handleFormSubmit }) => {
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

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <Grid
      className="main-grid"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <h3 className="main-header">Contact App</h3>
      <Grid item xs="auto">
        <Box
          sx={{
            border: "2px solid black",
            padding: "2rem",
            borderRadius: "1rem",
          }}
        >
          <p className="second-header">Add Contact</p>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={3} direction={"column"}>
              <TextField
                required
                name="username"
                label="Required"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="Name"
                value={info.username}
                onChange={handleChange}
              />
              <TextField
                required
                name="phoneNumber"
                label="Required"
                defaultValue="457-854-785"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneEnabledIcon />
                    </InputAdornment>
                  ),
                }}
                value={info.phoneNumber}
                placeholder="458-578-62-45"
                onChange={handleChange}
              />
              <FormControl>
                <InputLabel>Gender</InputLabel>
                <Select
                  name={"gender"}
                  label="Select"
                  onChange={handleChange}
                  required
                  value={info.gender}
                >
                  {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
