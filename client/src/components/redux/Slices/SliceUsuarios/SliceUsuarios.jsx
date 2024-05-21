import { createSlice } from "@reduxjs/toolkit";
import {
  buscarUsuarios,
  buscarRoles,
} from "../../Actions/ActionsUsuarios/ActionsUsuarios";

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    login: null,
    usuarios: [],
    roles: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setUsuarios: (state, action) => {
      state.usuarios = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buscarUsuarios.pending, (state) => {
        state.status = "loading";
      })
      .addCase(buscarUsuarios.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.usuarios = action.payload;
      })
      .addCase(buscarUsuarios.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(buscarRoles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(buscarRoles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.roles = action.payload;
      })
      .addCase(buscarRoles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setLogin, setUsuarios, setRoles } = usuariosSlice.actions;

export default usuariosSlice.reducer;
