"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Grid, Stack } from "@mui/material";
import data from "../../../../public/data/data.json";
import Menu from "../../menu/menu";

//Data
const beveragesItem: MainType[] = data.beverages;
const appetizerItem: MainType[] = data.appetizer;
const mainCourseItem: MainType[] = data.mainCourse;
//Type
type Anchor = "left";

export default function Dashboard() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Stack
      width={250}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider style={{ fontFamily: "cursive" }}>MAIN COURSE</Divider>
      <Menu direction="column" data={mainCourseItem} />
      <Divider style={{ fontFamily: "cursive" }}>APPETIZER</Divider>
      <Menu direction="column" data={appetizerItem} />
      <Divider style={{ fontFamily: "cursive" }}>BEVERAGES</Divider>
      <Menu direction="column" data={beveragesItem} />
    </Stack>
  );

  return (
    <Grid>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            size="small"
            style={{
              backgroundColor: "var(--font-color2)",
              color: "var(--font-color1)",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            Menu
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Grid>
  );
}
