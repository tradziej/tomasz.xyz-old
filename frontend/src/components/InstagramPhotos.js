import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Photo = styled.li`
  display: inline-block;
  padding-right: 10px;
`

const Image = styled.img`
  height: 120px;
`

const InstagramPhotos = ({ photos }) => {
  const items = photos.map((photo, index) => (
    <Photo key={index}>
      <a href={photo.url}>
        <Image src={photo.src} />
      </a>
    </Photo>
  ))

  return <List>{items}</List>
}

export default InstagramPhotos
