import React from 'react'
import {Grid} from "@material-ui/core"
import SinglePost from "./SinglePost"

function ClientPosts() {
  return (
    <Grid container spacing={4}>

      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      
    </Grid>
  )
}

export default ClientPosts
