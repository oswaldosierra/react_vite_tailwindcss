import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : undefined
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furntures"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : undefined
            }
          >
            Furntures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : undefined
            }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">Oswaldox199@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : undefined
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furntures"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : undefined
            }
          >
            Furntures
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sing In</NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  );
}

export default NavBar;
