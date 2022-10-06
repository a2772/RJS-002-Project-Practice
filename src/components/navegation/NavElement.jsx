import { NavLink } from "react-router-dom"

///Element number, text, href value and if it is the active class, then receive it
const NavElement = ({ elemPic = "", text, goTo, activeClass = "" }) => {
	return (
		<li className={activeClass}>
			<NavLink className="navbar-element" to={goTo}>
				<img src={elemPic} /><span>{text}</span>
			</NavLink>
		</li>
	)
}

export default NavElement
