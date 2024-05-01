/* eslint-disable react-hooks/exhaustive-deps */
import ContactCard from "./components/ContactCard";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navabar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useEffect } from "react";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const { isOpen, handleClose, handleOpen } = useDisclouse();

  async function getContacts() {
    try {
      const contactRef = collection(db, "contacts");

      // const collectionSnapshots = await getDocs(contactRef);

      onSnapshot(contactRef, (snapshot) => {
        const collectionList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setContacts(collectionList);

        return collectionList;
      });
    } catch (error) {
      console.log(error);
    }
  }

  const filterContacts = (e) => {
    const searchValue = e.target.value;

    const contactRef = collection(db, "contacts");

    onSnapshot(contactRef, (snapshot) => {
      const collectionList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = collectionList.filter((contact) => {
        return contact.name.toLowerCase().includes(searchValue.toLowerCase());
      });

      console.log(filteredContacts);

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="m-auto max-w-[360px] py-2  text-white">
        <Navbar />
        <InputForm filterContacts={filterContacts} handleOpen={handleOpen} />
        <div className="mt-5">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => {
              return <ContactCard key={contact.id} contact={contact} />;
            })
          )}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} handleClose={handleClose} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;