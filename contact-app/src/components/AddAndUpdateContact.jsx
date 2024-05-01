/* eslint-disable react/prop-types */
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  phone: Yup.number().required("Phone Number is Required"),
});

const AddAndUpdateContact = ({ isOpen, handleClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      handleClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      handleClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                  phone: contact.phone,
                }
              : { name: "", email: "", phone: "" }
          }
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">NAME</label>
              <Field
                name="name"
                className="h-[40px] rounded-md border-[2px] border-black px-4 "
              />
              <div className="text-xs text-red">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">EMAIL</label>
              <Field
                type="email"
                name="email"
                className="h-[40px] rounded-md border-[2px] border-black px-4 "
              />
              <div className="text-xs text-red">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone">Phone No</label>
              <Field
                type="number"
                name="phone"
                className="h-[40px] rounded-md border-[2px] border-black px-4 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <div className="text-xs text-red">
                <ErrorMessage name="phone" />
              </div>
            </div>
            <button
              type="submit"
              className="mt-2 self-end rounded-md bg-red px-5 py-2 text-white"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;