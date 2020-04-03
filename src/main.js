import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    clanList: [
      "2QG8V2C9",
      "8VLRRC28",
      "9C9VCRUQ",
      "9CL90JVJ",
      "9LU2Y8LU",
      "9CGQ29LR",
    ],
  },
});

export default app;
