import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { Grid } from "@material-ui/core"

const getEvents = graphql`
  query {
    prismic {
      allEventss {
        edges {
          node {
            event {
              event_description
              event_datetime
              event_title
              event_link {
                ... on PRISMIC__ExternalLink {
                  url
                }
              }
              event_image
              event_imageSharp {
                size
                childImageSharp {
                  fluid(quality: 100, maxWidth: 500, maxHeight: 500) {
                    src
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
`

const useStyles = makeStyles({
  gridContainer: {
    width: "80vw",
    margin: "0 auto",
  },
  gridItem: {
    align: "center",
  },
  ["@media screen and (min-width: 300px) and (max-width: 600px)"]: {
    root: {
      maxWidth: 400,
    },
    gridContainer: {
        marginTop: "1.75rem",
        marginBottom: "2rem",
      },
  },
  ["@media screen and (min-width: 600px) and (max-width: 1100px)"]: {
    root: {
      maxWidth: 400,
    },
    gridContainer: {
        marginTop: "2rem",
        marginBottom: "2.25rem",
      },
  },
  ["@media screen and (min-width: 1100px) and (max-width: 1600px)"]: {
    root: {
      maxWidth: 500,
    },
    gridContainer: {
        marginTop: "2.25rem",
        marginBottom: "2.50rem",
      },
  },
  ["@media (min-width: 1600px)"]: {
    root: {
      maxWidth: 600,
    },
    gridContainer: {
        marginTop: "2.5rem",
        marginBottom: "3rem",
      },
  },
})

const Events = () => {
  const classes = useStyles()

  const events = useStaticQuery(getEvents).prismic.allEventss.edges[0].node
    .event

  return (
    <Grid
      container
      spacing={4}
      justify="center"
      className={classes.gridContainer}
    >
      {events.map(
        ({
          event_imageSharp,
          event_title,
          event_description,
          event_link,
        }, index) => (
          <Grid item xs={12} sm={6} md={4} align="center" key={index}>
            <Card className={classes.root} >
              <CardActionArea href={event_link.url} target="_blank">
                <Img
                  fluid={event_imageSharp.childImageSharp.fluid}
                  alt="Event Card Picture"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {event_title[0].text}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {event_description[0].text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  )
}

export default Events
