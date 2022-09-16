import { IconButton } from "@mui/material";
import { AppbarContainer, Appheader } from "../../styles/appbar";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Actions from "./actions";
import { ContexUi } from "../../context/contexUI";

 export default function AppBarMobile({matches}){
     const {setdrawer ,setSearchBox} = ContexUi();
    return(
        <AppbarContainer>
            <IconButton onClick={()=>setdrawer(true)}>
                <MenuOutlinedIcon></MenuOutlinedIcon>
            </IconButton>
            <Appheader variant="h4" textAlign={"center"} color={"#d1adcc"}>My Bags</Appheader>
            <IconButton onClick={()=>setSearchBox(true)}>
            <SearchOutlinedIcon ></SearchOutlinedIcon>
            </IconButton>
            <Actions matches={matches}></Actions>
            
        </AppbarContainer>
    )
 }