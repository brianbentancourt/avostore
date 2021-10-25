import React from "react"
import NavBar from '../NavBar'

function Layout({ children }) {

    return (
        <>
            <NavBar />
            {children}
            <footer>This is the footer</footer>
        </>
    )
}

export default Layout