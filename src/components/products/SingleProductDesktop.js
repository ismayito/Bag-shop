
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FitScreenOutlinedIcon from '@mui/icons-material/FitScreenOutlined';
import { Stack } from "@mui/material"
import {    ProductActionsWrapper, Product, ProductActionButton, ProductAddToCart, ProductFavButton, ProductImage, Productmetawrapper } from "../../styles/product"
import ProductMeta from "./ProductMeta";
import { useState } from "react";



export default function SingleProductDesktop ({product, matches}){
    const [showOptions, setShowOptions]= useState(false);

    const handleMouseEnter=()=>{
        setShowOptions(true)
    }
    const handleMouseLeave=()=>{
        setShowOptions(false)
    }
   

    return (
    <>
  
     <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <ProductImage src={product.image}></ProductImage>
            <ProductFavButton isFav={1}>
                    <FavoriteBorderOutlined ></FavoriteBorderOutlined> 
                </ProductFavButton>
                {showOptions &&( <ProductAddToCart variant="oulined"  show={showOptions}>  Add to cart</ProductAddToCart>)}
            <ProductMeta product={product} matches={matches}></ProductMeta>

            <ProductActionsWrapper show={showOptions} >
                <Stack direction="column">
                <ProductFavButton isFav={1}>
                    <FavoriteBorderOutlined ></FavoriteBorderOutlined> 
                </ProductFavButton>
                <ProductActionButton>
                <ShareOutlinedIcon></ShareOutlinedIcon>
                </ProductActionButton>
                <ProductActionButton>
                    <FitScreenOutlinedIcon></FitScreenOutlinedIcon>
                </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
           
       
            
            
        </Product>
        
    </>
       
        
    )


}
