
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../assets/icons/user.png";
import notification from "../assets/icons/notification.png";

// Import Avatar from Tailwind CSS-compatible library if needed

const Header = () => {
 

  return (
    <div className="pl-[110px] py-[5px] bg-acc-100">
      <div className="flex justify-between items-center">
        <Link to="/" className="hidden md:flex">
            <h1 className="text-4xl">Brand</h1>
        </Link>
        <div className="flex items-center border border-[#E2E6E8] p-2 pl-[15px] w-[65%] md:w-[45%] rounded-full bg-white">
          <input
            className="border-none focus:outline-none w-full"
            placeholder="Search...."
          />
          <FaSearch color="#CACED3" />
        </div>
        <div className="relative p-3 md:p-6 flex items-center">
          <Link to="/settings" className="relative">
            <img
              src={notification}
              alt="notify"
              className="w-[19px] h-[19px]"
            />
            <span className="absolute top-[-10px] right-[-5px] text-white bg-red-500 rounded-lg px-1 text-xs">
                3
            </span>
          </Link>
          <Link to="/settings" className="ml-5 flex items-center">
            <img
              className="w-[43px] h-[43px] rounded-full"
              src={avatar}
              alt="user"
            />
            <span className="ml-2 hidden md:flex">
              <p className="text-xl">Samuel</p>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
