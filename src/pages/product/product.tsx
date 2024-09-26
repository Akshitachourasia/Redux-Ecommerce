import React from "react";
import { Product, useGetProductsQuery } from "../../services/api";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const { data: products, error, isLoading } = useGetProductsQuery();

  const handleViewDetails = (selectedItem: Product) => {
    navigate(`/dashboard/products/${selectedItem.id}`);
    console.log("Viewing details for:", selectedItem);
  };

  const handleAddToCart = (selectedItem: Product) => {
    const cart = [];
    cart.push(selectedItem);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    console.log("Adding to cart:", selectedItem);
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h5" color="error">
          Error: Unable to load products
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      {products?.length === 0 && (
        <Typography variant="h6">No Products Available</Typography>
      )}
      <Grid container spacing={4}>
        {products?.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                },
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image || "https://via.placeholder.com/200"}
                alt={product.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" noWrap>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" noWrap>
                  {product.description}
                </Typography>
                <Typography variant="h5" color="primary">
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 2,
                }}
              >
                <Button
                  onClick={() => handleViewDetails(product)}
                  variant="contained"
                  color="primary"
                >
                  View Details
                </Button>
                <Button
                  onClick={() => handleAddToCart(product)}
                  variant="outlined"
                  color="secondary"
                >
                  Add to Cart
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
