import Button from "./button";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Calendar</a>
            </li>
            <li>
              <a>Generate Report</a>
            </li>
            <li>
              <details>
                <summary>Settings</summary>
                <ul className="p-3">
                  <li>
                    <a>Add User</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">USAMS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Calendar</a>
          </li>
          <li>
            <a>Generate Report</a>
          </li>
          <li>
            <details>
              <summary>Settings</summary>
              <ul className="p-3">
                <li>
                  <a>Add User</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Button variant="success" fullwidth="false">
          Add Event
        </Button>
      </div>
    </div>
  );
}
export default Navbar;
