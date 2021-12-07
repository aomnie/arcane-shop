const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  let hours = new Date().getHours();
  let day = new Date().getDay();
  if (hours >= 9 || hours <= 17 || day == 0 || day == 6) {
    res.sendFile(`${__dirname}/public/views/closed.html`);
  } else {
    res.sendFile(`${__dirname}/public/views/Home.html`);
  }
});

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public/views`));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});
