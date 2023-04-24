import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Contacts from "./components/Contacts/Contacts";
import { addUser } from "./utils/functions";

const initialValue = { username: "", phoneNumber: "", gender: "NO INFO" };

function App() {
  const [info, setInfo] = useState(initialValue);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addUser(info);
  };
  return (
    <div className="App">
      <ContactForm
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts />
    </div>
  );
}

export default App;
