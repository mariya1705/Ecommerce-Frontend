import React, { useState, useContext } from "react"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { CartContext } from "../context/CartContext"

import Layout from "../components/layout"

import { formatPrice } from "../utils/format"

const ProductTemplate = ({ data }) => {
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)

  console.log("ProductTemplate.render data", data)
  return (
    <Layout>
      <GatsbyImage
        image={
          data.strapiProduct.thumbnail.localFile.childImageSharp.gatsbyImageData
        }
      />
      <h2>{data.strapiProduct.name}</h2>
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
  query ProductTemplateQuery($id: String!) {
    strapiProduct(id: { eq: $id }) {
      strapiId
      name
      price_in_cent
      description
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
