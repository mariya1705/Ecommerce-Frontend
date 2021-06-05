import React from "react"
import Layout from "../components/layout"
import { getCart } from "../utils/cart"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { formatPrice } from "../utils/format"

const cart = () => {
  const cart = getCart()
  return (
    <Layout>
      <Seo title="Cart" />
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <GatsbyImage
                  style={{
                    width: "100px",
                    height: "100px",
                    verticalAlign: "middle",
                  }}
                  image={
                    product.thumbnail.localFile.childImageSharp.gatsbyImageData
                  }
                />
                <span style={{ marginLeft: "14px", whiteSpace: "nowrap" }}>
                  {product.name}
                </span>
              </td>
              <td>{formatPrice(product.price_in_cent)}</td>
              <td style={{ textAlign: "center" }}>{product.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default cart
