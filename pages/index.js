import React, { useState, useEffect } from "react"
import Layout from '@components/Layout'
import KawaiiHeader from '@components/KawaiiHeader'
import ProductList from '@components/ProductList'

const HomePage = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        window.fetch('/api/avo')
            .then(response => response.json())
            .then(({ data }) => setProductList(data))
    }, [])

    return (
        <Layout>
            <KawaiiHeader />
            <ProductList products={productList} />
        </Layout>
    )
}

export default HomePage