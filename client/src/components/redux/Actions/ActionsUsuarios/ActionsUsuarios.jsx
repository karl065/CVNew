import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import server from "../../../connections/server";

export const buscarUsuarios = createAsyncThunk(
  "usuarios/buscarUsuarios",
  async () => {
    const { data } = await axios.get(`${server.api.baseURL}usuario`);

    return data;
  }
);

export const buscarRoles = createAsyncThunk(
  "usuarios/buscarRoles",
  async () => {
    const { data } = await axios.get(
      `${server.api.baseURL}usuario?obtenerRoles=true`
    );
    return data;
  }
);

export const inicio = createAsyncThunk("usuarios/inicio", async () => {
  const { data } = await axios.get(`${server.api.baseURL}usuario?rol=Personal`);
  return data;
});
