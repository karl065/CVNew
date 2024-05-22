import { useSelector } from "react-redux";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import { PiLinkedinLogo } from "react-icons/pi";

const Sidebar = () => {
  const personal = useSelector((state) => state.usuarios.personal);

  const formatUrl = (url) => {
    if (!url) return "";
    // Eliminar el inicio de la URL
    let formattedUrl = url.replace(
      /^(https?:\/\/)?(www\.linkedin\.com\/in\/|github\.com\/)?/,
      ""
    );
    formattedUrl = formattedUrl.replace(/-/g, " ");

    formattedUrl = formattedUrl.split(" ");

    formattedUrl = formattedUrl.map((word) => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });

    formattedUrl = formattedUrl.slice(0, 2).join(" ");
    return formattedUrl.trim();
  };
  return (
    <div className="p-2">
      <div className="border-r-2 h-full space-y-1 border-black p-2">
        <div className="flex space-x-2 items-center">
          <div className="p-2 bg-gray-800 rounded-full">
            <IoPhonePortraitOutline color="white" size={20} />
          </div>
          <a
            href={`https://wa.me/${personal[0]?.celular}`}
            target="_blank"
            rel="noopener noreferrer">
            {personal[0]?.celular}
          </a>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="p-2 bg-gray-800 rounded-full">
            <MdOutlineEmail color="white" size={20} />
          </div>
          <h1>{personal[0]?.email}</h1>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="p-2 bg-gray-800 rounded-full">
            <RiGithubLine color="white" size={20} />
          </div>
          <a
            href={`${personal[0]?.gitHub}`}
            target="_blank"
            rel="noopener noreferrer">
            {formatUrl(personal[0]?.gitHub)}
          </a>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="p-2 bg-gray-800 rounded-full">
            <PiLinkedinLogo color="white" size={20} />
          </div>
          <a
            href={`https://wa.me/${personal[0]?.linkedIn}`}
            target="_blank"
            rel="noopener noreferrer">
            {formatUrl(personal[0]?.linkedIn)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
