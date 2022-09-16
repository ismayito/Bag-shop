
import {Button,Container, Typography} from '@mui/material';
import {useEffect } from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import AppBar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import { FolderOffSharp } from '@mui/icons-material';
import Footer from './components/foooter';
import AppDrawer from './components/AppDrawer';
import { UIprovider } from './context/contexUI';
import SearchBox from './components/search';


function App() {
  useEffect(() => {
    document.title="E-bag shop"
  
   
  }, [])
  
  return (
    <ThemeProvider theme = {theme}>
 <Container maxWidth="xl" sx={{backgroundColor:"#fff"}}>
  <UIprovider>
      <AppBar></AppBar>
      <Banner></Banner>
      <Promotions></Promotions>
      <div>
        <Typography variant="h4" padding={"4px"} display="flex" alignItems="center" justifyContent={"center"}> Our Products</Typography>
      </div>
      <Products></Products>
      <Footer></Footer>
      <AppDrawer></AppDrawer>
      <SearchBox></SearchBox>
  </UIprovider>
      
    
      {/*
 appbar 
  promotions
  tittle
  products
  searchbox
  appdrawer*/}
    
    </Container>

    </ThemeProvider>
   
 
  );
}

export default App;
