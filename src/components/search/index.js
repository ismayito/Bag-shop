import { IconButton, Slide } from "@mui/material";
import { ContexUi } from "../../context/contexUI";
import { SearchBoxContainer, SearchTextField } from "../../styles/search";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox(){

const {searchBox, setSearchBox}= ContexUi();
    return(
        <Slide in={searchBox} timeout={500} direction="down">
            <SearchBoxContainer>
                <SearchTextField color="primary" variant="standard" fullWidth placeholder="search..."></SearchTextField>
                <IconButton>
                    <SearchIcon sx={{
                        fontSize :{ xs:"2rem", md:"3rem"},
                        
                    }} color="secondary"></SearchIcon>
                </IconButton>
                <IconButton sx={{position:"absolute",top:10, right:10}} onClick={()=>setSearchBox(false)}>
                    <CloseOutlinedIcon sx={{fontSize:"4rem"}} color="secondary"></CloseOutlinedIcon>
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}