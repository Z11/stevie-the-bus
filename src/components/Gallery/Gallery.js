'use client'

import React, { useState } from "react"
import Image from "next/image"
import { Lightbox } from "react-modal-image"
import Grid from "./Grid"
import Tile from "./Tile"
import styles from "../../css/galleryImages.module.css"

const Gallery = ({ images }) => {
  const [showImageIndex, setShowImageIndex] = useState()
  
  const toggleTile = index => {
    setShowImageIndex(index)
  }

  if (!images || images.length === 0) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>No gallery images available.</div>
  }

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile
            key={image.id || index}
            onClick={() => {
              toggleTile(index)
            }}
          >
            <Image
              alt={image.alt || `Gallery image ${index + 1}`}
              src={image.url}
              fill
              sizes="(max-width: 600px) 15rem, (max-width: 1600px) 16rem, 24rem"
              style={{ objectFit: 'cover' }}
              className={styles.imgHover}
            />
          </Tile>
        ))}
      </Grid>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].url}
          onClose={() => {
            toggleTile(undefined)
          }}
        />
      )}
    </div>
  )
}

export default Gallery
