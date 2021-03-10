import React from 'react'
import {Grid} from "@material-ui/core"
import AddPackage from "./AddPackage"
import ViewPackage from "./ViewPackage"

function Package() {
    return (
        <Grid container spacing={5}>
            <Grid item><AddPackage /></Grid>
        </Grid>
    )
}

export default Package
