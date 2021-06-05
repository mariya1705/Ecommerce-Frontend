import React from "react"

import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { formatPrice } from "../utils/format"
import { fromProductsToUrl } from "../utils/products"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h2>Shop</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridGap: "20px",
      }}
    >
      {data.allStrapiProduct.nodes.map(product => (
        <Link
          style={{ color: "#000000", textDecoration: "none" }}
          to={fromProductsToUrl(product.slug)}
        >
          <div>
            <div>
              <GatsbyImage
                image={
                  product.thumbnail.localFile.childImageSharp.gatsbyImageData
                }
              />
            </div>

            <h3 style={{ marginBottom: 0 }}>{product.name}</h3>
            {formatPrice(product.price_in_cent)}
          </div>
        </Link>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allStrapiProduct {
      nodes {
        id
        description
        created_at
        name
        price_in_cent
        strapiId
        slug
        thumbnail {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 200, height: 200)
            }
          }
        }
      }
    }
  }
`
