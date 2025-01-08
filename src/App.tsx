import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {AboutAsync} from "./pages/about/About.async";
import {MainAsync} from "./pages/main/Main.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";

const App = () => {
    //const {theme, toggleTheme} = useTheme();

    const {theme, setTheme} = useContext(ThemeContext);

    // const [theme, setTheme] = useState('light');
    //
    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }

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
