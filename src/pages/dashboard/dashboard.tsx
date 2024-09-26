import React from "react";
import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  {
    id: 1,
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img18/apparel/Events/Cashback/HalfPriceMobile._CB483831027_.jpg",
    title: "Spring Sale - Up to 50% Off",
  },
  {
    id: 2,
    image:
      "https://d2xamzlzrdbdbn.cloudfront.net/BlogImages/322b9567-c69f-48d6-9f72-a733a8e9affa.jpg",
    title: "New Arrivals in Electronics",
  },
  {
    id: 3,
    image: "https://cdn3.mageplaza.com/media/general/MImGnKu.png",
    title: "Limited Time Offer - Free Shipping",
  },
];

const recommendedProducts = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://img.fruugo.com/product/7/59/744125597_max.jpg",
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 89.99,
    image: "https://m.media-amazon.com/images/I/61u1VALn6JL._SX522_.jpg",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: 69.99,
    image: "https://media.gamestop.com/i/gamestop/11105806_black_ALT03?$pdp$",
  },
  {
    id: 4,
    name: "Smartphone Stand",
    price: 15.99,
    image:
      "https://i5.walmartimages.com/asr/815fb378-672c-493d-971f-1b9688e18096.4aa8c33a78c57c1a21fa5ef0976b4c12.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
];

const Dashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 3, backgroundColor: "#f5f5f5" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Welcome Back!
        </Typography>
        <Paper
          sx={{
            padding: 2,
            mb: 3,
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Slider {...settings}>
            {carouselItems.map((item) => (
              <Box key={item.id} sx={{ textAlign: "center" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "16px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ marginTop: 1, fontWeight: "bold", color: "#007bff" }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Paper>

        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#333", fontWeight: "bold" }}
        >
          Recommended for You
        </Typography>
        <Grid container spacing={2}>
          {recommendedProducts.map((product) => (
            <>
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Paper
                  sx={{
                    padding: 2,
                    textAlign: "center",
                    borderRadius: "16px",
                    cursor: "pointer",
                    boxShadow:
                      "rgba(0, 0, 0, 0.15) 0px 14px 28px, rgba(0, 0, 0, 0.12) 0px 10px 10px",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ marginTop: 1, fontWeight: "bold", color: "#333" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Add to Cart
                  </Button>
                </Paper>
              </Grid>
            </>
          ))}
        </Grid>

        <Paper
          sx={{
            padding: 2,
            mt: 3,
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" sx={{ color: "#333", fontWeight: "bold" }}>
            Your Order History
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            You have no recent orders.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default Dashboard;