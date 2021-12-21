import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'

const mapProductsToCards = (products = []) =>
    products.map(({ name, id, price, image }) => (
        <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
            <Card
                as="a"
                header={name}
                image={<Image src={image} width={333} height={333} />}
                meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
            />
        </Link>
    ))

const ProductList = ({ products }) => (
    <Card.Group itemsPerRow={2} stackable>
        {mapProductsToCards(products)}
    </Card.Group>
)

export default ProductList