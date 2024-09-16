import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import users from "../assets/icons/users.png";
import posts from "../assets/icons/posts.png";
import todos from "../assets/icons/todos.png";
import albums from "../assets/icons/albums.png";
import settings from "../assets/icons/settings.png";
import menu from "../assets/icons/menu.png";

const SideBar = () => {
  const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
  const navigate = useNavigate(); // Used for programmatic navigation

  const activeBgColor = "bg-[#555] text-white";
  const activeIconColor = "text-white";

  const routes = [
    { path: "/users", icon: users, alt: "Users" },
    { path: "/posts", icon: posts, alt: "Posts" },
    { path: "/todos", icon: todos, alt: "Todos" },
    { path: "/albums", icon: albums, alt: "Albums" },
    { path: "/settings", icon: settings, alt: "Settings" },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 h-[110vh] transition-all z-50 ${
        open ? "w-38 bg-black" : "w-16 bg-[#1f1f1f]"
      }`}
    >
      <div className="flex flex-col items-center py-4 gap-6">
        {/* Menu Toggle Button */}
        <img
          src={menu}
          alt="menu"
          className="cursor-pointer mb-6 invert"
          onClick={() => setOpen(!open)}
        />

        {/* Route Links */}
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 w-full hover:bg-[#555] transition-all relative cursor-pointer ${
                isActive ? `${activeBgColor} ${activeIconColor}` : "text-white"
              } ${setActive(isActive)}`
            }
            onClick={() => navigate(route.path)}
          >
            {({ isActive }) => (
              <>
                <img
                  src={route.icon}
                  alt={route.alt}
                  className={
                    route.alt === "Settings"
                      ? "w-6 h-6 filter invert"
                      : "w-6 h-6 filter invert-0 hover:invert-50"
                  }
                />
                {open && (
                  <span
                    className={`text-sm ${
                      isActive
                        ? activeIconColor
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {route.alt}
                  </span>
                )}

                {/* Active route indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-purple-700" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
