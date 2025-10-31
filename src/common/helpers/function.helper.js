export const responseSuccess = (data, message = "ok", statusCode = 200) => {
    return {
        status: "success",
        statusCode: statusCode,
        message: message,
        data: data,
        doc: "swager",
    };
};

export const responseError = (message = "Internal Server Error", statusCode = 500) => {
    return {
        status: "error",
        statusCode: statusCode,
        message: message,
    };
};