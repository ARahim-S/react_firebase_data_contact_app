import { useFetch, deleteUser } from "../../utils/functions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";

const Contacts = ({ editHandler }) => {
  const { isLoading, contactList } = useFetch();
  console.log(isLoading, contactList);
  return (
    <>
      <p className="second-header">Contact List</p>
      <TableContainer
        sx={{
          backgroundColor: "bisque",
          border: "2px solid black",
          maxWidth: 750,
          margin: "1rem auto",
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Number</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Update</TableCell>
              <TableCell align="center">Delete</TableCell>
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
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">
                    {contact.username.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">{contact.phoneNumber}</TableCell>
                  <TableCell align="center">{contact.gender}</TableCell>
                  <TableCell align="center">
                    <UpgradeIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        editHandler(
                          contact.id,
                          contact.username,
                          contact.phoneNumber,
                          contact.gender
                        )
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIcon
                      onClick={() => deleteUser(contact.id)}
                      sx={{ cursor: "pointer" }}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Contacts;
