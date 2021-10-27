import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Layout from '@components/Layout'
import ProductSummary from '@components/ProductSummary'

const ProductItem = () => {
    const {
        query: { id }
    } = useRouter()

    const [product, setProduct] = useState(null)

    useEffect(() => {
        if (id) {
            window.fetch('/api/avo/' + id)
                .then(response => response.json())
                .then((data) => setProduct(data))
        }
    }, [])

    return (
        <Layout>
            {product == null ? null : <ProductSummary product={product} />}
        </Layout>
    )
}

export default ProductItem