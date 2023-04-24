import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Contacts from "./components/Contacts/Contacts";
import { addUser, editUser } from "./utils/functions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValue = { username: "", phoneNumber: "", gender: "" };

function App() {
  const [info, setInfo] = useState(initialValue);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      editUser(info);
    } else {
      addUser(info);
    }
    setInfo(initialValue);
  };

  const editHandler = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div className="App">
      <ContactForm
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts editHandler={editHandler} />
      <ToastContainer />
    </div>
  );
}

export default App;
