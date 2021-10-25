import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

const ProductItem = () => {
    const {
        query: { id }
    } = useRouter()

    const [productDetail, setProductDetail] = useState(null)

    useEffect(() => {
        window.fetch('/api/avo/' + id)
            .then(response => response.json())
            .then((data) => setProductDetail(data))
    }, [])

    return (
        <div>
            <h1>pagina del producto: {id}</h1>
            {
                productDetail &&
                <>
                    <p>{productDetail.attributes.description}</p>
                </>
            }

        </div>
    )
}

export default ProductItem