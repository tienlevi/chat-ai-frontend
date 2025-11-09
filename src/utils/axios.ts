import { currentURL } from "@/constants";
import axios from "axios";

export const instance = axios.create({
  baseURL: `${currentURL}/api`,
  headers: { "Content-Type": "application/json" },
});
