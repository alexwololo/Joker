import "./components/Nav";
import "./App.css";
import LoginPage from "./components/LoginPage";
import LogRocket from "logrocket";
LogRocket.init("pnsbj7/joker");

function App() {
<<<<<<< HEAD
    return <LoginPage />;
=======
    return (
        <>
            {/* <Nav /> */}
            <div className="Login">
                <LoginPage />
            </div>
        </>
    );
>>>>>>> alex
}

export default App;
