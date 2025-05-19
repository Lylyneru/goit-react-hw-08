import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/operations";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await authInstance.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await authInstance.post("/contacts", contact);
      toast.success("Contact added!", { position: "top-center" });
      return data;
    } catch (error) {
      toast.error("Error adding contact!", { position: "top-center" });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await authInstance.delete(`/contacts/${contactId}`);
      toast.success("Contact deleted!", { position: "top-center" });
      return contactId;
    } catch (error) {
      toast.error("Failed to delete contact!", { position: "top-center" });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
