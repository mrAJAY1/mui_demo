import React from "react";
import { Add as AddIcon } from "@mui/icons-material";
import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from "@mui/material";

const itemData = [
  {
    img: "https://source.unsplash.com/500x500/?pizza",
    title: "Pizza",
  },
  {
    img: "https://source.unsplash.com/500x500/?burger",
    title: "Burger",
  },
  {
    img: "https://source.unsplash.com/500x500/?sushi",
    title: "Sushi",
  },
  {
    img: "https://source.unsplash.com/500x500/?tacos",
    title: "Tacos",
  },
  {
    img: "https://source.unsplash.com/500x500/?pasta",
    title: "Pasta",
  },
  {
    img: "https://source.unsplash.com/500x500/?chinese-food",
    title: "Chinese Food",
  },
  {
    img: "https://source.unsplash.com/500x500/?steak",
    title: "Steak",
  },
  {
    img: "https://source.unsplash.com/500x500/?seafood",
    title: "Seafood",
  },
  {
    img: "https://source.unsplash.com/500x500/?salad",
    title: "Salad",
  },
  {
    img: "https://source.unsplash.com/500x500/?breakfast",
    title: "Breakfast",
  },
  {
    img: "https://source.unsplash.com/500x500/?indian-food",
    title: "Indian Food",
  },
  {
    img: "https://source.unsplash.com/500x500/?french-food",
    title: "French Food",
  },
  {
    img: "https://source.unsplash.com/500x500/?barbecue",
    title: "Barbecue",
  },
  {
    img: "https://source.unsplash.com/500x500/?ramen",
    title: "Ramen",
  },
  {
    img: "https://source.unsplash.com/500x500/?dessert",
    title: "Dessert",
  },
];
const itemData2 = [
  {
    img: "https://source.unsplash.com/500x500/?car",
    title: "Audi A4",
  },
  {
    img: "https://source.unsplash.com/500x500/?bmw",
    title: "BMW M3",
  },
  {
    img: "https://source.unsplash.com/500x500/?mercedes-benz",
    title: "Mercedes-Benz S-Class",
  },
  {
    img: "https://source.unsplash.com/500x500/?ford-mustang",
    title: "Ford Mustang",
  },
  {
    img: "https://source.unsplash.com/500x500/?lamborghini",
    title: "Lamborghini Huracan",
  },
  {
    img: "https://source.unsplash.com/500x500/?porsche",
    title: "Porsche 911",
  },
  {
    img: "https://source.unsplash.com/500x500/?ferrari",
    title: "Ferrari 488 GTB",
  },
  {
    img: "https://source.unsplash.com/500x500/?bugatti",
    title: "Bugatti Chiron",
  },
  {
    img: "https://source.unsplash.com/500x500/?lexus",
    title: "Lexus LC 500",
  },
  {
    img: "https://source.unsplash.com/500x500/?toyota",
    title: "Toyota Supra",
  },
  {
    img: "https://source.unsplash.com/500x500/?tesla",
    title: "Tesla Model S",
  },
  {
    img: "https://source.unsplash.com/500x500/?chevrolet",
    title: "Chevrolet Camaro",
  },
  {
    img: "https://source.unsplash.com/500x500/?dodge",
    title: "Dodge Charger",
  },
  {
    img: "https://source.unsplash.com/500x500/?aston-martin",
    title: "Aston Martin DB11",
  },
  {
    img: "https://source.unsplash.com/500x500/?maserati",
    title: "Maserati GranTurismo",
  },
  {
    img: "https://source.unsplash.com/500x500/?honda",
    title: "Honda Civic Type R",
  },
  {
    img: "https://source.unsplash.com/500x500/?jaguar",
    title: "Jaguar F-Type",
  },
  {
    img: "https://source.unsplash.com/500x500/?subaru",
    title: "Subaru WRX STI",
  },
  {
    img: "https://source.unsplash.com/500x500/?volvo",
    title: "Volvo S60",
  },
  {
    img: "https://source.unsplash.com/500x500/?koenigsegg",
    title: "Koenigsegg Agera RS",
  },
];
const itemData3 = [
  {
    img: "https://source.unsplash.com/featured/?mountain-bike",
    title: "Mountain Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?road-bike",
    title: "Road Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?bmx-bike",
    title: "BMX Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?hybrid-bike",
    title: "Hybrid Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?fixed-gear-bike",
    title: "Fixed Gear Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?electric-bike",
    title: "Electric Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?folding-bike",
    title: "Folding Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?commuter-bike",
    title: "Commuter Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?cruiser-bike",
    title: "Cruiser Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?gravel-bike",
    title: "Gravel Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?touring-bike",
    title: "Touring Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?track-bike",
    title: "Track Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?kids-bike",
    title: "Kids Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?recumbent-bike",
    title: "Recumbent Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?tandem-bike",
    title: "Tandem Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?tricycle-bike",
    title: "Tricycle Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?freestyle-bike",
    title: "Freestyle Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?city-bike",
    title: "City Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?fat-bike",
    title: "Fat Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?vintage-bike",
    title: "Vintage Bike",
  },
  {
    img: "https://source.unsplash.com/featured/?beach-cruiser-bike",
    title: "Beach Cruiser Bike",
  },
];

function MuiImageList() {
  return (
    <Stack spacing={4} sx={{ mb: 20 }}>
      {/* Basic image grid */}
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr`}
              alt={item.title}
              loading="lazy"
            />
            {/* Bar can be used to add title or caption for images */}
            <ImageListItemBar
              title={item.title}
              subtitle="banana"
              position="bottom"
              actionIcon={<AddIcon color="primary" sx={{ "&:hover": { color: "white" } }} />}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider sx={{ border: 1, borderColor: "primary.light" }} />
      {/* Woven image list */}
      <Typography variant="h3">Type woven</Typography>
      <ImageList variant="woven" sx={{ width: 500, height: 450 }} cols={3} gap={3}>
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider sx={{ border: 1, borderColor: "primary.light" }} />
      {/* Masonry image list - best used for dynamically sized uncropped content and aspect ratios */}
      <Typography variant="h3">Type Masonry</Typography>
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData3.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
}

export default MuiImageList;
