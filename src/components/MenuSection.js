import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Tabs,
  Tab,
  Chip,
  Stack,
} from "@mui/material";

// Dummy menu data
const menuData = [
  {
    category: "Burgers",
    items: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      itemName: `Burger ${i + 1}`,
      itemPrice: 5 + (i % 5),
      itemImage: "https://source.unsplash.com/300x200/?burger",
    })),
  },
  {
    category: "Pizzas",
    items: Array.from({ length: 50 }, (_, i) => ({
      id: i + 101,
      itemName: `Pizza ${i + 1}`,
      itemPrice: 8 + (i % 5),
      itemImage: "https://source.unsplash.com/300x200/?pizza",
    })),
  },
  {
    category: "Drinks",
    items: Array.from({ length: 50 }, (_, i) => ({
      id: i + 201,
      itemName: `Drink ${i + 1}`,
      itemPrice: 2 + (i % 3),
      itemImage: "https://source.unsplash.com/300x200/?drink",
    })),
  },
];

const ITEMS_PER_PAGE = 12;

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    menuData[0].category
  );
  const [page, setPage] = useState(1);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
    setPage(1); // Reset page when category changes
  };

  const handleOrderNow = (item) => {
    // alert(`Order placed for: ${item.itemName}`);
    window.open(
      `https://wa.me/+8801332129714?text=Hi, I want to Buy ${item?.itemName}`
    );
  };

  const currentItems =
    menuData.find((menu) => menu.category === selectedCategory)?.items || [];
  const paginatedItems = currentItems.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = paginatedItems.length < currentItems.length;

  return (
    <Box sx={{ p: { xs: 3, md: 8 }, bgcolor: "#fff5f0" }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 5 }}
      >
        Our Menu
      </Typography>

      {/* Category Tabs */}
      <Stack direction={"row"} justifyContent={"center"}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          centered
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          sx={{ mb: 10 }}
        >
          {menuData.map((menu) => (
            <Tab
              key={menu.category}
              label={menu.category}
              value={menu.category}
            />
          ))}
        </Tabs>
      </Stack>

      {/* Menu Items */}
      <Grid container spacing={4} justifyContent={"center"}>
        {paginatedItems.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            justifyContent={"center"}
          >
            <Card
              sx={{
                borderRadius: 4,
                overflow: "visible",
                position: "relative",
                textAlign: "center",
                py: 3,
                px: 2,
                background: "linear-gradient(135deg, #FFB347 0%, #FFCC33 100%)",
                transition: "0.4s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={item.itemImage}
                alt={item.itemName}
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  objectFit: "cover",
                  position: "absolute",
                  top: -60,
                  left: "50%",
                  transform: "translateX(-50%)",
                  border: "5px solid white",
                }}
              />
              <CardContent sx={{ mt: 6 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {item.itemName}
                </Typography>

                <Chip
                  label={`$${item.itemPrice}`}
                  color="secondary"
                  sx={{ mb: 2, fontWeight: "bold", fontSize: "1rem" }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                  onClick={() => handleOrderNow(item)}
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Load More Button */}
      {hasMore && (
        <Box textAlign="center" mt={5}>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ px: 5, py: 1.5, fontWeight: "bold" }}
            onClick={() => setPage(page + 1)}
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MenuSection;
