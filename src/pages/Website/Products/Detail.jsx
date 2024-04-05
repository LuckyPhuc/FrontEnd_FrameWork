import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./detail.css";

// Import Mui
import {
  Button,
  Grid,
  IconButton,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import axios from "axios";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setCount(value);
    } else {
      setCount(1); // Reset to 0 if input is not a valid number
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:3001/products/${id}`);
        setProduct(res.data);
      } catch {
        toast.error("Fail to fetch product");
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {/* Main image */}

          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={product?.url_img} alt="product_1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product?.url_img} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product?.url_img} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product?.url_img} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            navigation={true}
          >
            <SwiperSlide>
              <img src={product?.url_img} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product?.url_img} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product?.url_img} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product?.url_img} />
            </SwiperSlide>
          </Swiper>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom variant="h3" component="div">
            {product?.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price: {product?.price}
          </Typography>
          <Typography gutterBottom variant="h8" component="div">
            {product?.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Quantity
          </Typography>
          <Stack direction="row" justifyContent="flex-start" spacing={2}>
            <IconButton
              size="sm"
              variant="outlined"
              onClick={() => setCount((c) => Math.max(c - 1, 0))}
            >
              <Remove />
            </IconButton>
            <TextField
              variant="outlined"
              value={count}
              onChange={handleChange}
              sx={{ width: "16%" }}
            ></TextField>
            <IconButton
              size="sm"
              variant="outlined"
              onClick={() => setCount((c) => c + 1)}
            >
              <Add />
            </IconButton>
            <Button component="div" variant="contained">
              {" "}
              Add to card
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
