import { useFetch } from "../../utils/functions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Contacts = () => {
  const { isLoading, contactList } = useFetch();
  console.log(isLoading, contactList);
  return (
    <TableContainer
      sx={{
        backgroundColor: "bisque",
        border: "2px solid black",
        width: "100%",
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                <h3>Loading</h3>
              </TableCell>
            </TableRow>
          ) : contactList?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                <h3>No Data</h3>
              </TableCell>
            </TableRow>
          ) : (
            contactList?.map((contact, index) => (
              <TableRow
                key={contact.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{index + 1}</TableCell>
                <TableCell align="right">{contact.username}</TableCell>
                <TableCell align="right">{contact.phoneNumber}</TableCell>
                <TableCell align="right">{contact.gender}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Contacts;
