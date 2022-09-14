import { IconButton } from "@mui/material";
import { AppbarContainer, Appheader } from "../../styles/appbar";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Actions from "./actions";

 export default function AppBarMobile({matches}){
    return(
        <AppbarContainer>
            <IconButton>
                <MenuOutlinedIcon></MenuOutlinedIcon>
            </IconButton>
            <Appheader variant="h4" textAlign={"center"} color={"#d1adcc"}>My Bags</Appheader>
            <IconButton>
            <SearchOutlinedIcon></SearchOutlinedIcon>
            </IconButton>
            <Actions matches={matches}></Actions>
            
        </AppbarContainer>
    )
 }