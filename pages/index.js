import React, { useState, useEffect } from "react"
import NavBar from '../components/NavBar'
import Link from "next/link"

const Home = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        window.fetch('/api/avo')
            .then(response => response.json())
            .then(({ data, length }) => setProductList(data))
    }, [])

    return (
        <div>
            <NavBar />
            <h1>Hola mundo!</h1>
            {
                productList.map(product =>
                    <div key={product.id}>

                        <Link href={`/product/${product.id}`}>
                            <a>{product.name}</a>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Home