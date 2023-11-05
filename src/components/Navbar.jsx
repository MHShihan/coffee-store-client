import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <NavLink to={"/"}>
        <li className="font-bold ">
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to={"/addCoffee"}>
        <li className="font-bold ">
          <a>Add Coffee</a>
        </li>
      </NavLink>
      <NavLink to={"/signIn"}>
        <li className="font-bold ">
          <a>SignIn</a>
        </li>
      </NavLink>
      <NavLink to={"/signUp"}>
        <li className="font-bold ">
          <a>SignUp</a>
        </li>
      </NavLink>
      <NavLink to={"/users"}>
        <li className="font-bold ">
          <a>Users</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost normal-case text-xl">CoffeeStore</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/signUp">
          <a className="btn">SignUp</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
