import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function CircleCard({ foodName, imageUrl }: CircleCardProps) {
  return (
    <Grid p={0.5}>
      <Grid className="flipCard">
        <Grid className="flipCardInner">
          <Grid className="flipCardFront">
            <Image
              style={{ borderRadius: "50%" }}
              fill
              src={imageUrl}
              alt={foodName}
              sizes="100%"
            />
          </Grid>
          <Grid className="flipCardBack">
            <Typography className="fontCircle">{foodName}</Typography>
            <Typography className="fontCircle">About your food</Typography>
            <Typography className="fontCircle">Price</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
