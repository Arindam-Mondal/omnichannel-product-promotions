import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import Link from "next/link";

const drawerWidth = 240;

function Layout(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h4">Omni Channel Promotion</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Link href="/create-offer">
            <List>
              <ListItem key="Create Offer" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create Offer" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <main>{props.children}</main>
      </Box>
    </Box>
  );
}

export default Layout;
