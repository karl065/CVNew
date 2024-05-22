import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import Login from "../Forms/Login/Login";

const Navbar = () => {
  const personal = useSelector((state) => state.usuarios.personal);

  const [modalLogin, setModalLogin] = useState(false);

  const handleLogin = () => {
    setModalLogin(!modalLogin);
  };
  const handlerCloseModalLogin = () => {
    setModalLogin(!modalLogin);
  };
  console.log(personal);

  return (
    <div className="shadow">
      <div className="container mx-auto">
        <nav className="flex flex-wrap items-center p-4">
          {" "}
          <button
            className="px-3 py-2 rounded hover:bg-primary-600 hover:text-white text-primary-600 lg:hidden"
            data-name="nav-toggler"
            data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"className.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}'
            data-pg-ia-apply="$nav [data-name=nav-toggler]">
            {" "}
            <span className="block w-6 my-1 border-b-2 border-current"></span>{" "}
            <span className="block w-6 my-1 border-b-2 border-current"></span>{" "}
            <span className="block w-6 my-1 border-b-2 border-current"></span>
          </button>
          <div
            className="hidden w-full space-y-2 lg:flex lg:space-x-4 lg:space-y-0 lg:w-auto lg:items-center"
            data-name="nav-menu">
            <div className="flex flex-col lg:flex-row">
              {" "}
              <Link
                to="/home"
                className="px-0 py-2 text-white hover:text-primary-500 lg:px-6">
                Perfil
              </Link>{" "}
              <a
                href="#"
                className="px-0 py-2 text-white hover:text-primary-500 lg:px-6">
                Experiencia
              </a>{" "}
              <a
                href="#"
                className="px-0 py-2 text-white hover:text-primary-500 lg:px-6">
                Discover
              </a>{" "}
              <a
                href="#"
                className="px-0 py-2 text-white hover:text-primary-500 lg:px-6">
                Our Work
              </a>{" "}
              <a
                href="#"
                className="px-0 py-2 text-white hover:text-primary-500 lg:px-6">
                Contact
              </a>
            </div>{" "}
            <button onClick={handleLogin}>Ingresar</button>
            <Modal
              ariaHideApp={false}
              isOpen={modalLogin}
              onRequestClose={handlerCloseModalLogin}
              overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
              className="p-4 space-y-2 bg-white rounded-lg"
              style={{ overlay: { overflowY: "scroll" } }}>
              <div className="flex justify-between p-2 border rounded-lg bg-secondary-fondo">
                <h1 className="font-bold text-white uppercase">Login</h1>
                <button
                  onClick={handlerCloseModalLogin}
                  className="transition duration-300 ease-in-out border rounded-md hover:bg-gray-600">
                  ❌
                </button>
              </div>
              <Login />
            </Modal>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
