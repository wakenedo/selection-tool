import { Box, Icon, Stack } from '@mui/material'
import React from 'react'
import Image from 'next/image'

//Assets
import LinkedIn from '../../assets/SocialMediaIcons/iconscout.com/icon/linkedin.png'
// https://iconscout.com/icon/github-159
import GitHub from '../../assets/SocialMediaIcons/iconscout.com/icon/github.png'


const SocialLinks = () => {
  return (
    <Stack
    direction='row'
    alignItems='center'
    margin='20px'
    padding='20px'
    
    >
      <Image  src={LinkedIn} />
      <Image src={GitHub} />

    </Stack>
  )
}

export default SocialLinks