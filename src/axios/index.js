import axios from "axios";
import { URL } from "@/axios/ApiBaseURL";

const API = axios.create({
  baseURL: URL.url,
  timeout: 50000,
});

export { API as axios };