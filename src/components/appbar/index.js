
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBarDesktop from "./appbardesktop";
import AppBarMobile from "./appbarmobile";
export default function  AppBar(){
    const theme=useTheme()

    const matches = useMediaQuery(theme.breakpoints.down("md"));
    
    return(
        <>
        {matches ? <AppBarMobile matches={matches}></AppBarMobile >:<AppBarDesktop matches={matches}></AppBarDesktop>}
        </>

    )

}