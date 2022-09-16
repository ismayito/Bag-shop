
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
            <ProductFavButton isfav={1}>
                    <FavoriteBorderOutlined ></FavoriteBorderOutlined> 
                </ProductFavButton>
                {showOptions &&( <ProductAddToCart variant="contained"  show={showOptions}>  Add to cart</ProductAddToCart>)}
            <ProductActionsWrapper show={showOptions} >
                <Stack direction="column">
               
                <ProductActionButton>
                <ShareOutlinedIcon></ShareOutlinedIcon>
                </ProductActionButton>
                <ProductActionButton>
                    <FitScreenOutlinedIcon></FitScreenOutlinedIcon>
                </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductMeta product={product} matches={matches}></ProductMeta>
        
    </>
       
        
    )


}
