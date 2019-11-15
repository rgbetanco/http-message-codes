const constants = require("./constants");

module.exports = {
    SUCCESS: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.SUCCESS, constants.SUCCESS, object, lang)
    },
    DB_ERROR_GET: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.DB_ERROR_GET, object, lang)
    },
    DB_ERROR_CREATE: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.DB_ERROR_CREATE, object, lang)
    },
    DB_ERROR_UPDATE: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.DB_ERROR_UPDATE, object, lang)
    },
    DB_ERROR_NOT_FOUND: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.NOT_FOUND, constants.DB_ERROR_NOT_FOUND, object, lang)
    },
    PARAMETER_REQUIRED: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_REQUIRED, object, lang)
    },
    PARAMETER_JSON_FORMAT: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_JSON_FORMAT, object, lang)
    },
    PARAMETER_EMAIL_FORMAT: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_EMAIL_FORMAT, object, lang)
    },
    PARAMETER_UNSUPPORTED_FORMAT: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_UNSUPPORTED_FORMAT, object, lang)
    },
    PARAMETER_INVALID: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_INVALID, object, lang)
    },
    TOKEN_ERROR_INVALID: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNAUTHORIZED, constants.TOKEN_ERROR_INVALID, object, lang)
    },
    TOKEN_ERROR_EXPIRED: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNAUTHORIZED, constants.TOKEN_ERROR_EXPIRED, object, lang)
    },
    FILE_NOT_UPLOADED: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_FILE_NOT_UPLOADED, object, lang)
    },
    FILE_TYPE_NOT_SUPPORTED: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_FILE_TYPE_UPLOADED, object, lang)
    },
    AUTHENTICATION_USERNAME_IN_USED: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.AUTHENTICATION_USERNAME_IN_USED, object, lang)
    },
    AUTHENTICATION_ACCESS_DENIED: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNAUTHORIZED, constants.AUTHENTICATION_ACCESS_DENIED, object, lang)
    },
    AUTHENTICATION_ALREADY_LOGIN: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.UNAUTHORIZED, constants.AUTHENTICATION_ALREADY_LOGIN, object, lang)
    },
    SERVICE_CONNECTION_ERROR: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.SERVICE_CONNECTION_ERROR, object, lang)
    },
    SERVICE_CA_ERROR: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.SERVICE_CA_ERROR, object, lang)
    },
    OS_MOVE_FILE: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.OS_MOVE_FILE, object, lang)
    },
    UNKNOWN_FUNCTION_NAME: function (object, lang = 'cz') {
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.UNKNOWN_FUNCTION_NAME, object, lang)
    },
    PARAMETER_CASH_OR_POINT: function (object, lang = 'cz'){
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_CASH_OR_POINT, object, lang)
    },
    PARAMETER_CASH: function (object, lang = 'cz'){
        return createArray(constants.HTTP_CODES.UNPROCESSABLE_ENTITY, constants.PARAMETER_CASH, object, lang)
    },
    SERVICE_FIREBASE: function (object, lang = 'cz'){
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.SERVICE_FIREBASE, object, lang)
    },
    BLOCKCHAIN_POINT_INITIALIZE: function (object, lang = 'cz'){
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.BLOCKCHAIN_POINT_INITIALIZE , object, lang)
    },
    BLOCKCHAIN_POINT_INCREMENT: function (object, lang = 'cz'){
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.BLOCKCHAIN_POINT_INCREMENT , object, lang)
    },
    BLOCKCHAIN_POINT_TRANSFER: function (object, lang = 'cz'){
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.BLOCKCHAIN_POINT_TRANSFER , object, lang)
    },
    BLOCKCHAIN_CREATE_TRANSACTION_PROPOSAL: function (object, lang = 'cz'){
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.BLOCKCHAIN_CREATE_TRANSACTION_PROPOSAL , object, lang)
    },
    BLOCKCHAIN_COMMIT_TRANSACTION_PROPOSAL: function (object, lang = 'cz'){
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.BLOCKCHAIN_COMMIT_TRANSACTION_PROPOSAL , object, lang)
    },
    BLOCKCHAIN_COMMIT_TRANSACTION: function (object, lang = 'cz'){
        return createArray(constants.HTTP_CODES.INTERNAL_SERVER_ERROR, constants.BLOCKCHAIN_COMMIT_TRANSACTION , object, lang)
    }
};

function createArray(status, code, object, lang) {
    let message = code.m
    if (lang == 'cz') {
        message = code.m_cz
    }
    let a = {'r':code.r, 'm':message };
    if (object) {
        a = {'r':code.r, 'm':message, 'd':object};
    }
    
    return { status: status, result: a };
}