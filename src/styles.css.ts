import { composeStyles, style } from "@vanilla-extract/css";
import { atoms } from "./sprinkles.css";

export const menu = composeStyles(
  atoms({
    display: "flex",
    justifyContent: "space-between",
    padding: "large",

    // Conditional atoms:
    flexDirection: {
      mobile: "column",
      desktop: "row",
    },
    fontSize: {
      desktop: "large",
      mobile: "medium"
    },
    background: {
      lightMode: "primary",
    },
  })
);

export const menuItems = composeStyles(
  atoms({
    display: {
      desktop: "flex",
      mobile: "grid",
    },
    gridTemplateColumns: {
      mobile: "4x",
    },
    paddingX: {
      desktop: "small",
      mobile: "none",
    },
    paddingY: {
      mobile: "medium",
    },

    flexDirection: {
      mobile: "column",
      desktop: "row",
    },
  })
);

export const menuItem = composeStyles(
  atoms({
    display: "flex",
    alignItems: "center",
    paddingX: "medium",
    color: "white",

    flexDirection: {
      mobile: "column",
      desktop: "row",
    },
  }),
  style({
    ":hover": {
      cursor: "pointer",
      color: "orange",
    },
  })
);
