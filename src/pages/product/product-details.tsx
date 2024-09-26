import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/api";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

const ProductDetails = () => {
  const { productId = "" } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useGetProductByIdQuery(productId);

  return (
    <Box className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {isLoading ? (
        <CircularProgress />
      ) : (
        product && (
          <Card className="max-w-md w-full shadow-lg rounded-lg overflow-hidden">
            <CardMedia
              component="img"
              height="240"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                className="text-gray-800 font-bold"
              >
                {product.title}
              </Typography>
              <Typography variant="h6" className="text-gray-600 mt-2">
                Price: <span className="font-semibold">${product.price}</span>
              </Typography>
              <Typography variant="body2" className="text-gray-700 mt-4">
                Description: {product.description}
              </Typography>
              <Typography variant="body2" className="text-gray-500 mt-2">
                Category: {product.category}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-2">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </Typography>
            </CardContent>
          </Card>
        )
      )}
    </Box>
  );
};

export default ProductDetails;
