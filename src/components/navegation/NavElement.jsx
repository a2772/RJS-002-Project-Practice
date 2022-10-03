///Element number, text, href value and if it is the active class, then receive it
const NavElement = ({elemPic = "", text, goTo, activeClass = ""}) => {
    return(
        <li className={activeClass}>
            <a className="navbar-element" href={goTo}>
                <img src={elemPic} /><span>{text}</span>
            </a>
        </li>
    )
}

export default NavElement
