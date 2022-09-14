import {  ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, Appheader, MyList } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";
import { Colors } from "../../styles/theme";

export default function AppBarDesktop({matches}){
   
    return(
        <AppbarContainer>
            <Appheader color={"#d1adcc"}>My Bags</Appheader>
            <MyList type= "row">
                <ListItemText primary="Home"></ListItemText>
                <ListItemText primary="Categories"></ListItemText>
                <ListItemText primary="Products"></ListItemText>
                <ListItemText primary="Contact Us"></ListItemText>
            <ListItemButton>
                <ListItemIcon>
                <SearchIcon></SearchIcon>
                </ListItemIcon>
            </ListItemButton>
            </MyList>
            <Actions matches={matches}></Actions>
        </AppbarContainer>
    )
 }