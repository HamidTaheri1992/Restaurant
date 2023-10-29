import Link from "@mui/material/Link";
import Image from "next/image";

//Type
type LogoType = {
  width: number;
  height: number;
};

//Function
export default function Logo({ width, height }: LogoType) {
  return (
    <Image
      style={{ borderRadius: 5 }}
      src="/images/logo.jpg"
      width={width}
      height={height}
      alt="MyRestaurant"
    />
  );
}
