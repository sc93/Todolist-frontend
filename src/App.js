import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodoPage from "./pages/TodoPage";
import WritePage from "./pages/WritePage";

const App = () => {
    return (
        <>
            <Route path="/" component={MainPage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/todo/:id" component={TodoPage} />
            <Route path="/write" component={WritePage} />
        </>
    );
};

export default App;
