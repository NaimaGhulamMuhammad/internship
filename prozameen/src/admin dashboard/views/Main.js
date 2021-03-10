import React from "react";
import AddArticle from "../components/articles/AddArticle";
import ViewArticle from "../components/articles/ViewArticle";
import ApproveClients from "../components/clients/ApproveClients"
import ViewClients from "../components/clients/ViewClients"
import Package from "../components/packages"
import Posts from "../components/posts/posts"
import Home from "../views/Home"
import Profile from "../components/admin/Profile"


import {Route, Switch, Link} from "react-router-dom"
const Main = () => {
  return (
  
    <Switch>
      <Route exact from="/admin" render={props => <Home {...props}/> } />
      <Route exact from="/addArticle" render={props => <AddArticle {...props}/> } />
      <Route exact from="/viewArticles" render={props => <ViewArticle {...props}/> } />
      <Route exact from="/viewClients" render={props => <ViewClients {...props}/> } />
      <Route exact from="/approveClients" render={props => <ApproveClients {...props}/> } />
      <Route exact from="/packages" render={props => <Package {...props}/> } />
      <Route exact from="/posts" render={props => <Posts {...props}/> } />
      <Route exact from="/approvePosts" render={props => <Posts {...props}/> } />
      <Route exact from="/profile" render={props => <Profile {...props}/> } />
    </Switch>
 
  );
};
export default Main;
