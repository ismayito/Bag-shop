import { styled } from "@mui/material/styles";
import { Typography,List, IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import Colors from "../theme";
import "@fontsource/montez"
//app container
export const AppbarContainer=styled(Box)(()=>({
    display: "flex",
    marginTop:4,
    justifyContent:"center",
    alignItems:"center",
    padding: "2px 8px"
}));
//app header
export const Appheader=styled(Typography)(()=>({
    padding: 4,
    flexGrow:1,
    fontSize:"4em",
    fontFamily:'"montez","cursive',
    color: Colors.secondary,
}));

 export const MyList=styled(List)(({type})=>({
      display:type === "row" ? "flex" : "block",
      flexGrow:3,
      justifyContent:"center",
     alignItems:"center",
 }));

 export const ActionsAppMobile = styled(Box)(()=>({
    display: "flex",
    position: "fixed",
    bottom:0,
    left:0,
    alignItems:"center",
    backgroundColor:"#333",
    width:"100%",
    borderTop:`1px solid ${Colors.border}`

 }));
 export const ActionsAppDesktop=styled(Box)(()=>({
    flexGrow:0,
 }));
 
export const DrawerButtonClose=styled(IconButton)(()=>({
    position: "absolute",
    zIndex:1999,
    left:"250px",
    top:10,
}))