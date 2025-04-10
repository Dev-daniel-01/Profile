import style from "./Menu.module.css"

export const Menu = (props) => {
    return (
        <>
            <nav className={`navegacao ${style['navBar']}`}>
                <ul className={`menu ${style['nav-menu']}`}>
                    <li  >
                        <a className={`nav-link ${style['nav-link']}`} href={"/"}>{props.option01}</a>
                    </li>
                    <li  >
                        <a className={`nav-link ${style['nav-link']}`} href={"#s2"}>{props.option02}</a>
                    </li>
                    <li >
                        <a  className={`nav-link ${style['nav-link']}`}  href={"#s3"}>{props.option03}</a>
                    </li>
                    <li  >
                        <a  className={`nav-link ${style['nav-link']}`} href={"/contact"}>{props.option04}</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
