import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";
//import styled from "@mui/material/styles"


export const FooterTitle=styled(Typography)(()=>({
    marginBottom:"1rem",
    textTransform:"uppercase",
}));
 export  const SubscribeTf=styled(TextField)(()=>({
    ".MuiInputLabel-root":{
        color:Colors.secondary
    },
    ".MuiInput-root":{
        borderBottom:`1px solid ${Colors.secondary}`
    },
    ".css-1x51dt5-MuiInputBase-input-MuiInput-input":{
        color:Colors.white,
    },
    fontSize:{sx:"12px", md:"16px", lg:"16px"}
 }))