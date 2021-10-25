import React from "react"
import NavBar from '@components/NavBar'

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