const Nav = () => {
  return (
    <div className="w-4/5 mx-auto navbar p-5">
      <div className="flex-1">
        <img className="p-4" src="./Logo.png" alt="" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Donation</a>
          </li>
          <li>
            <a>Statistics</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
