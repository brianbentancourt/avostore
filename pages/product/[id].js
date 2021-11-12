import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Layout from '@components/Layout'
import ProductSummary from '@components/ProductSummary'
import fetch from 'isomorphic-unfetch'

// pagina dinamica

export const getStaticPaths = async () => {
    const response = await fetch('https://avostore.vercel.app/api/avo')
    const { data } = await response.json()

    const paths = data.map(({ id }) => ({ params: { id } }))

    return {
        paths,
        // fallback: false incremental static generation
        // 404 for everything else
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const response = await fetch(`https://avostore.vercel.app/api/avo/${params.id}`)
    const product = await response.json()

    return {
        props: {
            product
        }
    }
}

const ProductItem = ({ product }) => {
    const {
        query: { id }
    } = useRouter()

    //const [product, setProduct] = useState(null)
    /* 
        useEffect(() => {
            if (id) {
                window.fetch('/api/avo/' + id)
                    .then(response => response.json())
                    .then((data) => setProduct(data))
            }
        }, []) */

    return (
        <Layout>
            {product == null ? null : <ProductSummary product={product} />}
        </Layout>
    )
}

export default ProductItem