import { useState } from "react"
import NavElement from "./NavElement"

import logoSvg from "../../assets/images/logo_02.svg"
import homeSvg from "../../assets/images/home.svg"
import faqSvg from "../../assets/images/question.svg"
import teamSvg from "../../assets/images/team.svg"

const NavBar = () => {
	const [state, setState] = useState({
		menuVisible: false
	})
	const menuClick = () => {
		setState(
			{
				...state,
				menuVisible: !state.menuVisible
			}
		)
	}

	return (
		<div className="primary-header flex">
			<div>
				<img alt="Logo" className="logo-navbar" src={logoSvg} />
			</div>
			<button onClick={menuClick} data-visible={state.menuVisible} className="mobile-nav-toggle">&nbsp;</button>
			<nav>
				<ul data-visible={state.menuVisible} id="primary-navigation" className="primary-navigation flex">
					<NavElement
						elemPic={homeSvg}
						text={"Home"}
						goTo="/"
						class="active"
					/>
					<NavElement
						elemPic={teamSvg}
						text={"About us"}
						goTo="/aboutus"
					/>
					<NavElement
						elemPic={faqSvg}
						text={"FAQ"}
						goTo="/faqs"
					/>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar
