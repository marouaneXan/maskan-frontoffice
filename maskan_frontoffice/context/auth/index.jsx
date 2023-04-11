import { endpoint } from "@/config";
import { useMemo, createContext, useState } from "react";
import { toast } from 'react-toastify'
import axios from "axios";
import Router from "next/router"
export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
    //State
    const [connected, setConnected] = useState(
        typeof localStorage !== 'undefined' ? (localStorage.getItem("logged") ? true : false) : ''
    );
    const [loading, setLoading] = useState(false);

    //Register for client
    const register = async (data) => {
        setLoading(true);
        const res = await axios
            .post(endpoint + "/client/auth/register", data)
            .catch((err) => {
                const message =
                    (err.res && err.res.data && err.res.data.message) ||
                    err ||
                    err.message;
                if (message) {
                    setLoading(false);
                    toast.error(message.response.data.message)
                    setTimeout(() => {
                        setLoading(false);
                    }, 4000);
                }
            });
        if (res && res.data) {
            setLoading(false);
            toast.success(res.data.message)
            setTimeout(() => {
                setConnected(true);
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem("logged", true);
                    localStorage.setItem("client_id", res.data.client);
                    localStorage.setItem("token", res.data.token);
                }
                Router.push('/')
            }, 5000);
        }
    };
    // login client
    const login = async (data) => {
        setLoading(true);
        const res = await axios
            .post(endpoint + "/client/auth/login", data)
            .catch((err) => {
                const message =
                    (err.res && err.res.data && err.res.data.message) ||
                    err ||
                    err.message;
                if (message) {
                    setLoading(false);
                    toast.error(message.response.data.message)
                    setTimeout(() => {
                        setLoading(false);
                    }, 4000);
                }
            });
        if (res && res.data) {
            setLoading(false);
            toast.success(res.data.message)
            setTimeout(() => {
                setConnected(true);
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem("logged", true);
                    localStorage.setItem("client_id", res.data.client);
                    localStorage.setItem("token", res.data.token);
                }
                Router.push('/')
            }, 5000);
        }
    };
    //logout
    const logout = () => {
        clearLocalStorage()
        setTimeout(() => {
            setConnected(false);
            Router.push("/auth/login");
        }, 500);
    };
    const clearLocalStorage = () => {
        localStorage.clear()
    }
    const values = useMemo(
        () => ({
            connected,
            logout,
            register,
            login,
            loading
        }),
        [
            connected,
            loading,
            register,
            login,
            logout,
        ]
    );
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
