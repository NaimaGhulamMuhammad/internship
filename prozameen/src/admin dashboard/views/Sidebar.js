import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import TimelineIcon from "@material-ui/icons/Timeline";
import SubjectIcon from "@material-ui/icons/Subject";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DashboardIcon from "@material-ui/icons/Dashboard";
import {useHistory} from "react-router-dom"
// import { withRouter } from "react-router-dom";

import {
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

function SideBar({ close, open }) {
  const history = useHistory();
  const [item, setItem] = React.useState({});
  const handleOpen = (name) => {
    setItem({ [name]: !item[name] });
  };
  const Menu = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      onClick: () => history.push("/")
    },
    {
      name: "Articles",
      icon: <SubjectIcon />,
      subMenu: [
        {
          subItemText: "Add Articles",
          subItemOnClick: () => history.push("/addArticle")
        },
        {
          subItemText: "View Articles",
          subItemOnClick: () => history.push("/viewArticles")
        }
      ]
    },
    {
      name: "Clients",
      icon: <AssignmentIcon />,
      subMenu: [
        {
          subItemText: "Approve Client",
          subItemOnClick: () => history.push("/approveClients")
        },
        {
          subItemText: "View Client",
          subItemOnClick: () => history.push("/viewClients")
        }
      ]
    },

    {
      name: "Posts",
      icon: <TimelineIcon />,
      subMenu: [
        {
          subItemText: "Approve Posts",
          subItemOnClick: () => history.push("/approvePosts")
        },
        {
          subItemText: "View Posts",
          subItemOnClick: () => history.push("/viewPosts")
        }
      ]
    },

    {
      name: "Packages",
      icon: <AnnouncementIcon />,
      subMenu: [
        {
          subItemText: "Add Package",
          subItemOnClick: () => history.push("/packages")
        },
        {
          subItemText: "View Packages",
          subItemOnClick: () => history.push("/packages")
        }
      ]
    }
    
  ];
  return (
    <div className="bg-dark">
      <div className="logo ">
        <IconButton className=" text-light" onClick={close}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <List className="text-light">
        {Menu.map((navItem) => {
          const { name, icon, subMenu, onClick } = navItem;
          return (
            <div key={name}>
              {subMenu ? (
                <>
                  <ListItem key={name} button onClick={() => handleOpen(name)}>
                    <ListItemIcon className="text-light">{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                    {item[name] ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                  </ListItem>
                  <Collapse
                    in={item[name]}
                    unmountOnExit
                    component="li"
                  >
                    <List
                      className={`bg-white text-dark m-3 shadow rounded ${
                        open ? "" : "d-none"
                      }`}
                      disablePadding
                    >
                      {subMenu.map((subItem) => {
                        const { subItemText, subItemOnClick } = subItem;
                        return (
                          <ListItem
                            button
                            key={subItemText}
                            onClick={subItemOnClick}
                          >
                            <ListItemText>{subItemText}</ListItemText>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem button key={name} onClick={onClick}>
                  <ListItemIcon className="text-light">{icon}</ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </ListItem>
              )}
            </div>
          );
        })}
      </List>
      <div>
        <IconButton onClick={close} className="text-light flex-shrink-1">
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SideBar;
