import  { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../hooks/context/CreateContext";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Button,
  Container,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Navbar = () => {
  const context = useContext(CartContext);

  if (!context) return null;

  const { cartCount } = context;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        background: "linear-gradient(90deg, #14b8a6, #0ea5e9)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
        >
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            style={{ textDecoration: "none", color: "white" }}
            sx={{ fontWeight: 800, letterSpacing: 1 }}
          >
             Mobile Store
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Button
              component={NavLink}
              to="/"
              sx={{
                color: "white",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 3,
                px: 2,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.20)",
                },
              }}
            >
              Products
            </Button>

            <IconButton
              component={NavLink}
              to="/cart"
              sx={{
                ml: 1,
                color: "white",
                backgroundColor: "rgba(255,255,255,0.15)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.25)",
                },
              }}
            >
              <Badge badgeContent={cartCount} color="warning">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
