"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";

// Icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";
import Header from "./Header";

const navItems = [
    {
        route:"Home",
        pathname: "/"
    },
    {
        route:"Products",
        pathname: "/products"
    },
    {
        route:"Category",
        pathname: "/categories/news?category=all-news"
    },
    {
        route:"Latest",
        pathname: "/latestProducts"
    },
    {
        route:"Contact Us",
        pathname: "/contact"
    },
    {
        route:"About ",
        pathname: "/about"
    },
    
];

function Navbar() {
  return (
   <>
   <Header/>
    <AppBar position="static" className="bg-red-400">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100}  alt="ELARA" />
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack direction="row" sx={{
                "& svg": {
                    color: "white"
                }
            }}>
            <IconButton>
              <FacebookOutlinedIcon />
            </IconButton>
            <IconButton>
              <EmailSharpIcon />
            </IconButton>
            <IconButton>
              <LoginOutlinedIcon />
            </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   </>

  );
}
export default Navbar;
