import {ReactComponent as Logo} from "../svg/dubhealers-text.svg";
import {Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import PressPack from "./pages/PressPack";
import SoMe from "./pages/SoMe";
import {faBars, faComment, faFilePdf, faInfo, faMusic, faThumbsUp, faUsers} from '@fortawesome/free-solid-svg-icons'
import Members from "./pages/Members";
import PageLink from "./PageLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Collapse} from "react-collapse";
import {useState} from "react";

function App() {
    const [expanded, setExpanded] = useState(false);

    function BurgerLiLink({to, icon, children}) {
        return (
            <li onClick={() => setExpanded(!expanded)}>
                <PageLink to={to} icon={icon}>{children}</PageLink>
            </li>
        );
    }

    function renderBurgerMenu() {
        return (
            <div>
                <div onClick={() => setExpanded(!expanded)}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <Collapse isOpened={expanded}>
                    <ul className={"px-0"}>
                        <BurgerLiLink to={"/about"} icon={faInfo}>about</BurgerLiLink>
                        <BurgerLiLink to={"/members"} icon={faUsers}>members</BurgerLiLink>
                        <BurgerLiLink to={"/music"} icon={faMusic}>music</BurgerLiLink>
                        <BurgerLiLink to={"/some"} icon={faThumbsUp}>SoMe</BurgerLiLink>
                        <BurgerLiLink to={"/presspack"} icon={faFilePdf}>press pack</BurgerLiLink>
                        <BurgerLiLink to={"/contact"} icon={faComment}>contact</BurgerLiLink>
                    </ul>
                </Collapse>
            </div>
        );
    }

    return (
        <div className={"container mx-auto"}>
            {/*desktop*/}
            <div className={"row bg-light border border-dark rounded m-2 d-none d-lg-block"}>
                <div className={"col"}>
                    <div className={"text-center"}>
                        <Logo className={"logo-danger logo-text-dark my-3"}/>
                    </div>
                </div>
            </div>
            <div className={"row bg-light border border-dark rounded m-2 text-center text-dark d-none d-lg-flex"}>
                <div className={"col"}>
                    <PageLink to={"/about"} icon={faInfo}>about</PageLink>
                </div>
                <div className={"col"}>
                    <PageLink to={"/members"} icon={faUsers}>members</PageLink>
                </div>
                <div className={"col"}>
                    <PageLink to={"/music"} icon={faMusic}>music</PageLink>
                </div>
                <div className={"col"}>
                    <PageLink to={"/some"} icon={faThumbsUp}>SoMe</PageLink>
                </div>
                <div className={"col"}>
                    <PageLink to={"/presspack"} icon={faFilePdf}>press pack</PageLink>
                </div>
                <div className={"col"}>
                    <PageLink to={"/contact"} icon={faComment}>contact</PageLink>
                </div>
            </div>

            {/*mobile*/}
            <div className={"row bg-light border border-dark rounded m-2 d-lg-none"}>
                <div className={"col"}>
                    <div className={"text-center"}>
                        <Logo className={"logo-danger logo-text-dark w-100"}/>
                    </div>
                </div>
            </div>
            <div className={"row bg-light border border-dark rounded m-2 text-left d-lg-none"}>
                {renderBurgerMenu()}
            </div>

            {/*content*/}
            <div className={"row bg-light border border-dark rounded m-2"}>
                <div className={"col mx-md-5 my-2"}>
                    <Switch>
                        <Route path={"/website"}>
                            <About/>
                        </Route>
                        <Route path={"/about"}>
                            <About/>
                        </Route>
                        <Route exact path={"/music"}>
                            <Music/>
                        </Route>
                        <Route exact path={"/members"}>
                            <Members/>
                        </Route>
                        <Route exact path={"/some"}>
                            <SoMe/>
                        </Route>
                        <Route exact path={"/presspack"}>
                            <PressPack/>
                        </Route>
                        <Route exact path={"/contact"}>
                            <Contact/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
