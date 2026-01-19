
import React, { useContext } from "react";
import { CartContext } from "../hooks/context/CreateContext";
import { Typography, IconButton, Stack, Button, Box, Paper } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import type { CartProductProps } from "../typescript/interface/interface";
import { toast } from "sonner";

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const context = useContext(CartContext);

  if (!context) return null;

  return (

    <Paper
      elevation={3}
      sx={{
        display: "flex",
        gap: 2,
        p: 2,
        mb: 2,
        borderRadius: 3,
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={product.thumbnail}
        alt={product.title}
        sx={{
          width: 90,
          height: 90,
          borderRadius: 2,
          objectFit: "cover",
          border: "1px solid #e0e0e0",
        }}
      />

     
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Price: ₹{product.price} | Total: ₹{product.price * product.quantity}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
        >
  
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ddd",
              borderRadius: 3,
              px: 1,
              py: 0.5,
              backgroundColor: "#fafafa",
            }}
          >
            <IconButton
              size="small"
              onClick={() => context.decreaseQty(product.id)}
              disabled={product.quantity <= 1}
              sx={{
                backgroundColor: "#e3f2fd",
                "&:hover": { backgroundColor: "#bbdefb" },
                mr: 1,
              }}
            >
              <RemoveIcon sx={{ color: "#1976d2" }} />
            </IconButton>

            <Typography sx={{ fontWeight: 600, minWidth: 30, textAlign: "center" }}>
              {product.quantity}
            </Typography>

            <IconButton
              size="small"
              onClick={() => context.increaseQty(product.id)}
              disabled={product.quantity >= 10}
              sx={{
                backgroundColor: "#e3f2fd",
                "&:hover": { backgroundColor: "#bbdefb" },
                ml: 1,
              }}
            >
              <AddIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Box>

          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              context.removeItem(product.id)
              toast.error(`${product.title} removed from cart`);
             }}
            sx={{
              borderRadius: 3,
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Remove
          </Button>
        </Stack>
      </Box>
    </Paper>

  );
};

export default CartProduct;