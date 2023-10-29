type MainType = {
  id: string;
  title: string;
  href: string;
};

type ImageType = MainType & {
  src: string;
};

type CircleCardProps = {
  foodName: string;
  imageUrl: string;
};
