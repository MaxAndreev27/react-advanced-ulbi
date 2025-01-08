import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {AboutAsync} from "./pages/about/About.async";
import {MainAsync} from "./pages/main/Main.async";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutAsync />} />
                    <Route path={'/'} element={<MainAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
