import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product";

export default function ProductMeta({matches, product}){

    return(
        <ProductMetaWrapper>
            <Typography variant={ matches?"h6":"h5"}>{product.name}</Typography>
        <Typography variant = { matches? "caption":"body1"}>
            ${product.price}
        </Typography>
        </ProductMetaWrapper>
        
    )
}