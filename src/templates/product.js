import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { formatPrice } from "../utils/format"
import { addToCart } from "../utils/cart"

const ProductTemplate = ({ data }) => {
  const [qty, setQty] = useState(1)

  console.log(data)

  return (
    <Layout>
      <GatsbyImage
        image={
          data.strapiProduct.thumbnail.localFile.childImageSharp.gatsbyImageData
        }
      />
      <h1>{data.strapiProduct.name}</h1>
      <p>{data.strapiProduct.description}</p>
      <p>Price: {formatPrice(data.strapiProduct.price_in_cent)}</p>
      <input
        type="number"
        value={qty}
        onChange={event => setQty(event.target.value)}
      />
      <button
        onClick={() => addToCart(data.strapiProduct, qty)}
        style={{ fontSize: "20px", padding: "24px", borderRadius: "2px" }}
      >
        Add To Cart
      </button>
    </Layout>
  )
}

export default ProductTemplate

export const query = graphql`
  query MyQuery($id: String!) {
    strapiProduct(id: { eq: $id }) {
      name
      description
      price_in_cent
      strapiId
      thumbnail {
        localFile {
          childImageSharp {
            gatsbyImageData(height: 640, width: 640)
          }
        }
      }
    }
  }
`
