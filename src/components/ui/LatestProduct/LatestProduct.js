"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import photo1 from "@/assets/photo1.avif";
import photo2 from "@/assets/photo2.avif";
import Image from "next/image";

const LatestProduct = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={photo1} width={800} alt="Latest Fashion" />
          </CardMedia>
          <CardContent>
            <p className=" w-[80px] p-1 my-3 text-center rounded bg-red-300 text-black">
              Casual
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Effortless Elegance: Casual Couture Picks
            </Typography>
            <Typography gutterBottom className="my-3">
              Designed By Afridi - December 26
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explore our range of casual couture that effortlessly blends
              comfort and style. Find versatile pieces that transition
              seamlessly from day to night.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={photo2} width={800} alt="Latest Fashion" />
          </CardMedia>
          <CardContent>
            <p className=" w-[80px] p-1 my-3 text-center rounded bg-red-300 text-black">
              Casual
            </p>
            <Typography gutterBottom >
              Effortless Elegance: Casual Couture Picks
            </Typography>
            <Typography gutterBottom className="my-3">
              Designed By Afridi - December 26
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explore our range of casual couture that effortlessly blends
              comfort and style. Find versatile pieces that transition
              seamlessly from day to night.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={photo2} width={800} alt="Latest Fashion" />
          </CardMedia>
          <CardContent>
            <p className=" w-[80px] p-1 my-3 text-center rounded bg-red-300 text-black">
              Casual
            </p>
            <Typography gutterBottom >
              Effortless Elegance: Casual Couture Picks
            </Typography>
            <Typography gutterBottom className="my-3">
              Designed By Afridi - December 26
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explore our range of casual couture that effortlessly blends
              comfort and style. Find versatile pieces that transition
              seamlessly from day to night.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={photo2} width={800} alt="Latest Fashion" />
          </CardMedia>
          <CardContent>
            <p className=" w-[80px] p-1 my-3 text-center rounded bg-red-300 text-black">
              Casual
            </p>
            <Typography gutterBottom >
              Effortless Elegance: Casual Couture Picks
            </Typography>
            <Typography gutterBottom className="my-3">
              Designed By Afridi - December 26
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explore our range of casual couture that effortlessly blends
              comfort and style. Find versatile pieces that transition
              seamlessly from day to night.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={photo2} width={800} alt="Latest Fashion" />
          </CardMedia>
          <CardContent>
            <p className=" w-[80px] p-1 my-3 text-center rounded bg-red-300 text-black">
              Casual
            </p>
            <Typography gutterBottom >
              Effortless Elegance: Casual Couture Picks
            </Typography>
            <Typography gutterBottom className="my-3">
              Designed By Afridi - December 26
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explore our range of casual couture that effortlessly blends
              comfort and style. Find versatile pieces that transition
              seamlessly from day to night.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestProduct;
