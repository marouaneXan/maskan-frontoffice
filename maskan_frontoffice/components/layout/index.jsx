import React from 'react'
import Navbar from '../partials/navbar/Navbar'
import Footer from '../partials/footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout