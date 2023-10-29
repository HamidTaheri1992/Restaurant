"use client";
import { Box, Grid, Stack } from "@mui/material";
import Logo from "./sections/logo";
import Search from "./sections/search";
import Dashboard from "./sections/dashboard";
import { useState, useEffect } from "react";

export default function BigMenu() {
  const [navHeight, setnavHeight] = useState("4.5rem");
  const listenScrollEvent = () => {
    window.scrollY > 10;
    window.scrollY > 10 ? setnavHeight("3.5rem") : setnavHeight("4.5rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Stack
      style={{ backgroundColor: "var(--font-color1)", transition: "1s" }}
      position={"fixed"}
      height={navHeight}
      direction={"row"}
      justifyContent={"space-around"}
      width={"100%"}
      alignItems={"center"}
      zIndex={1}
    >
      <Dashboard />
      <Search />
      <Logo width={80} height={32} />
    </Stack>
  );
}
