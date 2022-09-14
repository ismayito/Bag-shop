import { Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";


export default function Products(){

    const theme=useTheme();
    const matches=useMediaQuery(theme.breakpoints.down("md"));
    const renderProducts=products.map((product)=>(
        <Grid item key ={product.id} container justifyContent={"center"}
        marginTop={"10px"}
        xs={12} sm={6} md={4}
        dispaly={"flex"} flexDirection={"column"} alignItems={"center"}>
            {matches ?<SingleProduct matches={matches} product={product}></SingleProduct>: <SingleProductDesktop matches={matches} product={product} ></SingleProductDesktop>}
             
        </Grid>
    ))

    return (
       <Container>
        <Grid container justifyContent={"center"} sx={{margin:"20px 4px 10px 4px"}}
        spacing={{xs:2 ,md:3}}
        >
            {renderProducts}
        </Grid>
       </Container>
    )
}