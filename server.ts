import express from "express";
import userRoute from "./src/routes/user.routes";
import airlineRoute from "./src/routes/airline.route";
import airportRoute from "./src/routes/airport.route";
import flightRoute from "./src/routes/flight.route";
import config from "./src/utils/config";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import expressPinoLogger from "express-pino-logger";
import logger from "./src/utils/logger";
import DBConnection from "./src/utils/db";
// import dayjs from "dayjs";

const { PORT } = config;

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const loggerMiddleware = expressPinoLogger({
  logger: logger,
  autoLogging: true,
  // timestamp: () => `,"time": ${dayjs().format()}`,
});

app.use(loggerMiddleware);
app.use("/", userRoute);
app.use("/airline", airlineRoute);
app.use("/airport", airportRoute);
app.use("/flight", flightRoute);

const start = async () => {
  await DBConnection();
  app.listen(PORT, () => {
    logger.info(`App started on port ${PORT}`);
  });
};

start();
