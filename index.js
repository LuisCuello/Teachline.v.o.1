const {app} = require("./src/bin/routers");

app.listen(1720, () => {
  console.log("Server on http://localhost:1720");
});