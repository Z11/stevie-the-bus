import React, { useState } from "react"
import Img from "gatsby-image"
import { Lightbox } from "react-modal-image"
import useGallery from "./useGallery"
import Grid from "./Grid"
import Tile from "./Tile"

const imgStyles = {
  css: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    transition: "transform 0.5s, filter 0.25s",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "saturate(1.3)",
    },
  },
}

const Gallery = () => {
  const images = useGallery()
  const [showImageIndex, setShowImageIndex] = useState()
  const toggleTile = index => {
    setShowImageIndex(index)
  }

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile
            key={image.id}
            onClick={() => {
              toggleTile(index)
            }}
          >
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </Tile>
        ))}
      </Grid>
      {console.log("showImageIndex: ", showImageIndex)}
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            toggleTile(undefined)
          }}
        />
      )}
    </div>
  )
}

export default Gallery
