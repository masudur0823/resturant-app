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
  TextField,
  InputAdornment,
  useTheme,
  Dialog,
  DialogContent,
  IconButton,
  Divider, // ✅ Added for separation in the modal
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CloseIcon from "@mui/icons-material/Close";
import menuData from "../assets/static/Menus"; // Assuming this is correct

const ITEMS_PER_PAGE = 8;

const MenuSection = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(
    menuData[0].category
  );
  const [page, setPage] = useState(1);
  const [imageError, setImageError] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  
  // Updated modal state to store the full item object
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState(null); // Now stores the entire item object

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
    setPage(1);
    setSearchTerm("");
  };

  const handleOrderNow = (item) => {
    window.open(
      `https://wa.me/+8801332129714?text=Hi, I want to Buy ${item?.itemName}`
    );
  };

  // Updated handler to pass the full item
  const handleOpenModal = (item) => {
    setModalItem(item); // Store the full item
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalItem(null);
  };

  // Filter logic remains the same
  const currentItems =
    menuData.find((menu) => menu.category === selectedCategory)?.items || [];

  const filteredItems = currentItems.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedItems = filteredItems.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = paginatedItems.length < filteredItems.length;

  // Handler for image error
  const handleImageError = (id) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 800, mb: 2, color: theme.palette.text.primary }}
      >
        Explore Our Menu 🍽️
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Handcrafted dishes, made with passion and the finest ingredients.
      </Typography>

      {/* --- */}

      {/* Categories & Search */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        mb={6}
      >
        {/* Category Tabs */}
        <Box sx={{ width: { xs: "100%", md: "auto" } }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="secondary"
            indicatorColor="secondary"
            sx={{
              "& .MuiTabs-indicator": {
                height: 4,
                borderRadius: "5px 5px 0 0",
              },
            }}
          >
            {menuData.map((menu) => (
              <Tab
                key={menu.category}
                label={menu.category}
                value={menu.category}
                sx={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  px: { xs: 1.5, sm: 3 },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Search Field */}
        <TextField
          variant="outlined"
          size="small"
          placeholder={`Search in ${selectedCategory}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            sx: { borderRadius: 3, backgroundColor: theme.palette.grey[50] },
          }}
          sx={{
            width: { xs: "100%", md: 300 },
          }}
        />
      </Stack>

      {/* --- */}

      {/* Menu Items */}
      <Grid container spacing={4} justifyContent={"center"}>
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item) => (
            <Grid item xs={12} sm={6} lg={3} key={item.id}>
              <Card
                elevation={6}
                sx={{
                  borderRadius: 4,
                  transition: "0.3s",
                  maxWidth: 350,
                  mx: "auto",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                {/* Image or Fallback Icon - Updated onClick to pass the full item */}
                <Box
                  sx={{
                    position: "relative",
                    height: 200,
                    minWidth: 250,
                    overflow: "hidden",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.grey[200],
                    // Make the image box clickable if an image exists
                    cursor:
                      item.itemImage && !imageError[item.id]
                        ? "pointer"
                        : "default",
                  }}
                  // 👇 Call the modal handler on click and pass the item
                  onClick={() => {
                    if (item.itemImage && !imageError[item.id]) {
                      handleOpenModal(item);
                    }
                  }}
                >
                  {item.itemImage && !imageError[item.id] ? (
                    <CardMedia
                      component="img"
                      image={item.itemImage}
                      alt={item.itemName}
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        transition: "0.3s",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <FastfoodIcon
                      sx={{ fontSize: 80, color: theme.palette.grey[500] }}
                    />
                  )}
                  {/* Price Chip in a clean position */}
                  <Chip
                    label={`${item.itemPrice} tk`}
                    color="primary"
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      bgcolor: theme.palette.secondary.main,
                      color: "#fff",
                    }}
                  />
                </Box>

                <CardContent sx={{ textAlign: "left", pb: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {item.itemName}
                  </Typography>

                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{
                      mt: 2,
                      py: 1.2,
                      fontWeight: "bold",
                      borderRadius: 2,
                      boxShadow: "0 4px 10px rgba(255,100,0,0.3)",
                      "&:hover": {
                        bgcolor: theme.palette.secondary.dark,
                        boxShadow: "0 6px 15px rgba(255,100,0,0.4)",
                      },
                    }}
                    onClick={() => handleOrderNow(item)}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Box sx={{ width: "100%", textAlign: "center", py: 5 }}>
            <Typography variant="h6" color="text.secondary">
              No items found in "{selectedCategory}" matching your search. Try a
              different term! 😔
            </Typography>
          </Box>
        )}
      </Grid>

      {/* --- */}

      {/* Load More Button */}
      {hasMore && (
        <Box textAlign="center" mt={6}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 6,
              py: 1.5,
              fontWeight: "bold",
              borderRadius: 3,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            onClick={() => setPage(page + 1)}
          >
            Load More Dishes
          </Button>
        </Box>
      )}

      {/* --- */}

      {/* Image Preview Modal (Dialog) with Title, Price, and Button */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm" // Smaller max width for a cleaner detail view
        fullWidth
        sx={{ "& .MuiDialog-paper": { borderRadius: 4 } }}
      >
        {modalItem && (
          <DialogContent sx={{ p: 0, position: "relative" }}>
            {/* Close Button */}
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                },
                zIndex: 10,
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* 1. Image */}
            <Box
              sx={{
                height: 300,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.grey[200],
              }}
            >
              <Box
                component="img"
                src={modalItem.itemImage}
                alt={modalItem.itemName}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Use cover to fill the space
                  display: "block",
                }}
              />
            </Box>
            
            <Divider />

            {/* 2. Details (Title, Price, Button) */}
            <Box sx={{ p: 3 }}>
              {/* Title */}
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 700, color: theme.palette.text.primary }}
              >
                {modalItem.itemName}
              </Typography>
              
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={3}
              >
                {/* Price */}
                <Typography
                  variant="h4"
                  color="secondary"
                  sx={{ fontWeight: 900 }}
                >
                  {modalItem.itemPrice} tk
                </Typography>
                
                {/* Optional: Add a simple description if your data had one */}
                {/* <Typography variant="body1" color="text.secondary">
                  Freshly made. Highly recommended.
                </Typography> */}
              </Stack>
              
              {/* Button */}
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 2,
                  boxShadow: "0 6px 15px rgba(255,100,0,0.4)",
                }}
                // Use the updated handler for the modal item
                onClick={() => handleOrderNow(modalItem)} 
              >
                Order Now via WhatsApp
              </Button>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default MenuSection;