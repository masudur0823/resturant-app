import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

// Example dish images (replace with your own URLs)
const dishImages = {
  "Bruschetta Classica":
    "https://images.unsplash.com/photo-1603071151059-81f13b2c8e44?auto=format&fit=crop&w=400&q=80",
  "Antipasto Platter":
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80",
  "Calamari Fritti":
    "https://images.unsplash.com/photo-1622737864007-8e1a8c5b6b50?auto=format&fit=crop&w=400&q=80",
  "Spaghetti Carbonara":
    "https://images.unsplash.com/photo-1603133872871-712e5ef1bfae?auto=format&fit=crop&w=400&q=80",
  "Osso Buco":
    "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&q=80",
  "Margherita Pizza":
    "https://images.unsplash.com/photo-1601924928310-2a87b27c60b4?auto=format&fit=crop&w=400&q=80",
  Tiramisu:
    "https://images.unsplash.com/photo-1609643605367-3c3f30cfa5f1?auto=format&fit=crop&w=400&q=80",
  "Panna Cotta":
    "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&q=80",
  "Gelato Selection":
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
};

function MenuSection({ variant }) {
  
  const menu = {
    Appetizers: [
      {
        name: "Bruschetta Classica",
        desc: "Fresh tomatoes, basil, garlic on toasted bread",
        price: "$12",
      },
      {
        name: "Antipasto Platter",
        desc: "Cured meats, olives, roasted peppers",
        price: "$18",
      },
      {
        name: "Calamari Fritti",
        desc: "Crispy squid rings with marinara sauce",
        price: "$15",
      },
    ],
    "Main Courses": [
      {
        name: "Spaghetti Carbonara",
        desc: "Pancetta, eggs, parmesan, black pepper",
        price: "$22",
      },
      {
        name: "Osso Buco",
        desc: "Braised veal shanks with risotto milanese",
        price: "$32",
      },
      {
        name: "Margherita Pizza",
        desc: "San Marzano tomatoes, mozzarella, basil",
        price: "$18",
      },
    ],
    Desserts: [
      {
        name: "Tiramisu",
        desc: "Classic coffee-soaked ladyfingers with mascarpone",
        price: "$9",
      },
      {
        name: "Panna Cotta",
        desc: "Vanilla custard with berry compote",
        price: "$8",
      },
      {
        name: "Gelato Selection",
        desc: "Three scoops of artisan Italian gelato",
        price: "$7",
      },
    ],
  };

  if (variant === 2) {
    return (
      <Container id="menu" sx={{ py: { xs: 6, sm: 10 } }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={6}
          sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" }, color: "#8B0000" }}
        >
          Our Menu
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {Object.entries(menu).map(([category, items]) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 6,
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 10,
                  },
                }}
              >
                {/* Category Header */}
                <Box
                  sx={{
                    backgroundColor: "#F14900",
                    color: "white",
                    textAlign: "center",
                    py: 1.5,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    mb: 2,
                    fontWeight: 600,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                  }}
                >
                  {category}
                </Box>

                <CardContent>
                  {items.map((item, index) => (
                    <Box
                      key={item.name}
                      sx={{
                        mb: index !== items.length - 1 ? 3 : 0,
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                      }}
                    >
                      {/* Dish Image */}
                      <Box
                        component="img"
                        src={dishImages[item.name]}
                        alt={item.name}
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: 2,
                          objectFit: "cover",
                          flexShrink: 0,
                          boxShadow: 3,
                        }}
                      />
                      {/* Dish Info */}
                      <Box sx={{ flexGrow: 1 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            fontWeight={700}
                            sx={{
                              fontSize: { xs: "0.9rem", sm: "1rem" },
                              color: "#F14900",
                            }}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "0.8rem", sm: "0.9rem" },
                            mt: 0.5,
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <Container id="menu" sx={{ py: { xs: 6, sm: 10 } }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb={6}
        sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" }, color: "#8B0000" }}
      >
        Our Menu
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {Object.entries(menu).map(([category, items]) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 6,
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 10,
                },
              }}
            >
              {/* Category Header */}
              <Box
                sx={{
                  backgroundColor: "#F14900",
                  color: "white",
                  textAlign: "center",
                  py: 1.5,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  mb: 2,
                  fontWeight: 600,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                }}
              >
                {category}
              </Box>

              <CardContent>
                {items.map((item, index) => (
                  <Box
                    key={item.name}
                    sx={{ mb: index !== items.length - 1 ? 3 : 0 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        sx={{
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          color: "#F14900",
                        }}
                      >
                        {item.price}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        mt: 0.5,
                      }}
                    >
                      {item.desc}
                    </Typography>
                    {index !== items.length - 1 && (
                      <Box
                        sx={{
                          borderBottom: "1px dashed #ccc",
                          my: 1.5,
                        }}
                      />
                    )}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MenuSection;
