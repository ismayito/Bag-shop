import { Drawer, List, ListItemText ,ListItemButton, Divider} from "@mui/material";
import { ContexUi } from "../../context/contexUI";
import { DrawerButtonClose } from "../../styles/appbar";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Colors } from "../../styles/theme";
import { lighten } from "polished";

 
 export default function AppDrawer(){
     
    const {drawer,setdrawer}=ContexUi();

    return (
        <>
         {drawer && ( <DrawerButtonClose className="testing"><CloseOutlinedIcon onClick={()=>setdrawer(false)} 
         sx={{fontSize:"2.5rem", color:lighten(0.09,Colors.primary) }}></CloseOutlinedIcon></DrawerButtonClose>)}
       <Drawer open={drawer}>
        <List>
            <ListItemButton>
                <ListItemText>Home</ListItemText>
            </ListItemButton>
            <Divider orientation="horizontal"  variant="middle"></Divider>
            <ListItemButton>
                <ListItemText>Categories</ListItemText>
            </ListItemButton>
            <Divider orientation="horizontal" variant="middle"></Divider>
            <ListItemButton>
                <ListItemText>Products</ListItemText>
            </ListItemButton>
            <Divider orientation="horizontal" variant="middle"></Divider>
            <ListItemButton>
                <ListItemText>About us us</ListItemText>
            </ListItemButton>
            <Divider orientation="horizontal" variant="middle"></Divider>
            
            <ListItemButton>
                <ListItemText>Contact us</ListItemText>
            </ListItemButton>

        </List>
       </Drawer>
       </>
    )
 }