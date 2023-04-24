import { useEffect, useState } from "react";
import { firebase } from "./firebase";
import { getDatabase, push, set, ref, onValue } from "firebase/database";

export const addUser = (info) => {
  const db = getDatabase();
  const userRef = ref(db, "DBContact");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};

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
