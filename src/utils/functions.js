import { useEffect, useState } from "react";
import { firebase } from "./firebase";
import { customToastifyError, customToastifySuccess } from "./customToastify";

import {
  getDatabase,
  push,
  set,
  ref,
  onValue,
  remove,
  update,
} from "firebase/database";

//Add Data
export const addUser = async (info) => {
  try {
    const db = getDatabase();
    const userRef = ref(db, "DBContact");
    const newUserRef = push(userRef);
    set(newUserRef, {
      username: info.username,
      phoneNumber: info.phoneNumber,
      gender: info.gender,
    });
  } catch (error) {
    customToastifyError(error.message || error);
  }
};

//Read Data
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    setIsLoading(true);

    const db = getDatabase();
    const userRef = ref(db, "DBContact");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();

      const contactListArr = [];

      for (let id in data) {
        contactListArr.push({ id, ...data[id] });
      }
      setContactList(contactListArr);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

//Remove Data
export const deleteUser = (id) => {
  const db = getDatabase();
  remove(ref(db, "DBContact/" + id));
  customToastifySuccess("User deleted successfully!");
};

//Edit Data
export const editUser = async (info) => {
  try {
    const db = getDatabase();

    const updates = {};
    updates["DBContact/" + info.id] = info;

    update(ref(db), updates);
    customToastifySuccess("User updated successfully!");
    return;
  } catch (error) {
    customToastifyError(error);
  }
};
