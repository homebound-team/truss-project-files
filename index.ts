import { generate, generateRules, makeRule } from "@homebound/truss";
import { palette } from "./palette";

const increment = 6;
const numberOfIncrements = 7;

const fonts = {
  f10: "10px",
  f12: "12px",
  f14: "14px",
  f24: "24px",
};

const methods = generateRules({ palette, fonts, numberOfIncrements });

const aliases: Record<string, string[]> = {
  bodyText: ["f14", "black"],
};

generate({
  outputPath: "../src/Css.ts",
  methods,
  increment,
  aliases,
}).then(
  () => console.log("done"),
  (err) => console.error(err),
);
