import React, { useState } from "react"
import Img from "gatsby-image"
import { Lightbox } from "react-modal-image"
import useGallery from "./useGallery"
import Grid from "./Grid"
import Tile from "./Tile"
import styles from "../../css/galleryImages.module.css"

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
            <Img
              alt={image.name}
              fluid={image.fluid}
              className={styles.imgHover}
            />
          </Tile>
        ))}
      </Grid>
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
