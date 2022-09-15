
import { styled } from "@mui/material/styles";
import { Box ,Button} from "@mui/material";
import { Typography } from '@mui/material';
import { Colors } from "../theme";
export const BannerContainer= styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    width:"100%",
    height: "100%",
    paddding:"0px",
    background:Colors.light_gray,
    [theme.breakpoints.down("sm")]:{
        flexDirection:"column",
        alignItems:"center"
    }

}));
 export const BannerImage=styled("img")(({src,theme})=>({
    src:`url(${src})`,
    width:"500px",
    [theme.breakpoints.down("md")]:{
        width:"350px",

    },
    [theme.breakpoints.down("sm")]:{
        width:"320px",
        height: "300",
        
    }
   
 }));
 export const BannerContent=styled(Box)(()=>({
    flexDirection:"column",
    display:"flex",
    maxWidth:420,
    padding: "30px",
    justifyContent:"center"
 }));
 export const BannerTitle=styled( Typography)(({theme})=>({
    lineHeight:1.5,
    fontSize:"72px",
    marginBottom:"20px",
    [theme.breakpoints.down("sm")]:{
        fontSize:"42px"
    }

 }));
  export const BannerDescription= styled( Typography)(({theme})=>({
    lineHeight:1.25,
    letterSpacing:1.25,
    marginBottom:"3em",
    [theme.breakpoints.down("sm")]:{
      lineHeight:1.15,
      letterSpacing:1.15,  
      marginBottom:"1.15em"
    }

  }))
  export const BannerShopButton= styled(Button,
    {shouldForwardProp:(prop)=>prop!=="color",
     name:"myShopButton", slot:"root",
    overridesResolver:(props,styles)=>[
        props.color =="primary" && styles.primary,
        props.color=="secondary" && styles.secondary,
    ]
    })(({theme})=>({
        padding: "20px 0px",
        color:Colors.white,
        fontSize:"16px",
        fontWeight:"bold",
        [theme.breakpoints.down("sm")]:{
            padding:"10px 0px",
            fontSize:"14px"

        }

  }))