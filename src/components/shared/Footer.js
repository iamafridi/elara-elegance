 "use client"
 import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";

// // Icons
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Link from "next/link";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Products",
      pathname: "/products",
    },
    {
      route: "Category",
      pathname: "/categories",
    },
    {
      route: "Latest",
      pathname: "/latestProducts",
    },
    {
      route: "Contact Us",
      pathname: "/contact",
    },
    {
      route: "About ",
      pathname: "/about",
    },
  ];

  return (
    <Box className="bg-red-400 px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
              <FacebookTwoToneIcon/>
            </IconButton>
          <IconButton>
            <EmailSharpIcon />
          </IconButton>
          <IconButton>
            <LoginOutlinedIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="white" textAlign="center" >@2023 . ALL RIGHT RESERVED BY ELARA ELEGANCE. </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
