import React from 'react';
import {Grid} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeCard from "./HomeCard"

function Home() {
    const [open, setOpen] = React.useState(false)
 
    return (
        <Grid container spacing={3}>
            <HomeCard title="Clients" name1="View All Clients" link1="/viewClients" name2="Approve Clients" link2="/approveClients"/>
            <HomeCard title="Articles" name1="View All Articles" link1="/viewArticles" name2="Add Article" link2="/addArticle"/>
            <HomeCard title="Packages" link1="/packages" name1="View Package"  link2="/packages" name2="Add Package"/>
            <HomeCard title="Posts" link1="/posts" name1="All Posts" link2="/approvePosts" name2="Approve Posts"/>
            <HomeCard title="Profile Setting" link1="/profile" name1="Setting" link2="/profile" name2="Manage Profile"/>
        </Grid>
    )
}

export default Home
