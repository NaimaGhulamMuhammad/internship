import React from 'react'
import {Grid,Paper, Divider,Typography,Button} from "@material-ui/core"
import image from "../../images/user123.jpg"
import Input from "../../customcomponents/Input"
function AddPackage() {
    return (
        <Grid item xs={12} lg={6} md={4} >
                <Paper className="p-4" elevation={5}>
                    <Typography variant="h4" gutterBottom align="center" className="my-4">Add Package</Typography>
                    <Divider/>
                    <form>
                        <Grid container spacing={3}>
                            <Input label="Package title" name="packageTitle" autoFocus type="text" handleChange={()=>{}}/>
                            <Input label="Package Type" name="type"  select type="select" handleChange={()=>{}}>
                                <option name="package1" value="Package 1"/>
                                <option name="package2" value="Package 2"/>
                                </Input>
                                <Input label="Description" multiline rows={4} name="desc"/>
                                <Grid item   container justify="flex-end">
                                <Grid item sm={12}>
                                    <Button variant="contained" fullWidth className="bg-dark text-light mr-3" type="submit"> Add</Button>
                                </Grid>
                                </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
    )
}

export default AddPackage
