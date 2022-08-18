import pino from "pino";
import {PrettyOptions} from "pino-pretty";

const transport = pino.transport({
  targets: [
    {
      level: "warn",
      target: "pino-pretty",
      options: {
        destination: "",
      },
    },
    {
      level: "info",
      target: 'pino-pretty',
      options: {
        destination: "", 
        // mkdir: true,
        ignore: 'pid,hostname',
        translateTime: 'UTC:mm.dd.yyyy, h:MM:ss TT Z',
        timestampKey: 'time',
        levelFirst: true,
        hideObject: true,
        // customPrettifiers: {
        //   time: (timestamp: any) => `🕰 ${timestamp}`
        // } as PrettyOptions,
      },
    },
    {
      level: "error",
      target: "pino-pretty",
      options: {
        destination: "",
      },
    },
    // {
    //     level: 'debug',
    //     target: 'pino-pretty',
    //     options: {
    //         destination: "",
    //         colorize: true
    //     }
    // },
  ],
});

const logger = pino(transport);

export default logger;
