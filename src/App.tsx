import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Freelance} from "./Freelance/Freelance";
import {Contact} from "./Contact/Contact";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Freelance/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
