import React, { PropsWithChildren } from 'react'
import { Container } from 'semantic-ui-react'

import Navbar from '@components/NavBar'
import Footer from '@components/Footer'


const Layout = ({ children }) => (
    <>
        <Navbar />
        <Container as="main" text>
            {children}
        </Container>
        <Footer />
    </>
)

export default Layout