import { graphql, useStaticQuery } from "gatsby"

const useGallery = () => {
  const data = useStaticQuery(graphql`
    {
      prismic {
        allGallerys {
          edges {
            node {
              body {
                ... on PRISMIC_GalleryBodyMeg_1 {
                  fields {
                    image
                    imageSharp {
                      id
                      name
                      publicURL
                      childImageSharp {
                        fluid(quality: 90) {
                          ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.prismic.allGallerys.edges[0].node.body[0].fields.map(node => ({
    ...node.imageSharp.childImageSharp,
    id: node.imageSharp.id,
    name: node.imageSharp.name,
    publicURL: node.imageSharp.publicURL,
  }))
}

export default useGallery
