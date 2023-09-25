import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-4/5 mx-auto navbar p-5">
      <div className="flex-1">
        <img className="p-4" src="../Logo.png" alt="" />
      </div>
      <div className="">
        <ul className="menu menu-horizontal px-1 gap-3">
          <Link to={'/'}>
            Home
          </Link>
          <Link to={'/donation'}>
          Donation
          </Link>
          <Link to={'/statistics'}>
          Statistics
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Nav;
