import React, { useState } from "react";
import "./SideBar.css";
import Profile from "../SideBarComponents/UserProfile/Profile";
import Contact from "../SideBarComponents/Contacts/Contact";
import Content from "../SideBarComponents/Content/Content";
import Campaign from "../SideBarComponents/Campaign/Campaign";
import EmailWarm from "../SideBarComponents/Email Warm Up/EmailWarm";
import Analytics from "../SideBarComponents/Analytics/Analytics";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import logo_light from "../Images/logo_light.svg";
import CallIcon from "@mui/icons-material/Call";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SchoolIcon from "@mui/icons-material/School";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Settings from "../SideBarComponents/Settings/Settings";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const drawerWidth = 278;

function SideBar() {
  const ismobile = useMediaQuery("(max-width: 1200px)");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const drawer = (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className="logoImg" src={logo_light} alt="" />
      </div>
      <Link
        to="/Dashboard/Profile"
        onClick={() => {
          setSidebarOpen(false);
        }}
      >
        <div className="fullImg">
          <Avatar src="/broken-image.jpg" />
        </div>
      </Link>
      <hr style={{ width: "210px", margin: "8px 24px" }} />
      <Link to="/workspace">
        <div className="EmsBar">
          <span>Ems</span>
        </div>
      </Link>
      <Divider />
      <List>
        {["Contacts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to="/Dashboard/Contacts">
              <ListItemButton
                className="ListBtn"
                onClick={() => {
                  setSidebarOpen(false);
                }}
              >
                <ListItemIcon>
                  {index % 1 === 0 ? (
                    <ContactsOutlinedIcon />
                  ) : (
                    <MailOutlineIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <List>
        {["Content"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to="/Dashboard/Content">
              <ListItemButton
                className="ListBtn"
                onClick={() => {
                  setSidebarOpen(false);
                }}
              >
                <ListItemIcon>
                  {index % 1 === 0 ? <MailOutlineIcon /> : <MailOutlineIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <List>
        {["Campaigns"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to="/Dashboard/Campaigns">
              <ListItemButton
                className="ListBtn"
                onClick={() => {
                  setSidebarOpen(false);
                }}
              >
                <ListItemIcon>
                  {index % 1 === 0 ? (
                    <BusinessCenterOutlinedIcon />
                  ) : (
                    <BusinessCenterIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <List>
        {["Email Warm Up"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to="/Dashboard/EmailWarmUp">
              <ListItemButton
                className="ListBtn"
                onClick={() => {
                  setSidebarOpen(false);
                }}
              >
                <ListItemIcon>
                  {index % 1 === 0 ? (
                    <ForwardToInboxIcon />
                  ) : (
                    <ForwardToInboxIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <List>
        {["Analytics"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to="/Dashboard/Analytics">
              <ListItemButton
                className="ListBtn"
                onClick={() => {
                  setSidebarOpen(false);
                }}
              >
                <ListItemIcon>
                  {index % 1 === 0 ? (
                    <LeaderboardOutlinedIcon />
                  ) : (
                    <MailOutlineIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <List>
        {["Settings"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to="/Dashboard/Settings">
              <ListItemButton
                className="ListBtn"
                onClick={() => {
                  setSidebarOpen(false);
                }}
              >
                <ListItemIcon>
                  {index % 1 === 0 ? (
                    <SettingsTwoToneIcon />
                  ) : (
                    <SettingsTwoToneIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} className="setbtn" />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />

      <div className="SupportBox">
        <button className="SupportDiv" style={{ paddingLeft: "36px" }}>
          <CallIcon />
          Book a Demo Call{" "}
        </button>
        <button className="SupportDiv" style={{ paddingLeft: "76px" }}>
          <SupportAgentIcon /> Support
        </button>
        <button className="SupportDiv" style={{ paddingLeft: "54px" }}>
          <MenuBookOutlinedIcon />
          Knowledgebase
        </button>
        <button className="SupportDiv" style={{ paddingLeft: "25px" }}>
          <SchoolIcon />
          Cold Email Marterclass
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {ismobile && (
        <AppBar
          position="static"
          style={{ backgroundColor: "rgb(255, 142, 0)" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setSidebarOpen(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {window.location.pathname.split("/").pop() === "EmailWarmUp"
                ? "Email Warm Up"
                : window.location.pathname.split("/").pop()}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        ></AppBar>
        {!ismobile && (
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
        )}
        <Routes>
          <Route path="Profile" element={<Profile />} />
          <Route path="Contacts" element={<Contact />} />
          <Route path="Content" element={<Content />} />
          <Route path="Campaigns" element={<Campaign />} />
          <Route path="EmailWarmUp" element={<EmailWarm />} />
          <Route path="Analytics" element={<Analytics />} />
          <Route path="Settings" element={<Settings />} />
        </Routes>
      </Box>
      <Drawer
        open={sidebarOpen}
        onClose={() => {
          setSidebarOpen(false);
        }}
      >
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Drawer>
    </div>
  );
}

export default SideBar;
