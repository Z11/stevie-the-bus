'use client'

import React from "react"
import Image from "next/image"
import { Card, CardActionArea, CardContent, Typography, Grid } from "@mui/material"

const useStyles = {
  gridContainer: {
    width: "80vw",
    margin: "0 auto",
    mt: { xs: 3.5, sm: 4, md: 4.5, lg: 5 },
    mb: { xs: 4, sm: 4.5, md: 5, lg: 6 },
  },
  card: {
    maxWidth: { xs: 400, sm: 400, md: 500, lg: 600 },
  },
}

const Events = ({ events }) => {
  if (!events || events.length === 0) {
    return (
      <Grid container spacing={4} justifyContent="center" sx={useStyles.gridContainer}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            No events available at this time.
          </Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container spacing={4} justifyContent="center" sx={useStyles.gridContainer}>
      {events.map(
        ({
          event_image,
          event_title,
          event_description,
          event_link,
        }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={useStyles.card}>
              <CardActionArea href={event_link?.url} target="_blank" rel="noopener noreferrer">
                {event_image?.url && (
                  <Image
                    src={event_image.url}
                    alt={event_image.alt || event_title?.[0]?.text || 'Event'}
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 400px, (max-width: 1200px) 400px, 500px"
                    style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {event_title?.[0]?.text || 'Event'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="p">
                    {event_description?.[0]?.text || ''}
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
