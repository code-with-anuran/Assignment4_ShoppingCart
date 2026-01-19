import { Box, Typography, Container, Stack, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        background: "linear-gradient(90deg, #14b8a6, #0ea5e9)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 1 }}>
              Mobile Store
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
      </Container>
    </Box>
  );
};

export default Footer;
