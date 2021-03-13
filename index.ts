import { generate, newMethod, Aliases } from "@homebound/truss";
import { palette } from "./palette";

// The increment setting means that abbreviations like `mt1` will be `marginTop: 6px`.
const increment = 6;

// Control how many `mt0`, `mt1`, ... `mt6` methods you want for each increment-based rule.
const numberOfIncrements = 7;

// This uses the convention of f10 --> 10px, but you can use `f1`, `f2`, etc. if you want.
const fonts = {
  f10: "10px",
  f12: "12px",
  f14: "14px",
  f24: "24px",
};

// You can add/remove your own application-specific/one-off rules as needed.
const sections = {
  customStuff: () => [newMethod("foo", { color: "#000000" })],
}

// You can also define common application-specific combinations as aliases.
const aliases: Aliases = {
  bodyText: ["f14", "black"],
};

// Optionally configure breakpoints to sm/md/mdAndUp/mdOrLg/etc. media query consts
const breakpoints = { sm: 0, md: 600, lg: 960 };

generate({
  outputPath: "../src/Css.ts",
  palette,
  fonts,
  increment,
  numberOfIncrements,
  aliases,
  breakpoints,
  sections,
}).then(
  () => console.log("done"),
  (err) => console.error(err),
);
