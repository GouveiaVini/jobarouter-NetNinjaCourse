import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayouts() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>Lorem ipsum dolor sit amet consectetur!</p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}
