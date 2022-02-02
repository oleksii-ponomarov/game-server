const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({
    easyMode: {
      field: 5,
    },
    normalMode: {
      field: 10,
    },
    hardMode: {
      field: 15,
    },
  });
});

app.listen(port, () => {
  console.log(`Game server is listening on ${port}`);
});
