import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";
import { endpoint } from "@/config";
export const PropertyContext = createContext(null);
const PropertyContextProvider = ({ children }) => {
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState(null)
    // get all properties
    const getProperties = async () => {
        setLoading(true);
        const res = await axios.get(`${endpoint}/properties`).catch((err) => {
            const message =
                (err.res && err.res.data && err.res.data.message) || err || err.message;
            if (message) {
                setLoading(false);
                setEmpty(message.response.data.message);
                setTimeout(() => {
                    setLoading(false);
                }, 4000);
            }
        });
        if (res && res.data) {
            setLoading(false);
            setProperties(res.data);
        }
    };
    const searchProperties = async (city, price, stage) => {
        setLoading(true);
        const res = await axios.get(`${endpoint}/properties?city=${city}&price=${price}&stage=${stage}`).catch((err) => {
            const message =
                (err.res && err.res.data && err.res.data.message) || err || err.message;
            if (message) {
                setLoading(false);
                setEmpty(message.response.data.message);
                setTimeout(() => {
                    setLoading(false);
                }, 4000);
            }
        });
        if (res && res.data) {
            setLoading(false);
            setEmpty(null)
            setProperties(res.data);
        }
    };
    useEffect(() => {
        getProperties()
    }, [])
    const values = useMemo(
        () => ({
            getProperties,
            searchProperties,
            properties,
            loading,
            empty
        }),
        [
            getProperties,
            searchProperties,
            properties,
            loading,
            empty
        ]
    );
    return <PropertyContext.Provider value={values}>{children}</PropertyContext.Provider>;
};
export default PropertyContextProvider;
