import { graphql, useStaticQuery } from "gatsby"

const useGallery = () => {
  // TODO: Make "content/gallery" dynamic somehow..
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
                      name
                      publicURL
                      childImageSharp {
                        fluid(quality: 100, maxWidth: 2000) {
                          ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
  let i = 0
  return data.prismic.allGallerys.edges[0].node.body[0].fields.map(node => ({
    id: i++,
    ...node.imageSharp.childImageSharp,
    name: node.imageSharp.name,
    publicURL: node.imageSharp.publicURL,
  }))
}

export default useGallery