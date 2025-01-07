import {Counter} from "./components/Counter";
import './index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainAsync} from "./pages/main/Main.async";
import {AboutAsync} from "./pages/about/About.async";
import {Suspense} from "react";

const App = () => {
    return (
        <div className="app">
            <Counter/>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainAsync/>}/>
                    <Route path={'/about'} element={<AboutAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;