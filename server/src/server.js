const http = require("http");
const app = require("./app");

const httpServer = http.createServer(app);

const PORT = 3001;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
