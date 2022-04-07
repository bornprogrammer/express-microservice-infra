import CustomAxiosError from "./CustomAxiosError.js";

export default class IncruiterServiceApiResponseError extends CustomAxiosError {

  constructor(customAxiosError) {
    super({ message: customAxiosError.data.message, response: { status: customAxiosError.code, data: customAxiosError.data.result } });
  }
}