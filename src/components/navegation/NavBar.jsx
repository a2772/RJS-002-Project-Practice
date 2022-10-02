import NavElement from "./NavElement"
import logoSvg from "../../assets/images/logo_02.svg"

const NavBar = () =>{
    return(
        <div className="primary-header flex">
            <div>
                <img alt="Logo" className="logo-navbar" src={logoSvg} />
            </div>
            <nav>
                <ul id="primary-navigation" className="primary-navigation flex">
                    <NavElement 
                        elemNum={"1 - "} 
                        text={"Home"} 
                        goTo="/" 
                        class="active"
                    />
                    <NavElement 
                        elemNum={"2 - "} 
                        text={"About me"} 
                        goTo="/aboutme"
                    />
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
