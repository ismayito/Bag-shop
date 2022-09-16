import {  ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, Appheader, MyList } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";
import { Colors } from "../../styles/theme";
import { ContexUi } from "../../context/contexUI";

export default function AppBarDesktop({matches}){
    
    const {setSearchBox}= ContexUi();
    return(
        <AppbarContainer>
            <Appheader color={"#d1adcc"}>My Bags</Appheader>
            <MyList type= "row">
                <ListItemText primary="Home"></ListItemText>
                <ListItemText primary="Categories"></ListItemText>
                <ListItemText primary="Products"></ListItemText>
                <ListItemText primary="About us"></ListItemText>
                <ListItemText primary="Contact Us"></ListItemText>
            <ListItemButton>
                <ListItemIcon  onClick={()=>setSearchBox(true)}>
                <SearchIcon></SearchIcon>
                </ListItemIcon>
            </ListItemButton>
            </MyList>
            <Actions matches={matches}></Actions>
        </AppbarContainer>
    )
 }