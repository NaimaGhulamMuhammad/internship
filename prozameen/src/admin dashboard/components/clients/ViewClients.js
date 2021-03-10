import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import dummyData from "../../dataset/data"
import {Typography, Divider,Paper,Dialog,Button, DialogContent, DialogContentText,DialogActions, DialogTitle } from '@material-ui/core';
import {Link,useHistory } from "react-router-dom"

const ViewClients = (props) => {
  const history = useHistory()
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  // const [clientData, setClientData] = React.useState({name:'',email:'',image:'',description:''})
  // const handleEdit = () =>{
  //   history.push('/article/edit');
  // }
  
  const clients = dummyData.filter((registeredClients)=>registeredClients.status==='verified')
  const rows = clients.map((data) => ({uid:data.uid,title:data.title,email:data.email,image:<img src={data.image} height="100vh"/>,desc:data.desc,date:data.date,actions:<><Typography variant="body1" display="inline" >View More</Typography><ArrowRightAltIcon/><Button  className="my-1 bg-danger text-light" onClick={handleOpen} >Delet User</Button></>}))
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'uid',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Name',
        field: 'title',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Image',
        field: 'image',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Description',
        field: 'desc',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 80
      },
      {
        label: 'Action',
        field: 'actions',
        sort: 'asc',
        width: 250
      },
    ],
    rows: rows
  };


  return (
    <Paper className="p-4">
      <div className="text-center"><h2>All Clients</h2></div>
      <Divider /><br />
      <Dialog open={open} onClose={handleClose} >
         <DialogTitle className="bg-dark text-light">Delete Article</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Are You Sure? DO You want to delete this User
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <MDBDataTableV5
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={data}
      pagingTop
      searchTop
      searchBottom={false}
      //materialSearch
      />
    </Paper>
  );
}

export default ViewClients;