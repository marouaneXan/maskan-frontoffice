import PropertyContextProvider from '@/context/property'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from '@/context/auth';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }

  
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <PropertyContextProvider>
        <AuthContextProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </AuthContextProvider>
      </PropertyContextProvider>
    )
  }
}
