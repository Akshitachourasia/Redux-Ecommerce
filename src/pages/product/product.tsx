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
  Rating,
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
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");

    if (existingCart.find((item: Product) => item.id === selectedItem.id)) {
      alert("Item already in cart");
    } else {
      existingCart.push(selectedItem);
      localStorage.setItem("cartItems", JSON.stringify(existingCart));
      alert("Item added to cart");
    }
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
                cursor: "pointer",
                display: "flex",
                width: "80%",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                },
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "cover", padding: 8 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" noWrap>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" noWrap>
                  Description : {product.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" noWrap>
                  Category : {product.category}
                </Typography>
                <Typography variant="h5" color="primary">
                  Price : ${product.price.toFixed(2)}
                </Typography>
                <Typography variant="body2" color="textSecondary" noWrap>
                  Rating : {product.rating?.rate}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                >
                  <Rating
                    name={`rating-${product.id}`}
                    value={product.rating?.rate || 0}
                    precision={0.5}
                    readOnly
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginLeft: 1 }}
                  >
                    ({product.rating?.count} reviews)
                  </Typography>
                </Box>
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
