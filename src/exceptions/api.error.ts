export default class ApiError extends Error {
  status = 400;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.status = statusCode;
  }

  getJsonResponse() {
    return {
      message: this.message,
    };
  }

  getStatusCode() {
    return this.status;
  }
}
