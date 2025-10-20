import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Avatar,
  Grid,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import logo from "./assets/images/logo.jpeg";
import banner from "./assets/images/background.png";
import MenuSection from "./components/MenuSection";
import { Email, LocationOn, Phone, WhatsApp } from "@mui/icons-material";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); // Close drawer on mobile after clicking
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Menu", id: "menu" },
    { label: "About", id: "about" },
    {
      label: "Order Now",
      id: "order-now",
      link: "https://wa.me/+8801332129714",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#F14900", zIndex: 1000 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              cursor: "pointer",
            }}
            onClick={() => handleScroll("home")}
          >
            <RestaurantIcon />
            Taj Mahal Takeaway
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {navItems.slice(0, 3).map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href="https://wa.me/+8801332129714"
              sx={{
                backgroundColor: "orange",
                "&:hover": { backgroundColor: "#e68900" },
              }}
            >
              Order Now
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "flex", sm: "none" }, color: "white" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <Avatar
            src={logo}
            alt="Taj Mahal Takeaway Logo"
            sx={{
              width: { xs: 80, sm: 100, md: 200 },
              height: { xs: 80, sm: 100, md: 200 },
              mx: "auto",
              mb: 2,
              border: "2px solid white",
            }}
          />
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  onClick={() =>
                    item.id === "order-now"
                      ? window.open(
                          "https://wa.me/+8801332129714",
                          "_blank"
                        )
                      : handleScroll(item.id)
                  }
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Add top spacing for fixed navbar */}
      <Toolbar />

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          position: "relative",
          backgroundImage: banner && `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
          py: { xs: 8, sm: 12, md: 16 },
          pt: { xs: 8, sm: 8, md: 8 },
          px: 2,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)", // dark overlay
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Avatar
            src={logo}
            alt="Taj Mahal Takeaway Logo"
            sx={{
              width: { xs: 80, sm: 100, md: 200 },
              height: { xs: 80, sm: 100, md: 200 },
              mx: "auto",
              mb: 2,
              border: "2px solid white",
            }}
          />
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
          >
            Taj Mahal Takeaway SINCE 1997
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 1, mb: 3, fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Kebabs, Naan, Nihari & Rolls — Flavor Unseen
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                mx: 1,
                backgroundColor: "orange",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
              onClick={() => handleScroll("menu")}
            >
              View Menu
            </Button>
            <Button
              href="https://wa.me/+8801332129714"
              variant="outlined"
              sx={{
                mx: 1,
                color: "white",
                borderColor: "white",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              Order Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Menu Section */}
     

      <MenuSection />

      {/* About Section */}
      <Box
        id="about"
        sx={{
          position: "relative",
          background: "linear-gradient(135deg, #fff8f5 0%, #ffece6 100%)",
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 4 },
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              textAlign: { xs: "center", md: "left" },
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.3rem" },
              color: "#8B0000",
            }}
          >
            Our Story
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.7,
            }}
          >
            Founded in <strong>1997</strong> by a student of North South
            University of Dhaka, Bangladesh,
            <strong> Taj Mahal Takeaway </strong> has been delighting customers
            with authentic Indian Kebabs, Rolls, and Nihari for over two
            decades.
            <br />
            <br />
            We cherish our roots while embracing modern culinary techniques —
            blending the finest ingredients with passion and precision. Whether
            it’s a quick takeaway or an outdoor catering event, we bring the
            rich taste of India to your table every time.
          </Typography>
        </Container>

        {/* Decorative Circles */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            left: -120,
            width: 250,
            height: 250,
            backgroundColor: "rgba(255,165,0,0.15)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -80,
            right: -100,
            width: 220,
            height: 220,
            backgroundColor: "rgba(139,0,0,0.1)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
      </Box>

      {/* contact */}
      <Box
        id="contact"
        sx={{
          // background: "linear-gradient(135deg, #fff0e0 0%, #ffe6d5 100%)",
          py: { xs: 10, sm: 14 },
          px: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative floating circles */}
        <Box
          sx={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(241, 73, 0, 0.1)",
            top: -50,
            left: -50,
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "rgba(255, 165, 0, 0.1)",
            bottom: -80,
            right: -60,
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            mb={8}
            sx={{ color: "#8B0000", fontSize: { xs: "1.8rem", sm: "2.5rem" } }}
          >
            Contact Us
          </Typography>

          <Grid container spacing={6} justifyContent="center">
            {[
              {
                icon: <Phone sx={{ fontSize: 40, color: "white" }} />,
                label: "+8801332129714",
                bg: "linear-gradient(135deg, #F14900, #FF7F50)",
                link: "tel:+8801332129714",
              },
              {
                icon: <WhatsApp sx={{ fontSize: 40, color: "white" }} />,
                label: "Chat on WhatsApp",
                bg: "linear-gradient(135deg, #25D366, #00C851)",
                link: "https://wa.me/+8801332129714",
              },
              {
                icon: <LocationOn sx={{ fontSize: 40, color: "white" }} />,
                label: "46/5 Kemal Ataturk Avenue, Banani, Dhaka",
                bg: "linear-gradient(135deg, #8B0000, #F14900)",
                link: "https://maps.app.goo.gl/1n7p1ohnCbLxmPup8",
              },
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    textDecoration: "none",
                    p: 5,
                    borderRadius: 3,
                    background: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 16px 30px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 3,
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: item.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    color="text.primary"
                    sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#F14900",
          color: "white",
          textAlign: "center",
          py: { xs: 3, sm: 4 },
          px: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
        >
          © {new Date().getFullYear()} Taj Mahal Takeaway — All Rights Reserved
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
        >
          📍 46/5 Kemal Ataturk Avenue, Banani, Dhaka | ☎{" "}
          <Link
            href="tel:+8801332129714"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            +8801332129714
          </Link>{" "}
          |{" "}
          <Link
            href="https://wa.me/+8801332129714"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            WhatsApp
          </Link>{" "}
          | Facebook
        </Typography>
      </Box>
    </>
  );
}
