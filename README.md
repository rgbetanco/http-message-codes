# Installation

npm install http-message-codes

# Usage
```javascript
const error = require("http-message-codes");
// parameter could be any object (json), string or number
const { status, result } = error.SUCCESS(parameter);
res.status(status).json(result);
console.log(status);
console.log(result);
```
# HTTP CUSTOM ERROR CODES / MESSAGE
#### All functions ( SUCCESS, DB_ERROR_GET, etc) accept one optional parameter.

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