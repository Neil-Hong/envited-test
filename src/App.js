import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./components/eventPage/EventPage";
import CreatePage from "./components/createPage/CreatePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<LandingPage />}></Route>
                    <Route path="/event" element={<EventPage />}></Route>
                    <Route path="/create" element={<CreatePage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
