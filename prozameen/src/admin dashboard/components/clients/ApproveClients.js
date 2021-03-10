import React from 'react';
import { MDBDataTable } from 'mdbreact';

import dummyData from "../../dataset/data"
import { Divider,Paper,Dialog,Button, DialogContent, DialogContentText,DialogActions, DialogTitle } from '@material-ui/core';
const ApproveClients = (props) => {
  //const { history } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  // const [clientData, setClientData] = React.useState({name:'',email:'',image:'',description:''})
  // const handleEdit = () =>{
  //   history.push('/article/edit');
  // }
  
  const rows = dummyData.map((data) => ({uid:data.uid,title:data.title,email:data.email,image:<img src={data.image} height="100vh"/>,desc:data.desc,date:data.date,actions:<><Button variant="contained" className="my-1 bg-dark text-light"  onClick={()=>{}}>Approve</Button><Button variant="contained" className="my-1 bg-danger text-light" onClick={handleOpen} >Reject</Button></>}))
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
        width: 200
      },
      {
        label: 'Description',
        field: 'desc',
        sort: 'asc',
        width: 200
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
        width: 100
      },
    ],
    rows: rows
  };


  return (
    <Paper className="p-4">
      <div className="text-center"><h2>Approve/Delete Clients</h2></div>
      <Divider /><br />
      <Dialog open={open} onClose={handleClose} >
         <DialogTitle>Delete Article</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Are You Sure? You want to delete this
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
      <MDBDataTable
      hover 
     scrollY
     maxHeight="60vh"
      data={data} 
      noBottomColumns
      responsive
      />
    </Paper>
  );
}

export default ApproveClients;