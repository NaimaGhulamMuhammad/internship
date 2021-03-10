import React from 'react'
// Import For Text editor
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import from Material-Ui
import {TextField, Grid, Button, MenuItem, Paper, Typography} from "@material-ui/core"
function Article() {
    const [article, setData] = React.useState({type:'', title:'', img:'', description:'', longDes:''})
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("submitted successfully")
    }
    const [editorState, setEditorState] = React.useState(()=>EditorState.createEmpty())
    const onEditorStateChange = (e) => {
        setEditorState({e})
        console.log(e.getCurrentContent().getPlainText())
    }
    return (
        <Grid container spacing={4}>
            <Grid item md={1}/>
            <Grid item md={9}  component={Paper} elevation={4} className="px-5">
                <Typography variant="h4" align="center"> Add an Article</Typography>
        <form onSubmit={handleSubmit}>
            <TextField className="m-2 mb-3" variant="outlined" select label="Select Story Type" fullWidth onChange={(e) => setData({...article, type:e.target.value})}><MenuItem>type</MenuItem></TextField> 
            <TextField className=" m-2 mb-3" variant="outlined" type="text" label="Title" fullWidth onChange={(e) => setData({...article, title:e.target.value})} />
            <input className="m-2 mb-3" variant="filled" type="file" fullWidth onChange={(e) => setData({...article, img:e.target.value})} />
            <TextField className="m-2 mb-3" variant="outlined" type="text" multiline rows={7} label="Short Description" fullWidth onChange={(e) => setData({...article, description:e.target.value})} />
            <label>Long Descritption</label>
            {/* <Editor
                
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
            /> */}
            <Editor
                //editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                wrapperStyle={{}}
                editorStyle={{border:'solid #C0C0C0 1px',paddingLeft:10,height:270,}}
                toolbarStyle={{}}
                onEditorStateChange={onEditorStateChange}
            />
            <Button variant="contained" className="bg-dark text-light my-5" type="submit">Add</Button>
        </form>
        </Grid>
        <Grid item md={1}/>
        </Grid>
    )
}

export default Article
