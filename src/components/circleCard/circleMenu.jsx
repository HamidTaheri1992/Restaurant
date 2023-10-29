import { Grid, Stack, styled } from "@mui/material";
import CircleCard from "./circleCard";

const BackgroundCircleMenu = {
  padding: "40px",
  backgroundImage: `url(${"/images/circleBackground.jpg"})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default function CircleMenu() {
  return (
    <Grid style={BackgroundCircleMenu}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <Stack>
          <CircleCard
            foodName="pizza"
            imageUrl="/images/mainCourse/pizza.jpg"
          />
          <CircleCard
            foodName="ghormeSabzi"
            imageUrl="/images/mainCourse/ghormeSabzi.jpg"
          />
        </Stack>
        <Stack>
          <CircleCard foodName="Jelly" imageUrl="/images/appetizer/jelly.jpg" />
          <CircleCard foodName="My Restaurant" imageUrl="/images/logo.jpg" />
          <CircleCard
            foodName="kebab"
            imageUrl="/images/mainCourse/kebab.jpg"
          />
        </Stack>
        <Stack>
          <CircleCard foodName="Rice" imageUrl="/images/mainCourse/rice.jpg" />
          <CircleCard foodName="Salad" imageUrl="/images/appetizer/salad.jpg" />
        </Stack>
      </Stack>
    </Grid>
  );
}
