import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link className="navButton" to="/">Home</Link>
      <Link className="navButton" to="/projects">Projects</Link>
      <Link className="navButton" to="/socials">Social Media</Link>
      <Link className="navButton" to="/contacts">Contacts</Link>
    </div>
  )
}

export default NavBar
