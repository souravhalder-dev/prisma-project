import app from "./app";
import "dotenv/config";
import { prisma } from "./lib/prisma";
import config from "./config";

const port = config.port;
async function main() {
  try {
    await prisma.$connect();
    console.log("database connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}
main();
