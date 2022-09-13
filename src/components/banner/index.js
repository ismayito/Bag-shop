import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

export default function Banner(){
    const theme=useTheme()

    const matches=useMediaQuery(theme.breakpoints.down("md"));
    return(
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png"></BannerImage>
            <BannerContent>
                <Typography variant="h6">Huge collection</Typography>
                <BannerTitle variant="h2">
                    New Bags
                </BannerTitle>
                <BannerDescription variant="subtitle">
                   
                    A bag is a kind of soft container. It can hold or carry things. It may be made from cloth, leather, plastic, 
                or paper. Many bags are disposable but some are made to use for a long time
                    
               
                </BannerDescription>
            </BannerContent>
            
        </BannerContainer>
       
    )
}