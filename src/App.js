import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthTemplateBlock from "./components/Auth/AuthTemplate";
import Header from "./components/Common/Header";
import { useState } from "react";
import { Link, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <>
            <Route path="/" component={MainPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
        </>
    );
};

export default App;