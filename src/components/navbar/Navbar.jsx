
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import { useTheme } from '@emotion/react';
// import { logo, logo2 } from '../../utils/images';
// import { Link } from 'react-router-dom';

// const pages = [{
//   id: 1,
//   title: "Home",
//   route:""
// },
// {
//   id: 2,
//   title: "About",
//   route:"about"
//   },
//   {
//     id: 3,
//     title: "Products",
//     route:""
//   },
//   {
//     id: 4,
//     title: "Blog",
//     route:"blog"
//   },
//   {
//     id: 5,
//     title: "Contact",
//     route:"contact"
//   }];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const theme = useTheme();

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar sx={{ backgroundColor: "white" }} position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//                 marginTop: "8px"
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem sx={{ width: "100vw", alignSelf: "center", marginTop: 1 }} key={page} onClick={handleCloseNavMenu}>
//                   <Link to={`/${page.route}`}>
//                   <Typography color={theme.palette.secondary.main} textAlign="center">{page.title}</Typography>
//                   </Link>

//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
          
//           <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
//             <img src={logo2} height={"50px"} width={"150px"} alt="logo" />
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 component={Link}
//                 to={`/${page.route}`}
//                 sx={{ my: 2, color: theme.palette.secondary.main, display: 'block', marginLeft: "20px" }}
//               >
//                 {page.title}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useTheme } from '@emotion/react';
import { logo2 } from '../../utils/images';
import { Link } from 'react-router-dom';

const pages = [
  { id: 1, title: "Home", route: "" },
  { id: 2, title: "About", route: "about" },
  { id: 3, title: "Products", route: "" },
  { id: 4, title: "Blog", route: "blog" },
  { id: 5, title: "Contact", route: "contact" }
];

const productPages = [
  { id: 1, title: "All Products", route: "product1" },
  { id: 2, title: "Basket Cable Tray", route: "product2" },
  { id: 3, title: "Perforated Cable Tray", route: "product3" },
  { id: 4, title: "Ladder Cable Tray", route: "product4" },
  { id: 5, title: "Raceway Cable Tray", route: "product5" },
  { id: 6, title: "GI Lintel", route: "product6" },
  { id: 7, title: "High Tech Channel", route: "product7" }

];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElProducts(null);
  };

  const handleOpenProductsMenu = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  return (
    <AppBar sx={{ backgroundColor: "white" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                marginTop: "8px"
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.route}`}>
                    <Typography color={theme.palette.secondary.main} textAlign="center">
                      {page.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <img src={logo2} height={"50px"} width={"150px"} alt="logo" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              page.title === "Products" ? (
                <Button
                  key={page.id}
                  onClick={handleOpenProductsMenu}
                  sx={{ my: 2, color: theme.palette.secondary.main, display: 'block', marginLeft: "20px" }}
                >
                  {page.title}
                </Button>
              ) : (
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={`/${page.route}`}
                  sx={{ my: 2, color: theme.palette.secondary.main, display: 'block', marginLeft: "20px" }}
                >
                  {page.title}
                </Button>
              )
            ))}
            <Menu
              anchorEl={anchorElProducts}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElProducts)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'none', md: 'block' },
              }}
            >
              {productPages.map((product) => (
                <MenuItem key={product.id} onClick={handleCloseNavMenu}>
                  <Link to={`/${product.route}`}>
                    <Typography color={theme.palette.secondary.main} textAlign="center">
                      {product.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;



