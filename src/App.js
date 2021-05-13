import {ReactComponent as Logo} from "./svg/dubhealers-text.svg";

function App() {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                <div className={"text-center"}>
                <Logo className={"logo-danger logo-text-dark"}/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default App;
