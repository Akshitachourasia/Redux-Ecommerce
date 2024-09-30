import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/api";
import {
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Grid,
  Container,
  Paper,
  Button,
} from "@mui/material";
import { styled } from '@mui/system';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
  padding: theme.spacing(4),
}));

const CustomCard = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: '0 16px 48px rgba(68, 88, 220, 0.15)',
  borderRadius: '20px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ProductDetails = () => {
  const { productId = "" } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useGetProductByIdQuery(productId);

  const handleBuyNow = () => {
    console.log("Product:", product);

  };

  return (
    <BackgroundContainer>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <CustomCard elevation={3}>
              <CardMedia
                component="img"
                height="400"
                image={product?.image || '/placeholder-image.png'}
                alt={product?.title || 'Product Image'}
              />
            </CustomCard>
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomCard elevation={3}>
              <CardContent sx={{ py: 4 }}>
                <Typography
                  variant="h4"
                  component="div"
                  className="text-primary font-bold mb-2"
                >
                  {product?.title || 'Product Name'}
                </Typography>
                <Typography variant="h6" className="text-secondary mb-3">
                  Price: ${product?.price || '0.00'}
                </Typography>
                <Typography variant="body1" className="mb-4">
                  {product?.description || 'Description goes here...'}
                </Typography>
                <Typography variant="body2" className="text-muted mb-2">
                  Category: {product?.category || 'Unknown'}
                </Typography>
                <Typography variant="body2" className="text-muted mb-2">
                  Rating: {product?.rating.rate || '0'} ({product?.rating.count || '0'} reviews)
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handleBuyNow}
                  sx={{ mt: 2, width: '100%' }} 
                >
                  Buy Now
                </Button>
              </CardContent>
            </CustomCard>
          </Grid>
        </Grid>
      </Container>
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <CircularProgress />
        </Box>
      )}
    </BackgroundContainer>
  );
};

export default ProductDetails;
