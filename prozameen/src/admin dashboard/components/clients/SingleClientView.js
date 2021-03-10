import React from 'react'
import {Grid,Paper, Divider,Typography} from "@material-ui/core"
import ClientPosts from "./posts/ClientPosts"
import image from "../../images/user123.jpg"

function SingleClientView() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6} md={6} height="100vh">
                <Paper className="p-3" elevation={5}>
                    <Grid container justify="space-between" className="mb-2">
                        <Grid item lg={6} xsm={6} >
                        <Typography variant="h5">User Name</Typography>
                        </Grid>
                        <Grid item lg={6} xsm={6}>
                        <Typography variant="h5">Status</Typography>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container justify="space-around" className="my-3">
                        <Grid item xs={12} md={6}><img src={image} height="inherit" width="100vh"/></Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body2">User Id</Typography>
                            <Typography variant="body2">User Name</Typography>
                            <Typography variant="body2">User Email</Typography>
                            <Typography variant="body2" type="password">User Password</Typography>
                            <Typography variant="body2">User Status</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ClientPosts id={1} />
            </Grid>
        </Grid>
    )
}

export default SingleClientView
