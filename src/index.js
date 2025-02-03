import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="*" element={<App />}></Route>
        </Routes>
    </BrowserRouter>
);

