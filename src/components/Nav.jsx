import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-4/5 mx-auto md:flex justify-between items-center p-5">
      <div className="">
      <NavLink to={'/'}>
        <img className="p-4 h-[72px]" src="../Logo.png" alt="" />
        </NavLink>
      </div>
      <div className=" text-center">
        <ul className="menu menu-horizontal px-1 gap-5">
          <NavLink to={'/'}>
            Home
          </NavLink>
          <NavLink to={'/donation'}>
          Donation
          </NavLink>
          <NavLink to={'/statistics'}>
          Statistics
          </NavLink>
          
        </ul>
      </div>
    </div>
  );
};

export default Nav;
