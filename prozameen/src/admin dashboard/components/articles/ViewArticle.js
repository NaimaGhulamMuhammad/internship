import React from 'react';
import { MDBDataTable } from 'mdbreact';

import Image from '../../images/article.jpg';

import { Divider, Dialog,Button, DialogContent, DialogContentText,DialogActions, DialogTitle } from '@material-ui/core';
import AddArticle from "./AddArticle"
const ViewArticle = (props) => {
  const { history } = props;
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/article/edit');
    // console.log(history.path);
  }
  const data = {
    columns: [
      {
        label: 'Article Title',
        field: 'title',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Image',
        field: 'image',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Long Description',
        field: 'longDesc',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 150
      },
    ],
    rows: [
      { 
        title: 'Digital Transformation In Companies',
        image: <img height="75%" width="75%" src={Image} />,
        longDesc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: '11/18/2020 3:46:50 PM',
        action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
          <Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
      },
      {
        title: 'Digital Transformation In Companies',
        image: <img height="75%" width="75%" src={Image} />,
        longDesc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: '11/18/2020 3:46:50 PM',
        action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
          <Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
      },
      {
        title: 'Digital Transformation In Companies',
        image: <img height="75%" width="75%" src={Image} />,
        longDesc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: '11/18/2020 3:46:50 PM',
        action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
          <Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
      },
      {
        title: 'Digital Transformation In Companies',
        image: <img height="75%" width="75%" src={Image} />,
        longDesc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: '11/18/2020 3:46:50 PM',
        action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
          <Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
      },
      {
        title: 'Digital Transformation In Companies',
        image: <img height="75%" width="75%" src={Image} />,
        longDesc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: '11/18/2020 3:46:50 PM',
        action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
          <Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
      },
    ]
  };


  return (
    <div style={{ backgroundColor: 'white', padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0' }}>
      <div style={{ textAlign: 'center' }}><h2>Article View</h2></div>
      <Divider /><br />
      <Dialog open={show} onClose={handleClose} >
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
      <MDBDataTable style={{ backgroundColor: 'white' }}
        // striped
        // bordered
        noBottomColumns
        responsive
        hover
        data={data}
      />
    </div>
  );
}

export default ViewArticle;