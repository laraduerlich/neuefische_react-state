import './App.css'
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./page/WelcomePage.tsx";
import GalleryPage from "./page/GalleryPage.tsx";
import NavBar from "./components/NavBar.tsx";
import CharacterPage from "./page/CharacterPage.tsx";

export default function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path={"/characters"} element={<GalleryPage />} />
                <Route path={"/characters/:id"} element={<CharacterPage />} />
            </Routes>

        </>
    );
}
