import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system"; 
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "leaflet/dist/leaflet.css";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  basketCableTray,
  f1,
  f10,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  f9,
  file,
  gridImage,
  icons1,
  icons2,
  icons3,
  ladderCableTray,
  perforatedCableTray,
  racewaysCableTray,
} from "../utils/images";
import ContactUs from "../components/common/ContactUs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { productList } from "../data/productList";
import CustomButton from "../components/button/Button";
import { RecentBlogData } from "../data/recentBlogData";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HomepageSliderData, testimonials } from "../data/homepageData";

const Homepage = () => {
  const theme = useTheme();

  const HomeCarosoulComponent = () => {
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      appendDots: (dots) => (
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul style={{ margin: 0, padding: 0, display: "flex" }}>{dots}</ul>
        </Box>
      ),
      customPaging: (i) => (
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: 0.4,
            margin: "0 5px",
          }}
        />
      ),
    };

    return (
      <Slider {...settings}>
        {HomepageSliderData.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: isMdUp ? "88vh" : isSmUp ? "45vh" : "40vh",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={`Slide ${index}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the entire box
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />
            <Container
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
              }}
            >
              <Typography variant="h2" component="h1" gutterBottom>
                {item.title}
              </Typography>
              <Typography
                variant="h6"
                color={"white"}
                component="p"
                gutterBottom
              >
                {item.description}
              </Typography>
            </Container>
          </Box>
        ))}
      </Slider>
    );
  };
  const WelcomeSection = () => {
    return (
      <Box
        sx={{
          backgroundColor: "#ffba00",
          backgroundImage: `url(${gridImage})`,
          padding: "50px 0",
          // position: "relative",
          height: "100%",
          p: {
            xs: theme.customPadding.xs,
            sm: theme.customPadding.sm,
            md: theme.customPadding.md,
            lg: theme.customPadding.lg,
          },
        }}
      >
        <Typography
          sx={{ textAlign: "center" }}
          color={theme.palette.secondary.main}
          fontWeight={"500"}
          textTransform="capitalize"
          variant="h1"
          data-aos="fade-left"
          data-aos-duration={theme.animationSpeed.medium}
        >
          Welcome
        </Typography>
        <Typography
          variant="body1"
          color={"black"}
          textAlign={"center"}
          sx={{ marginBottom: 4, wordSpacing: "2px" }}
        >
          {" "}
          Incorporated in the year 2001, we Hutaib Electricals are amongst the
          prominent names engaged in Manufacturing , Exporting and Supplying of
          a wide range of Cable Trays all over the world.
        </Typography>

        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ height: "100%" }}>
            {/* Text Section */}
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
                color={"#333"}
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                Hutaib Electricals
              </Typography>
              <Typography
                variant="body1"
                color={"black"}
                sx={{ marginBottom: 4 }}
              >
                We are Pune based Exporters, Manufacturers, and Suppliers of
                Cable Trays, Raceways, WireMesh & industrial fabrications.
              </Typography>
              <Typography
                variant="body1"
                color={"black"}
                sx={{ marginBottom: 4, wordSpacing: "2px" }}
              >
                The company has expertise in Manufacturing and Exporting
                products like perforated cable trays, ladder type cable trays,
                wire mesh cable trays, raceways, basket trays, junction boxes, &
                industrial fabrications, and their accessories such as bends,
                elbows, tees, cross, reducers, and many more. Hutaib Electricals
                is located at Burhani Industrial Area in Pune which is a
                renowned industrial area.
              </Typography>
              <Box sx={{backgroundColor:'red', width:"250px"}}>
              <CustomButton
                    btnLabel={"ABOUT US"}
                    bgHoverColor={theme.palette.secondary.main}
                    bgColor={theme.palette.light.main}
                  textColor={theme.palette.light.main}
                  link={'about'}
                  />
              </Box>
            </Grid>

            {/* Image container */}
            <Grid
              item
              xs={12}
              md={5}
              container
              sx={{
                height: "auto",
                // backgroundColor: "red",
                height: "400px",
                alignItems: "center",
              }}
            >
              <img src={file} width={"100%"} height={"100%"}/>
            </Grid>
          </Grid>

          {/* Vertical "About Us" Text */}
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "rotate(-90deg)",
              transformOrigin: "left top 0",
              marginLeft: "-20px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            About Us
          </Typography>
        </Container>
      </Box>
    );
  };

  const Expert = () => {
    return (
      <Box
        sx={{
          p: {
            xs: theme.customPadding.xs,
            sm: theme.customPadding.sm,
            md: theme.customPadding.md,
            lg: theme.customPadding.lg,
          },
          marginTop:3
        }}
      >
        <Typography
          sx={{ textAlign: "center" }}
          color={theme.palette.secondary.main}
          fontWeight={"500"}
          textTransform="capitalize"
          variant="h3"
          data-aos="fade-left"
          data-aos-duration={theme.animationSpeed.medium}
        >
          We are expert in
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              icon: icons1,
              title: "Manufacturing Products",
              description:
                "All products & accessories to achieve maximum quality and prompt delivery. The company has recruited a team of qualified and experienced technocrats who have acquired expertise in this art.",
            },
            {
              icon: icons2,
              title: "Exporting Products",
              description:
                "We encompass a state-of-art infrastructure which includes modern manufacturing unit, quality control unit and packing unit.",
            },
            {
              icon: icons3,
              title: "Research & Development",
              description:
                "From our vast experiences and knowledge, we have acquired skills through which we can develop and serve our clients with Custom Made Cable Trays and Accessories.",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: 3,
                  padding: 2,
                  boxSizing: "border-box",
                  backgroundColor: "white", // Ensure background is defined to avoid overlap
                  overflow: "hidden", // Prevent content overflow
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    flexGrow: 1,
                    padding: 2,
                  }}
                >
                  <img src={item.icon} width={100} alt={item.title} />
                  <Typography variant="h4" sx={{ marginTop: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ marginTop: 2 }}>
                    {item.description}
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "auto", paddingTop: 2 }}>
                  <CustomButton
                    btnLabel={"Read More"}
                    bgHoverColor={theme.palette.secondary.main}
                    bgColor={theme.palette.primary.main}
                    textColor={theme.palette.primary.main}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  const ManufacturingProducts = () => {
    const products = [
      { title: "Raceways / Trunking", img: racewaysCableTray, link: "#" },
      { title: "Ladder Cable Trays", img: ladderCableTray, link: "#" },
      { title: "Perforated Cable Trays", img: perforatedCableTray, link: "#" },
      { title: "Basket Tray", img: basketCableTray, link: "#" },
    ];
    return (
      <Container
        sx={{
          p: {
            xs: theme.customPadding.xs,
            sm: theme.customPadding.sm,
            md: theme.customPadding.md,
            lg: theme.customPadding.lg,
          },
        }}
      >
          <Typography
          sx={{ textAlign: "center" }}
          color={theme.palette.secondary.main}
          fontWeight={"500"}
          textTransform="capitalize"
          variant="h3"
          data-aos="fade-left"
          data-aos-duration={theme.animationSpeed.medium}
        >
          Manufacturing Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="220"
                  image={product.img}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.title}
                  </Typography>
                  <CustomButton
                    btnLabel={"Read More"}
                    textColor={theme.palette.light.main}
                    bgColor={theme.palette.primary.main}
                    bgHoverColor={theme.palette.secondary.main}
                  />
                  {/* <Button variant="contained" color="primary" href={product.link}>
                  Read More
                </Button> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };

  // const OurRecentBlogs = () => {
  //   return (
  //     <Box
  //       marginTop={5}
  //       sx={{
  //         p: {
  //           xs: theme.customPadding.xs,
  //           sm: theme.customPadding.sm,
  //           md: theme.customPadding.md,
  //           lg: theme.customPadding.lg,
  //         },
  //       }}
  //     >
  //       <Typography
  //         sx={{ textAlign: "center" }}
  //         color={theme.palette.secondary.main}
  //         fontWeight={"500"}
  //         textTransform="capitalize"
  //         variant="h3"
  //         data-aos="fade-left"
  //         data-aos-duration={theme.animationSpeed.medium}
  //       >
  //         Our Recent Blogs
  //       </Typography>
  //       <Carousel
  //         useKeyboardArrows={true}
  //         autoPlay
  //         infiniteLoop
  //         showIndicators={false}
  //       >
  //         {RecentBlogData.map((blog, index) => (
  //           <Box
  //             key={index}
  //             sx={{
  //               display: "flex",
  //               flexDirection: {
  //                 xs: "column",
  //                 md: "row",
  //               },
  //               alignItems: "start",
  //               justifyContent: "space-between",
  //               gap: 2,
  //               width: "100%",
  //               height: "auto",
  //             }}
  //           >
  //             <Box
  //               sx={{
  //                 width: {
  //                   xs: "100%",
  //                   md: "50%",
  //                 },

  //                 height: {
  //                   xs: "100%",
  //                   md: "50%",
  //                   lg: "300px",
  //                 },
  //               }}
  //             >
  //               <Box
  //                 sx={{
  //                   border: `2px solid ${theme.palette.primary.main}`,
  //                   width: "100%",
  //                   height: "100%",
  //                   borderRadius: "5px",
  //                   overflow: "hidden",
  //                 }}
  //               >
  //                 <img
  //                   src={blog.image}
  //                   alt={blog.title}
  //                   style={{
  //                     width: "100%",
  //                     height: "auto",
  //                     objectFit: "contain",
  //                     borderRadius: "5px",
  //                   }}
  //                 />
  //               </Box>
  //             </Box>
  //             <Box
  //               sx={{
  //                 width: {
  //                   xs: "100%",
  //                   md: "50%",
  //                 },
  //                 padding: {
  //                   xs: "10px 0",
  //                   md: "0 20px",
  //                 },
  //               }}
  //             >
  //               <Typography
  //                 variant="h4"
  //                 color={theme.palette.primary.main}
  //                 textAlign="start"
  //               >
  //                 {blog.title}
  //               </Typography>
  //               <Typography marginTop={2} textAlign="start">
  //                 {blog.date}
  //               </Typography>
  //               <Box>
  //                 <Typography marginTop={2} textAlign="start">
  //                   {blog.description} <Link>Read more</Link>
  //                 </Typography>
  //               </Box>
  //             </Box>
  //           </Box>
  //         ))}
  //       </Carousel>
  //     </Box>
  //   );
  // };


  const MyCustomButton = styled("button")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  }));
  
  const OurRecentBlogs = () => {
    return (
      <Box
        marginTop={5}
        sx={{
          p: {
            xs: theme.customPadding.xs,
            sm: theme.customPadding.sm,
            md: theme.customPadding.md,
            lg: theme.customPadding.lg,
          },
        }}
      >
        <Typography
          sx={{ textAlign: "center" }}
          color={theme.palette.secondary.main}
          fontWeight={"500"}
          textTransform="capitalize"
          variant="h3"
          data-aos="fade-left"
          data-aos-duration={theme.animationSpeed.medium}
        >
          Our Recent Blogs
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Carousel
            useKeyboardArrows
            autoPlay
            infiniteLoop
            showIndicators={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <MyCustomButton onClick={onClickHandler} style={{ position: "absolute", bottom: "-50px", left: "calc(50% - 60px)" }}>
                  Prev
                </MyCustomButton>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <MyCustomButton onClick={onClickHandler} style={{ position: "absolute", bottom: "-50px", right: "calc(50% - 60px)" }}>
                  Next
                </MyCustomButton>
              )
            }
          >
            {RecentBlogData.map((blog, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  alignItems: "start",
                  justifyContent: "space-between",
                  gap: 2,
                  width: "100%",
                  height: "auto",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "50%",
                    },
                    height: {
                      xs: "100%",
                      md: "50%",
                      lg: "300px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      border: `2px solid ${theme.palette.primary.main}`,
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        borderRadius: "5px",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "50%",
                    },
                    padding: {
                      xs: "10px 0",
                      md: "0 20px",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    color={theme.palette.light.main}
                    textAlign="start"
                  >
                    {blog.title}
                  </Typography>
                  <Typography marginTop={2} textAlign="start">
                    {blog.date}
                  </Typography>
                  <Box>
                    <Typography marginTop={2} textAlign="start">
                      {blog.description} <Link>Read more</Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    );
  };
  const OurProducts = () => {
    return (
      <Box>
        <Typography
          sx={{ textAlign: "center" }}
          color={theme.palette.secondary.main}
          fontWeight={"500"}
          textTransform="capitalize"
          variant="h3"
          data-aos="fade-left"
          data-aos-duration={theme.animationSpeed.medium}
        >
          Our Products
        </Typography>
        <Grid container spacing={2}>
          {productList.map((item, index) => (
            <Grid item lg={3} md={3} sm={6} xs={12} key={index}>
              <Box
                sx={{
                  height: "300px",
                  marginLeft: "0px",
                  borderWidth: "10px",
                  borderTop: "1px solid",
                  borderRight: "1px solid",
                  borderBottom: "1px solid",
                  borderLeft: "1px solid",
                  borderColor: theme.palette.secondary.main,
                  marginBottom: "10px",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover .overlay": {
                    backgroundColor: theme.palette.primary.main,
                  },
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                }}
                data-aos={index === 1 || index === 4 ? "flip-up" : "flip-down"}
                data-aos-duration={
                  index === 1 || index === 4
                    ? theme.animationSpeed.medium
                    : theme.animationSpeed.fast
                }
              >
                <img
                  src={item.image}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    transition: "transform 0.3s ease",
                    objectFit: "cover",
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    padding: "15px 0px",
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    textAlign: "center",
                    color: "white",
                    zIndex: 10,
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <Typography
                    color={theme.palette.light.main}
                    sx={{ textTransform: "capitalize" }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  const TestimonialComponent = () => {
    const StyledCard = styled(Card)(({ theme }) => ({
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(2),
      justifyContent: "center",
      textAlign: "center",
      margin: "0 auto",
      width: "80%",
      border: `2px solid ${theme.palette.primary.main}`,
    }));
    const StyledAvatar = styled(Avatar)(({ theme }) => ({
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(2),
      display: "flex",
      alignSelf: "center",
    }));

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: "0",
    };

    return (
      <Container>
        <Typography
          sx={{ textAlign: "center" }}
          color={theme.palette.light.main}
          fontWeight={"500"}
          textTransform="capitalize"
          variant="h3"
          data-aos="fade-left"
          data-aos-duration={theme.animationSpeed.medium}
        >
          Testimonials
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <StyledCard>
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <StyledAvatar alt={testimonial.name} src={testimonial.img} />
                  <Typography
                    variant="h4"
                    color={theme.palette.secondary.main}
                    gutterBottom
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.secondary.main}
                  >
                    {testimonial.review}
                  </Typography>
                </CardContent>
              </StyledCard>
            </div>
          ))}
        </Slider>
      </Container>
    );
  };





  const Franchies = () => {
    const images = [f1, f2, f3, f4, f5, f6, f7, f8, f9];
  
    const ImageContainer = styled("div")(({ theme }) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px", // Adjust height as needed
    }));
  
    const StyledImage = styled("img")(({ theme }) => ({
      maxHeight: "100%", // Ensures image fits within the container
      maxWidth: "100%", // Ensures image fits within the container
      margin: "0 auto", // Center the image horizontally
    }));
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 2, // Add margin if needed
          }}
        >
          <img src={f10} alt="Franchise logo" style={{ maxHeight: "100px", maxWidth: "100%" }} />
        </Box>
  
        <Slider {...settings}>
          {images.map((img, index) => (
            <ImageContainer key={index}>
              <StyledImage src={img} alt={`Image ${index + 1}`} />
            </ImageContainer>
          ))}
        </Slider>
      </Container>
    );
  };

  return (
    <div>
      <Navbar />
      <Box marginTop={0} width={"100%"} overflow={"hidden"}>
        <HomeCarosoulComponent />
      </Box>
      <WelcomeSection />
      <Expert />
      <ManufacturingProducts />
      <OurProducts />
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          p: {
            xs: theme.customPadding.xs,
            sm: theme.customPadding.sm,
            md: theme.customPadding.md,
            lg: theme.customPadding.lg,
          },
          marginTop:3
        }}
      >
        <TestimonialComponent />
      </Box>
      <Box sx={{      marginTop:3}}>
        <Franchies />
      </Box>
      <Box sx={{backgroundColor:"#ffba00"}}>
      <OurRecentBlogs />
</Box>
      
      <ContactUs />
      <Box marginTop={20}></Box>
      <Footer />
    </div>
  );
};

export default Homepage;
