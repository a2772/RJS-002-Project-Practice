///Element number, text, href value and if it is the active class, then receive it
const NavElement = ({elemNum, text, goTo, activeClass = ""}) => {
    return(
        <li className={activeClass}>
            <a className="navbar-element" href={goTo}>
                <span aria-hidden="true">{elemNum}</span>{text}
            </a>
        </li>
    )
}

export default NavElement
