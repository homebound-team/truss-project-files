import { generate, generateRules, makeRule } from "@homebound/truss";
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

// This creates the default/out-of-the-box method/rule set.
const methods = generateRules({ palette, fonts, numberOfIncrements });

// You can add/remove your own application-specific/one-off rules as needed.
methods["custom-stuff"] = [makeRule("foo", { color: "#000000" })];

// You can also define common application-specific combinations as aliases.
const aliases: Record<string, string[]> = {
  bodyText: ["f14", "black"],
};

// Optionally configure breakpoints to sm/md/mdAndUp/mdOrLg/etc. media query consts
const breakpoints = { sm: 0, md: 600, lg: 960 };

generate({
  outputPath: "../src/Css.ts",
  methods,
  increment,
  aliases,
  breakpoints,
}).then(
  () => console.log("done"),
  (err) => console.error(err),
);
