import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import store from "./components/redux/store.jsx";
import Sockets from "./components/Sockets/Sockets.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Sockets />
      <App />
    </BrowserRouter>
  </Provider>
);
