import dotenv from "dotenv";
import "dotenv/config";
import path from "path";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config({
  path: path.resolve(__dirname, "..", "..", "..", `.env.${process.env.NODE_ENV}`),
});

export const { TOKEN_SECRET } = process.env;
export const { TOKEN_EXPIRES_IN } = process.env;
export const { PORT } = process.env;
export const INCOMING = "Incoming";
export const OUTGOING = "Outgoing";
