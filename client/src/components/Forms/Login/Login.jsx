import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import { useFormik } from "formik";
import { RiMailFill, RiLockFill } from "react-icons/ri";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const loading = useSelector((state) => state.usuarios.loading);
  const [verContraseña, setVerContraseña] = useState(false);

  const handleVerContraseña = () => {
    setVerContraseña(!verContraseña);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Formato de correo electrónico inválido")
      .required("Correo electrónico requerido"),
    password: Yup.string().required("Contraseña requerida"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // login(values, dispatch, navigate);
    },
  });
  return (
    <div>
      <form className="mb-3" onSubmit={formik.handleSubmit}>
        <div className="relative mb-4">
          <RiMailFill className="absolute -translate-y-1/2 top-1/2 left-2 text-secondary-button" />
          <input
            type="email"
            name="email"
            id="email"
            className={`p-2 bg-secondary-1000 uppercase w-full outline-none rounded-lg focus:border focus:border-secondary-button text-colors ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : ""
            }`}
            placeholder="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <div
            className={`text-xs bg-black rounded-lg p-2 text-red-500 absolute top-full z-10 ${
              formik.touched.email && formik.errors.email ? "visible" : "hidden"
            }`}>
            {formik.errors.email}
          </div>
        </div>
        <div className="relative mb-4">
          <RiLockFill className="absolute -translate-y-1/2 top-1/2 left-2 text-secondary-button" />
          <input
            type={verContraseña ? "text" : "password"}
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`py-2 pl-8 pr-4 bg-secondary-1000 w-full outline-none rounded-lg focus:border focus:border-secondary-button ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : ""
            }`}
            placeholder="Contraseña"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={handleVerContraseña}
            className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none">
            {verContraseña ? (
              <AiFillEyeInvisible className="text-gray-400" />
            ) : (
              <AiFillEye className="text-gray-400" />
            )}
          </button>
          <div
            className={`text-xs bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10 ${
              formik.touched.password && formik.errors.password
                ? "visible"
                : "hidden"
            }`}>
            {formik.errors.password}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
