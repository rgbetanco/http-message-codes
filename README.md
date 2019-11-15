# Installation

npm install http-message-codes

# Usage
```javascript
const error = require("http-message-codes");
// parameter could be any object (json), string or number
let lang = 'en'                 // -Optional, supported languages en ( English ), cz ( Traditional Chinese ) - default language cz
const { status, result } = error.SUCCESS(parameter, lang);
res.status(status).json(result);
console.log(status);
console.log(result);
```
# HTTP CUSTOM ERROR CODES / MESSAGE
#### All functions ( SUCCESS, DB_ERROR_GET, etc) accept one optional parameter.

### v 1.1.8
PARAMETER_CASH_OR_POINT
>Error trading, order must be paid all in cash or all in points,只能選擇現金或點數交易

PARAMETER_CASH
>Parameter cash is not enough to pay the order, 現金不足

SERVICE_FIREBASE
>Error connecting to service,服務連結錯誤

BLOCKCHAIN_POINT_INITIALIZE
>Error initializing user's point (asset),初始化使用者點數失敗

BLOCKCHAIN_POINT_INCREMENT
>Error increasing admin points,初始化使用者點數失敗

BLOCKCHAIN_POINT_TRANSFER
>Error transferring points,新增使用者點數失敗

BLOCKCHAIN_CREATE_TRANSACTION_PROPOSAL
>Error while creating transaction proposal,新增未簽名的交易提案失敗

BLOCKCHAIN_COMMIT_TRANSACTION_PROPOSAL
>Error while committing transaction proposal to the blockchain,提交簽名的交易提案失敗

BLOCKCHAIN_COMMIT_TRANSACTION
>Error while committing the transaction to the blockchain,傳送簽名的交易失敗

### v 1.1.7
> Missing the success in Chinese - bug

### v 1.1.6
> Add languages: en ( English ) & cz ( Traditional Chinese, default )

### v 1.1.5
DB_ERROR_WRONG_STATUS
> The record is disabled, inactive or unknown status

### v 1.1.4

UNKNOWN_FUNCTION_NAME
> The function the API is trying to access is known to one of the services

### v 1.1.3

TOKEN_ERROR_EXPIRED
> JWT Token has expired

### v 1.1.2

AUTHENTICATION_ALREADY_LOGIN
> Users has already been login, a new token will not be returned until user logout first.

### v 1.1.1

PARAMETER_INVALID
> A parameter value is invalid. Ex: role is only expecting values ranging from 0 to 3 but the value received is 4, then the parameter value is invalid. Please note that if the value received is a different format then please use PARAMETER_UNSUPPORTED_FORMAT

AUTHENTICATION_USERNAME_IN_USED
> A username has been already register

AUTHENTICATION_ACCESS_DENIED
> Access to a resource has been denied either by providing the wrong credentials or the wrong token

SERVICE_CONNECTION_ERROR
> A connection to a service has not been established or it has been broken.

SERVICE_CA_ERROR
> The certificate authority is returning an error. The error details could be added to the object

### v 1.1.0

DB_ERROR_NOT_FOUND
> A record was expected to be returned but nothing was return. If returning empty from database is possible, like in list API, then this is not the error code to use.

### v 1.0.9

PARAMETER_EMAIL_FORMAT
> Parameter is expected to have an email format

PARAMETER_UNSUPPORTED_FORMAT
> Parameter format is unknown or it is currently not supported

## v 1.0.6
SUCCESS
> Request has been successful 

DB_ERROR_GET
> Error while trying to get a record from the database 

DB_ERROR_CREATE
> Error while trying to create a record in the database


DB_ERROR_UPDATE
> Error while trying to update a record in the database

PARAMETER_REQUIRED
> Required parameter not received 

PARAMETER_JSON_FORMAT
> Error while trying to parse a json formatted variable

TOKEN_ERROR_INVALID
> Token is not valid

FILE_NOT_UPLOADED
> A file was not uploaded to the server

FILE_TYPE_NOT_SUPPORTED
> The uploaded file's type is not supported

OS_MOVE_FILE
> Error while moving the file to location