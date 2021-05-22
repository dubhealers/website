import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function PageLink({icon, to, children, className}) {
    return (
        <NavLink to={to} activeClassName={"activeLink"} className={className}>
            <FontAwesomeIcon icon={icon} style={{width: "40px"}}/>
            <span>{children}</span>
        </NavLink>
    );
};
