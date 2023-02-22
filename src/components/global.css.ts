import { globalStyle } from "@vanilla-extract/css";

globalStyle("body, body *", {
  all: "unset",
  boxSizing: "border-box",
  fontFamily: "Segoe UI",
  color: "black",
  padding: 0,
  margin: 0,
});

globalStyle(`body > .container`, {
  display: 'block',
  width: '100%'
});
