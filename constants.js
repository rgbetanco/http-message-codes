//HTTP ERROR CODES
const HTTP_CODES = {
    SUCCESS: 200,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
}
// SUCCESS
const SUCCESS = { r: 0, m: "Success", m_cz: "成功" }
// DATABASE
const DB_ERROR = 16;
const GET = 0;
const CREATE = 1;
const UPDATE = 2;
const NOT_FOUND = 4;
const WRONG_STATUS = 8;
const DB_ERROR_GET = { r: DB_ERROR + GET, m: "Error while getting data from the database", m_cz: "資料取得錯誤" }
const DB_ERROR_CREATE = { r: DB_ERROR + CREATE, m: "Error while posting data to the database", m_cz: "資料新增錯誤" }
const DB_ERROR_UPDATE = { r: DB_ERROR + UPDATE, m: "Error while putting data to the database", m_cz: "資料修改錯誤" }
const DB_ERROR_NOT_FOUND = { r: DB_ERROR + NOT_FOUND, m: "Record expected but nothing found on database", m_cz: "預期紀錄未在資料庫找到" }
const DB_ERROR_WRONG_STATUS = { r: DB_ERROR + WRONG_STATUS, m: "Record not active, disabled or unknown status", m_cz: "紀錄未啟用、無效或未支的狀態"}
// PARAMETERS
const PARAMETER_ERROR = 32;
const REQUIRED = 0;
const JSON_FORMAT = 1;
const EMAIL_FORMAT = 2;
const UNSUPPORTED_FORMAT = 4;
const FILE_NOT_UPLOADED = 8;
const FILE_TYPE_UPLOADED = 16;
const INVALID = 32;
const CASH_OR_POINT = 64
const CASH = 128
const FILE_SIZE = 256
const NOT_ENOUGH_POINTS = 1024
const ONLY_ONE_ALLOWED = 2048
const PARAMETER_REQUIRED = { r: PARAMETER_ERROR + REQUIRED, m: "Error while processing required parameter", m_cz: "處理必要參數時錯誤" }
const PARAMETER_JSON_FORMAT = { r: PARAMETER_ERROR + JSON_FORMAT, m: "Error while processing json formatted parameter", m_cz: "處理Json格式的參數時錯誤" }
const PARAMETER_FILE_NOT_UPLOADED = { r: PARAMETER_ERROR + FILE_NOT_UPLOADED, m: "File was not uploaded", m_cz: "檔案並未上傳" }
const PARAMETER_FILE_SIZE = { r: PARAMETER_ERROR + FILE_SIZE, m: "File size is too big", m_cz: "打案太大" }
const PARAMETER_FILE_TYPE_UPLOADED = { r: PARAMETER_ERROR + FILE_TYPE_UPLOADED, m: "File type not supported", m_cz: "檔案類型未支援" }
const PARAMETER_EMAIL_FORMAT = { r: PARAMETER_ERROR + EMAIL_FORMAT, m: "Wrong email format", m_cz: "錯誤的電子信箱格式" }
const PARAMETER_UNSUPPORTED_FORMAT = { r: PARAMETER_ERROR + UNSUPPORTED_FORMAT, m: "Unknown or unsupported parameter format", m_cz: "未知的或未支援的參數格式" }
const PARAMETER_INVALID = { r: PARAMETER_ERROR + INVALID, m: "Parameter value is invalid", m_cz: "參數值無效" }
const PARAMETER_CASH_OR_POINT = { r: PARAMETER_ERROR + CASH_OR_POINT, m: "Error trading, order must be paid all in cash or all in points", m_cz: "只能選擇現金或點數交易" }
const PARAMETER_CASH = { r: PARAMETER_ERROR + CASH, m: "Parameter cash is not enough to pay the order", m_cz: "現金不足" }
const PARAMETER_NOT_ENOUGH_POINTS = { r: PARAMETER_ERROR + NOT_ENOUGH_POINTS, m: "User does not have enough points to pay the order", m_cz: "點數不足" }
const PARAMETER_ONLY_ONE_ALLOWED = { r: PARAMETER_ERROR + ONLY_ONE_ALLOWED, m: "Only receiver or sender can be defined, not both", m_cz: "參數from和to只能輸入一個" }
// TOKEN
const TOKEN_ERROR = 64;
const TOKEN_INVALID = 0;
const EXPIRED = 1;
const TOKEN_ERROR_INVALID = { r: TOKEN_ERROR + TOKEN_INVALID, m: "Token is invalid", m_cz:"Token無效" }
const TOKEN_ERROR_EXPIRED = { r: TOKEN_ERROR + EXPIRED, m: "Token has expired", m_cz:"Token已過期" }
// OS
const OS_ERROR = 128;
const MOVE_FILE = 0;
const OS_MOVE_FILE = { r: OS_ERROR + MOVE_FILE, m: "Error moving file", m_cz:"移動檔案錯誤" }
// AUTHENTICATION
const AUTHENTICATION = 256;
const USERNAME_IN_USED = 0;
const ACCESS_DENIED = 1;
const ALREADY_LOGIN = 2;
const AUTHENTICATION_USERNAME_IN_USED = { r: AUTHENTICATION + USERNAME_IN_USED, m: "Username already in used", m_cz:"使用者名稱已被使用" }
const AUTHENTICATION_ACCESS_DENIED = { r: AUTHENTICATION + ACCESS_DENIED, m: "Access denied", m_cz:"拒絕訪問" }
const AUTHENTICATION_ALREADY_LOGIN = { r: AUTHENTICATION + ALREADY_LOGIN, m: "User has already login", m_cz:"使用者已登入" }
// SERVICE
const SERVICE = 1024
const CONNECTION_ERROR = 0
const CA_ERROR = 1
const FIREBASE = 2
const SERVICE_CONNECTION_ERROR = { r: SERVICE + CONNECTION_ERROR, m: "Error connecting to service", m_cz:"服務連結錯誤" }
const SERVICE_CA_ERROR = { r: SERVICE + CA_ERROR, m: "Certificate authority error", m_cz: "憑證授權錯誤" }
const SERVICE_FIREBASE = { r: SERVICE + FIREBASE, m: "Error sending message through Google firebase cloud messaging service", m_cz: "Google firebase 雲訊息傳送失敗"}
// UNKNOWN
const UNKNOWN = 2048;
const FUNCTION_NAME = 0
const UNKNOWN_FUNCTION_NAME = { r: UNKNOWN + FUNCTION_NAME, m: "Unknown function, this issue will be reported", m_cz: "未知的功能，此問題將會回報" }
// BLOCKCHAIN
const BLOCKCHAIN = 4096
const POINT_INITIALIZE = 0
const POINT_INCREMENT = 1
const POINT_TRANSFER = 2
const CREATE_TRANSACTION_PROPOSAL = 4
const COMMIT_TRANSACTION_PROPOSAL = 8
const COMMIT_TRANSACTION = 16
const BLOCKCHAIN_POINT_INITIALIZE = { r: BLOCKCHAIN + POINT_INITIALIZE, m: "Error initializing user's point (asset)", m_cz: " 初始化使用者點數失敗"}
const BLOCKCHAIN_POINT_INCREMENT = { r: BLOCKCHAIN + POINT_INCREMENT, m: "Error increasing admin points", m_cz: " 初始化使用者點數失敗" }
const BLOCKCHAIN_POINT_TRANSFER = { r: BLOCKCHAIN + POINT_TRANSFER, m: "Error transferring points", m_cz: "新增使用者點數失敗" }
const BLOCKCHAIN_CREATE_TRANSACTION_PROPOSAL = {r: BLOCKCHAIN + CREATE_TRANSACTION_PROPOSAL, m: "Error while creating transaction proposal", m_cz: "新增未簽名的交易提案失敗" }
const BLOCKCHAIN_COMMIT_TRANSACTION_PROPOSAL = {r: BLOCKCHAIN + COMMIT_TRANSACTION_PROPOSAL, m: "Error while committing transaction proposal to the blockchain", m_cz: "提交簽名的交易提案失敗" }
const BLOCKCHAIN_COMMIT_TRANSACTION = {r: BLOCKCHAIN + COMMIT_TRANSACTION, m: "Error while committing the transaction to the blockchain", m_cz: "傳送簽名的交易失敗" }
module.exports = {
    HTTP_CODES: HTTP_CODES,
    SUCCESS: SUCCESS,
    DB_ERROR_GET: DB_ERROR_GET,
    DB_ERROR_CREATE: DB_ERROR_CREATE,
    DB_ERROR_UPDATE: DB_ERROR_UPDATE,
    DB_ERROR_NOT_FOUND,
    DB_ERROR_WRONG_STATUS: DB_ERROR_WRONG_STATUS,
    PARAMETER_REQUIRED: PARAMETER_REQUIRED,
    PARAMETER_JSON_FORMAT: PARAMETER_JSON_FORMAT,
    PARAMETER_EMAIL_FORMAT: PARAMETER_EMAIL_FORMAT,
    PARAMETER_UNSUPPORTED_FORMAT: PARAMETER_UNSUPPORTED_FORMAT,
    TOKEN_ERROR_INVALID: TOKEN_ERROR_INVALID,
    TOKEN_ERROR_EXPIRED: TOKEN_ERROR_EXPIRED,
    PARAMETER_FILE_NOT_UPLOADED: PARAMETER_FILE_NOT_UPLOADED,
    PARAMETER_FILE_TYPE_UPLOADED: PARAMETER_FILE_TYPE_UPLOADED,
    PARAMETER_FILE_SIZE: PARAMETER_FILE_SIZE,
    PARAMETER_INVALID: PARAMETER_INVALID,
    AUTHENTICATION_USERNAME_IN_USED: AUTHENTICATION_USERNAME_IN_USED,
    AUTHENTICATION_ACCESS_DENIED: AUTHENTICATION_ACCESS_DENIED,
    AUTHENTICATION_ALREADY_LOGIN: AUTHENTICATION_ALREADY_LOGIN,
    SERVICE_CONNECTION_ERROR: SERVICE_CONNECTION_ERROR,
    SERVICE_CA_ERROR: SERVICE_CA_ERROR,
    OS_MOVE_FILE: OS_MOVE_FILE,
    UNKNOWN_FUNCTION_NAME: UNKNOWN_FUNCTION_NAME, 
    PARAMETER_CASH_OR_POINT: PARAMETER_CASH_OR_POINT,
    PARAMETER_CASH: PARAMETER_CASH,
    SERVICE_FIREBASE: SERVICE_FIREBASE,
    BLOCKCHAIN_POINT_INITIALIZE: BLOCKCHAIN_POINT_INITIALIZE,
    BLOCKCHAIN_POINT_INCREMENT: BLOCKCHAIN_POINT_INCREMENT,
    BLOCKCHAIN_POINT_TRANSFER: BLOCKCHAIN_POINT_TRANSFER,
    BLOCKCHAIN_CREATE_TRANSACTION_PROPOSAL: BLOCKCHAIN_CREATE_TRANSACTION_PROPOSAL,
    BLOCKCHAIN_COMMIT_TRANSACTION_PROPOSAL: BLOCKCHAIN_COMMIT_TRANSACTION_PROPOSAL,
    BLOCKCHAIN_COMMIT_TRANSACTION: BLOCKCHAIN_COMMIT_TRANSACTION,
    PARAMETER_NOT_ENOUGH_POINTS: PARAMETER_NOT_ENOUGH_POINTS,
    PARAMETER_ONLY_ONE_ALLOWED: PARAMETER_ONLY_ONE_ALLOWED
}