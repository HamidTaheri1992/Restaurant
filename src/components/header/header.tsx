import data from "../../../public/data/data.json";
import Menu from "../menu/menu";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

//data
const aboutItem: MainType[] = data.aboutitem;

//function
export default function Header() {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      direction={{ xs: "column-reverse", md: "row" }}
      pt={6}
    >
      <Stack alignItems={"center"}>
        <Typography variant="h3" fontFamily={"fantasy"}>
          My Restaurant
        </Typography>
        <Menu data={aboutItem} direction="row" />
      </Stack>
      <Image
        src="/images/logo.jpg"
        alt="My Restaurant"
        width={500}
        height={200}
      />
    </Stack>
  );
}
