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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import logo from "./assets/images/logo.jpeg";
import banner from "./assets/images/background.png";
import MenuSection from "./components/MenuSection";

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
      link: "https://dokanerponno.com/tajmahaltakeaway",
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
              href="https://dokanerponno.com/tajmahaltakeaway"
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
                      ? window.open("https://dokanerponno.com/tajmahaltakeaway", "_blank")
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
          backgroundImage: banner && `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
          py: { xs: 8, sm: 12, md: 16 },
          pt: { xs: 8, sm: 8, md: 8 },
          px: 2,
        }}
      >
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
          sx={{
            mt: 1,
            mb: 3,
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
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
            href="https://dokanerponno.com/tajmahaltakeaway"
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

      {/* Menu Section */}
      <MenuSection variant={2} />

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
          📍 Dhaka, Bangladesh | ☎ +880 123 456 789 | WhatsApp | Facebook
        </Typography>
      </Box>
    </>
  );
}
