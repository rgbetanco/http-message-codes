const constants = require("./constants");

module.exports = {
    SUCCESS: function (object) {
        return createArray(constants.HTTP_CODES.SUCCESS, constants.SUCCESS, object)
    },
    DB_ERROR_GET: function (object) {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.DB_ERROR_GET, object)
    },
    DB_ERROR_CREATE: function (object) {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.DB_ERROR_CREATE, object)
    },
    DB_ERROR_UPDATE: function (object) {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.DB_ERROR_UPDATE, object)
    },
    DB_ERROR_NOT_FOUND: function (object) {
        return createArray(constants.HTTP_CODES.NOT_FOUND, constants.DB_ERROR_NOT_FOUND, object)
    },
    PARAMETER_REQUIRED: function (object) {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_REQUIRED, object)
    },
    PARAMETER_JSON_FORMAT: function (object) {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_JSON_FORMAT, object)
    },
    PARAMETER_EMAIL_FORMAT: function (object) {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_EMAIL_FORMAT, object)
    },
    PARAMETER_UNSUPPORTED_FORMAT: function (object) {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_UNSUPPORTED_FORMAT, object)
    },
    PARAMETER_INVALID: function (object) {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_INVALID, object)
    },
    TOKEN_ERROR_INVALID: function (object) {
        return createArray(constants.HTTP_CODES.UNAUTHORIZED, constants.TOKEN_ERROR_INVALID, object)
    },
    TOKEN_ERROR_EXPIRED: function (object) {
        return createArray(constants.HTTP_CODES.UNAUTHORIZED, constants.TOKEN_ERROR_EXPIRED, object)
    },
    FILE_NOT_UPLOADED: function (object) {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_FILE_NOT_UPLOADED, object)
    },
    FILE_TYPE_NOT_SUPPORTED: function (object) {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_FILE_TYPE_UPLOADED, object)
    },
    AUTHENTICATION_USERNAME_IN_USED: function (object) {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.AUTHENTICATION_USERNAME_IN_USED, object)
    },
    AUTHENTICATION_ACCESS_DENIED: function (object) {
        return createArray(constants.HTTP_CODES.UNAUTHORIZED, constants.AUTHENTICATION_ACCESS_DENIED, object)
    },
    AUTHENTICATION_ALREADY_LOGIN: function (object) {
        return createArray(constants.HTTP_CODES.UNAUTHORIZED, constants.AUTHENTICATION_ALREADY_LOGIN, object)
    },
    SERVICE_CONNECTION_ERROR: function (object) {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.SERVICE_CONNECTION_ERROR, object)
    },
    SERVICE_CA_ERROR: function (object) {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.SERVICE_CA_ERROR, object)
    },
    OS_MOVE_FILE: function (object) {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.OS_MOVE_FILE, object)
    },
    UNKNOWN_FUNCTION_NAME: function (object) {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.UNKNOWN_FUNCTION_NAME, object)
    }
};

function createArray(status, code, object) {
    let a = {'r':code.r, 'm':code.m };
    if (object) {
        a = {'r':code.r, 'm':code.m, 'd':object};
    }
    let ja = JSON.stringify(a);
    return { status: status, result: a };
}