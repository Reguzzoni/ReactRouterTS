// App.tsx
import React, { ReactNode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// REACT.FC è UN COMPONENTE FUNZIONALE, OVVERO UNA FUNZIONE CHE RITORNA UN COMPONENTE
// https://www.typescriptlang.org/docs/handbook/react.html#functional-components
const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};
export default App;
