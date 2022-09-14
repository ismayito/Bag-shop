import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Colors } from "../theme";
export const PromotionsContainer = styled(Box)(({theme})=>({

    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    overflow: "hidden",
    padding:"20px 0px 20px 0px",
    background:Colors.secondary,
    [theme.breakpoints.down("md")]:{
        padding: "40px 0px 40px 0px",
        
    }
}));
export const MessageDisplay=styled(Typography)(({theme})=>({
    fontFamily:'"Montez","cursive',
    color:Colors.white,
    fontSize:"1.5rem",
    [theme.breakpoints.down("md")]:{
        fontSize:"3rem",
    }
}))