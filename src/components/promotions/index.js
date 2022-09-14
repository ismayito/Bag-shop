
import { Box, Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MessageDisplay, PromotionsContainer } from "../../styles/promotions";
import { useEffect, useState } from "react";

const messages=[
    "20% discount on the first order",
    "Free delivery for orders above $200",
    " Gifts to win for the first 10 customers",
]
export default function Promotions(){
    const theme=useTheme()

    const matches=useMediaQuery(theme.breakpoints.down("md"));
    const [messageIndex,setMessageIndex]= useState(0);
    const [show, setShow]=useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            setShow(false)
        },3000)
        const intervalId=setInterval(()=>{
            setMessageIndex((i)=>(i+1)%messages.length)
            setShow(true)
            setTimeout(()=>{
                setShow(false)
            },3000)
            
        },4000);
        return ()=>{
            clearInterval(intervalId)
        }
    },[])

    return(
        <PromotionsContainer>
            <Slide
            direction={ show ? "left":"right"}
            in={show}
            >
            <Box justifyContent={"center"} display={"flex"} alignItems={"center"}>
                <MessageDisplay color={"white"}>
                    {messages[messageIndex]}
                </MessageDisplay>
            </Box>
            </Slide>
           
        </PromotionsContainer>
    )
}