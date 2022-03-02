

export default class HttpResponseStatus {
  static BAD_REQUEST = 400;

  static RESOURCES_FOUND = 200;

  static RESPONSE_NOT_FOUND = 404;

  static RESOURCES_CREATED = 201;

  static RESOURCES_PUT_DELETED = 200; // WHEN UPDATED AND DELETED (WITH  a response)

  static RESOURCES_DELETED_WITH_NO_RESPONSE = 204; // WHEN DELETED (WITHOUT  a response)

  static UNAUTHORIZED = 401;

  static FORBIDDEN = 403;

  static UNPROCESSABLE_ENTITY = 422;

  static INTERNAL_SERVER_ERROR = 500;

  static CONFLICT = 409;
}
