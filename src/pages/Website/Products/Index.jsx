import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import AddCartIcon from "@mui/icons-material/AddShoppingCart";
import DetailIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductView() {
  const [products, setProducts] = useState();
  const getProduct = () => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {products &&
          products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              {" "}
              <Card sx={{ maxWidth: 345, marginTop: 3 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="300"
                  image={product?.url_img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product?.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <AddCartIcon />
                  </Button>
                  <Button
                    component={Link}
                    to={`/product/${product.id}`}
                    size="small"
                  >
                    <DetailIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
