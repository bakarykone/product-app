import React from "react";
import ProductItem from "./ProductItem";
import { List, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductList = ({ products }) => {
  const isTabletOrMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <>
      {isTabletOrMobile ? (
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
        >
          {products.map((product) => (
            <div key={product._id} style={{ position: "relative" }}>
              <ProductItem product={product} />
            </div>
          ))}
        </Carousel>
      ) : (
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {products.map((product) => (
            <React.Fragment key={product._id}>
              <ProductItem product={product} />
            </React.Fragment>
          ))}
        </List>
      )}
    </>
  );
};

export default ProductList;
