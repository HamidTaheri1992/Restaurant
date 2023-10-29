import data from "../../../public/data/data.json";
import Menu from "../menu/menu";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

//Data
const aboutItem: MainType[] = data.aboutitem;

//Function
export default function Footer() {
  return (
    <Stack
      alignItems={"center"}
      style={{ backgroundColor: "var(--font-color1)" }}
    >
      <Menu direction="column" data={aboutItem} />
      <Typography color={"var(--font-color2)"} variant="body1">
        Experience the best quality of food with us.
      </Typography>
      <Typography color={"var(--font-color2)"} variant="caption">
        © 2023 Tripadvisor LLC Alle rechten voorbehouden.
      </Typography>
    </Stack>
  );
}
