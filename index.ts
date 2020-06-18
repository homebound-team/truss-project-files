import { generate, generateRules, makeRule } from "@homebound/truss";
import { palette } from "./palette";

const increment = 6;
const numberOfIncrements = 7;

// Abbr, pixels, line height, letter spacing.
// Line-height is generally `px * 1.1` except for the smaller sizes which have nudged-up heights.
const fonts: Record<string, { px: number; lh: number; ls: number }> = {
  f108: { px: 108, lh: 118, ls: -1.6 },
  f96: { px: 96, lh: 105, ls: -1.6 },
  f72: { px: 72, lh: 79, ls: -1.6 },
  f48: { px: 48, lh: 52, ls: -1.6 },
  f32: { px: 32, lh: 35, ls: -1.6 },
  f24: { px: 24, lh: 26, ls: -1.6 },
  f18: { px: 18, lh: 20, ls: -0.8 },
  f16: { px: 16, lh: 18, ls: -0.8 },
  f14: { px: 14, lh: 16, ls: -0.8 },
  f12: { px: 12, lh: 17, ls: -0.8 },
  f10: { px: 10, lh: 12, ls: -0.8 },
};

// Pass fonts: {} b/c we create our own font rules
const methods = generateRules({ palette, fonts: {}, numberOfIncrements });

// Customize type-scale with per-fontSize letterSpacing and lineHeight
methods["type-scale"] = Object.entries(fonts).map(([abbr, { px, lh, ls }]) =>
  makeRule(abbr, { fontSize: `${px}px`, lineHeight: `${lh}px`, letterSpacing: `${ls}px` }),
);

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
