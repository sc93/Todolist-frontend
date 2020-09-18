import client from "./client";

export const login = ({ userid, userpw }) =>
    client.post("/api/auth/login", { userid, userpw });

export const register = ({ userid, userpw, username }) =>
    client.post("/api/auth/register", { userid, userpw, username });

export const check = () => client.get("/api/auth/check");

export const logout = () => client.post("/api/auth/logout");
