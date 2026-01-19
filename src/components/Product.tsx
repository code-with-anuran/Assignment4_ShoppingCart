
import React, { useContext } from "react";
import { CartContext } from "../hooks/context/CreateContext";
import { Typography, Button, Box, Paper } from "@mui/material";
import type { ProductProps } from "../typescript/interface/interface";
import { toast } from "sonner";

const Product: React.FC<ProductProps> = ({ product }) => {
  const context = useContext(CartContext);

  if (!context) return null;

  return (
    <Box sx={{ width: 260, m: 1 }}>
      <Paper
        elevation={0}
        sx={{
          height: 460,
          borderRadius: 4,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",

          background: "linear-gradient(135deg, #f5f7ff, #eef2ff)",

          border: "1px solid #eaeaea",
          boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",
          transition: "0.3s ease",

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0px 14px 35px rgba(0,0,0,0.15)",
            borderColor: "#d6d6d6",
          },
        }}
      >

        <Box
          sx={{
            height: 320,
            width: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
          }}
        >
          <Box
            component="img"
            src={product.thumbnail}
            alt={product.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover", 
              borderRadius: 2,
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 0.5,
                display: "-webkit-box",
                overflow: "hidden",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {product.title}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: "#1976d2",
              }}
            >
              ₹{product.price}
            </Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              context.addItem(product)
              toast.success(`${product.title} add to cart`);
             }}

            sx={{
              mt: 2,
              borderRadius: 3,
              fontWeight: 700,
              textTransform: "none",
              py: 1,
              background: "linear-gradient(90deg, #1976d2, #1565c0)",
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0, #0d47a1)",
              },
            }}
          >
            Add To Cart
          </Button>
        </Box>
      </Paper>
    </Box>

  );
};

export default Product;