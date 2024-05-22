import { useSelector } from "react-redux";

const Home = () => {
  const personal = useSelector((state) => state.usuarios.personal);
  return (
    <div className="bg-gray-400 bg-opacity-50 flex items-center justify-center w-full h-full rounded-sm">
      <h1>Soy home</h1>
    </div>
  );
};

export default Home;
