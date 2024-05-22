/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { socketClient } from "./../../helpers/socketClient/socketClient";
import { setLogin } from "../redux/Slices/SliceUsuarios/SliceUsuarios";
import { inicio } from "../redux/Actions/ActionsUsuarios/ActionsUsuarios";

const Sockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(inicio());
    socketClient.on("login", (data) => {
      dispatch(setLogin(data));
    });
    return () => {
      socketClient.off("login");
    };
  }, []);

  return null;
};

export default Sockets;
