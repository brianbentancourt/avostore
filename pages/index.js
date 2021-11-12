import React, { useState, useEffect } from "react"
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout'
import KawaiiHeader from '@components/KawaiiHeader'
import ProductList from '@components/ProductList'

//pagina estatica
export const getStaticProps = async () => { // Se ejecuta en el servidor, solo funciona en las pages
    const response = await fetch('https://avostore.vercel.app/api/avo')
    const { data } = await response.json()

    return {
        props: {
            productList: data
        }
    }
}

const HomePage = ({ productList }) => {
    /* const [productList, setProductList] = useState([])
    useEffect(() => { // Siempre se ejecuta en el cliente (Client side renderer)
        window.fetch('/api/avo')
            .then(response => response.json())
            .then(({ data }) => setProductList(data))
    }, []) */

    return (
        <Layout>
            <KawaiiHeader />
            <ProductList products={productList} />
        </Layout>
    )
}

export default HomePage