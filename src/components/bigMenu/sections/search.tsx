import Input from "@mui/material/Input";

export default function Search() {
  return (
    <Input
      style={{ backgroundColor: "var(--font-color2)", borderRadius: 5 }}
      type="text"
      placeholder="Search..."
    />
  );
}
