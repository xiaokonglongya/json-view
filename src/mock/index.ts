import { mock } from "mockjs";

export function createApiResponseConstruction<T>(result: T) {
  return {
    code: 200,
    message: "获取成功",
    data: result,
  };
}

export function createApiErrorResponseConstruction<T>(error: T) {
  return {
    code: 502,
    message: error,
    data: null,
  };
}
