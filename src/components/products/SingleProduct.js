
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FitScreenOutlinedIcon from '@mui/icons-material/FitScreenOutlined';
import { Stack } from "@mui/material"
import {    ProductActionsWrapper, Product, ProductActionButton, ProductAddToCart, ProductFavButton, ProductImage, Productmetawrapper } from "../../styles/product"
import ProductMeta from "./ProductMeta"




export default function SingleProduct ({product, matches}){
    

   

    return (
    <>
      
    <Product >
            <ProductImage src={product.image}></ProductImage>
           
            
            <ProductMeta product={product} matches={matches}></ProductMeta>
           
            <ProductActionsWrapper >
                <Stack direction="row">
                <ProductFavButton isfav={1}>
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
            <ProductAddToCart > Add to cart</ProductAddToCart>
            
        </Product>
        
        </>
        
        
    )


}
