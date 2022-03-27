import axios from "axios";
// import "@/mock/index";
import { useMessage } from "naive-ui";
const message = useMessage();
const service = axios.create({
  timeout: 10 * 1000,
});
service.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return response.data.data;
    }
    if (response.data.code === 502) {
      window.$message.error(response.data.message || "系统错误");
      new Error(response.data.message);
    }
  },
  (error) => {}
);
export default service;
