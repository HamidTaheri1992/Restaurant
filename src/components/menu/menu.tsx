import * as React from "react";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

// Function
export default function Menu({
  data,
  direction,
}: {
  data: MainType[];
  direction: "row" | "column";
}) {
  return (
    <Stack
      style={{ backgroundColor: "var(--font-color1)" }}
      direction={direction}
      m={1}
      borderRadius={2}
      fontSize={12}
      alignItems={"center"}
    >
      {data.map((item) => (
        <Link href={item.href} key={item.id} underline="none" padding={1}>
          <MenuItem className="changeSizeHover">{item.title}</MenuItem>
        </Link>
      ))}
    </Stack>
  );
}
