import React from 'react'
import {Grid,List,ListItem, ListItemText, ListItemSecondaryAction, Divider,Card, CardHeader,CardContent, Typography, IconButton} from "@material-ui/core"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {Link } from "react-router-dom"

function HomeCard({
     title,name1,name2,link1,link2
}) {
    const item = [{name:name1,link:link1},{name:name2,link:link2}]
    return (
        <Grid item xs={12} lg={3} md={4} sm={6} >
            <Card className="bg-dark text-light" raised>
                <CardHeader title={title} />
                  <Divider light className="bg-light"/>
                <CardContent >
                    <List >
                        {item.map((data) => {
                            const {name, link} =  data;
                            return(
                                <ListItem key={name} className="text-decoration-none text-light" component={Link} to={link} ><ListItemText component={Typography} variant="caption" align="left" primary={name} /><ListItemSecondaryAction  >< ArrowRightAltIcon/></ListItemSecondaryAction></ListItem>
                               
                            )
                        })}
                    </List>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default HomeCard
