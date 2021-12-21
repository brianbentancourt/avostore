import React from "react"
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout'
import KawaiiHeader from '@components/KawaiiHeader'
import ProductList from '@components/ProductList'
import Link from 'next/link'

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
            <section>
                <Link href="/yes-or-no">
                    <a>¿Deberia comer un avo hoy?</a>
                </Link>
            </section>
            <ProductList products={productList} />
            <style jsx>{`
                section {
                text-align: center;
                margin-bottom: 2rem;
                }
            `}</style>
        </Layout>
    )
}

export default HomePage