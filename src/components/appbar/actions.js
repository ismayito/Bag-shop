import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionsAppDesktop, ActionsAppMobile, MyList } from "../../styles/appbar";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Colors } from "../../styles/theme";

 
 export default function Actions({matches}){
    const Components = matches ? ActionsAppMobile:ActionsAppDesktop
    return(
        <Components>
            <MyList type= "row">
            <ListItemButton sx={{justifyContent:"center"}}>
                <ListItemIcon sx={{display:"flex",justifyContent:"center",color:matches&& Colors.secondary}}>
                    <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                    <Divider orientation="vertical" flexItem></Divider>
                </ListItemIcon>
            </ListItemButton>
           
            <ListItemButton sx={{justifyContent:"center"}}>
                <ListItemIcon sx={{display:"flex",justifyContent:"center",color:matches&& Colors.secondary}}>
                    <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
                    <Divider orientation="vertical" flexItem></Divider>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{justifyContent:"center"}}>
                <ListItemIcon sx={{display:"flex",justifyContent:"center",color:matches&& Colors.secondary}}>
                    <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                    <Divider orientation="vertical" flexItem></Divider>
                </ListItemIcon>
            </ListItemButton>
        </MyList>
        </Components>
        
    )
 }