import { Box, Grid, List, ListItemText, Typography, Stack, Button } from "@mui/material";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

 export default function Footer(){
    return(
      <Box
      
       sx={{background:Colors.shaft,
        color:Colors.white,
       p:{xs:4,md:10},
       pt:"12px",
       pb:"12px",
       fontSize:{xs:"12px",md:"16px"}
       }}>
      <Grid container spacing={2}  justifyContent={"center"}>
        <Grid item md={6} lg={4}>
            <FooterTitle variant="body">
                about us
            </FooterTitle>
            <br></br>
            <Typography variant="caption2">
                We are the best in dealing with Bags!. When it comes to bags we assure you that you  are all sorted.
                We have got all categories of bags ranging from school bags, laptop bags, travel bags, ladies and Gents bags.
                Try our products and experience the difference.
            </Typography>
            <Box sx={{mt:4,color:Colors.dove_gray}}>
                <FacebookOutlinedIcon sx={{mr:1}}></FacebookOutlinedIcon>
                <TwitterIcon sx={{mr:1}}></TwitterIcon>
                <InstagramIcon sx={{mr:1}}></InstagramIcon>
            </Box>
        </Grid>
        <Grid item md={6} lg={2}>
            <FooterTitle variant="body1">information</FooterTitle>
            <List>
                <ListItemText><Typography lineHeight={2} variant="caption2"> about us</Typography></ListItemText>
                <ListItemText><Typography lineHeight={2} variant="caption2"> contact us us</Typography></ListItemText>
                <ListItemText><Typography lineHeight={2} variant="caption2"> Privacy &amp;policy us</Typography></ListItemText>
                <ListItemText><Typography lineHeight={2} variant="caption2"> Terms &amp; conditions</Typography></ListItemText>
            </List>
            
        </Grid>
        <Grid item md={6} lg={2}>
            <FooterTitle variant="body1">my account</FooterTitle>
            <List>
                <ListItemText><Typography lineHeight={2} variant="caption2"> Login</Typography></ListItemText>
                <ListItemText><Typography lineHeight={2} variant="caption2"> My Cart</Typography></ListItemText>
                <ListItemText><Typography lineHeight={2} variant="caption2"> My account</Typography></ListItemText>
                <ListItemText><Typography lineHeight={2} variant="caption2"> Wishlist</Typography></ListItemText>
            </List>
            
        </Grid>
        
        <Grid item md={6} lg={4}>
            <FooterTitle variant="body1">newsletter</FooterTitle>
           <Stack>
            <SubscribeTf sx={{color:Colors.white}} variant="standard"  label="Enter email"></SubscribeTf>
            <Button  variant="contained"
               sx={{ mt:4, mb:4,}}
               startIcon = {<SendIcon sx={{color:Colors.white}}></SendIcon>}
               >
               
                
                subscribe
            </Button>
           </Stack>
            
        </Grid>
      </Grid>
      </Box>)
 }