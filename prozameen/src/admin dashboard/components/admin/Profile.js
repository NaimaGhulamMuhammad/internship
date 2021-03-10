import React from 'react'
import {Grid, Button, Typography, Paper, Container, Avatar} from "@material-ui/core"
import PersonIcon from '@material-ui/icons/Person';
import Input from "../../customcomponents/Input"
function Profile( ) {
    const [show, setShow] = React.useState(false);
    const [user, setUser] = React.useState({firstName:'',lastName:'',email:'',password:'',iamge:''})
    const handleChange = (e) => {setUser({...user, [e.target.name]:e.target.value})}
    const handleSubmit = (e) => {
        e.preventDefauult()
        console.log(user)
    }
    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={5} className="p-5 d-flex flex-column justify-content-around align-items-center">
                <Avatar className="mb-3" color="black"><PersonIcon  /></Avatar>
                <Typography variant="h4" gutterBottom>Manage Your Profile</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Input half label="First Name" name="firstName" autoFocus type="text" handleChange={handleChange}/>
                        <Input half label="Last Name" name="lastName"  type="text" handleChange={handleChange}/>
                        <Input label="Email" name="email"  type="text" handleChange={handleChange}/>
                        <Input half label="Password " name="password"  type={show?'text':'password'} showPassword={()=>setShow(!show)} handleChange={handleChange}/>
                        <Input half label="Confirm Password " name="confirmPassword"  type={show?'text':'password'} handleChange={handleChange}/>
                        <Input half name="image"  type="file" handleChange={handleChange} />
                        <Grid item sm={6} xsm={12}>
                            <img src='require(../../images/profile.jpg)' alt="" className="rounded-circle" width="200" height="inherit"/>
                        </Grid>
                        <Grid item sm={12}>
                            <Button type="submit" className="bg-dark text-light py-3" fullWidth> Save Changes</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Profile
