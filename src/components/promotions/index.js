
import { Box, Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MessageDisplay, PromotionsContainer } from "../../styles/promotions";
import { useEffect, useState,useRef } from "react";

const messages=[
    "20% discount on the first order",
    "Free delivery for orders above $200",
    " Gifts to win for the first 10 customers",
]
export default function Promotions(){
    const theme=useTheme()

    const matches=useMediaQuery(theme.breakpoints.down("md"));
    const containerRef=useRef();
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
        <PromotionsContainer ref={containerRef}>
            <Slide
            container={containerRef.current}
            direction={ show ? "left":"right"}
            in={show}
            timeout={{enter:500,exit:100}}
            >
            <Box justifyContent={"center"} display={"flex"} alignItems={"center"}>
                <MessageDisplay color={"white"} fontSize={{md:32,lg:32}}>
                    {messages[messageIndex]}
                </MessageDisplay>
            </Box>
            </Slide>
           
        </PromotionsContainer>
    )
}