import "./components/Nav";
import "./App.css";
import LoginPage from "./components/LoginPage";
import LogRocket from "logrocket";
LogRocket.init("pnsbj7/joker");

function App() {
    return (
        <>
            {/* <Nav /> */}
            <div className="Login">
                <LoginPage />
            </div>
        </>
    );
}
export default App;
