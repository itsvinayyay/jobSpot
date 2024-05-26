


class ApiError extends Error{
    constructor(
        statusCode,
        errorMessage,
        errors = [],
        stack = ""
    ){
        super(errorMessage);

        this.statusCode = statusCode;
        this.errors = errors;


        this.success = false;
        this.data = null;


        if(stack){
            this.stack = stack;
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}



export default ApiError;