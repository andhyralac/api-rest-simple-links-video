import { Response } from 'express'

enum HttpStatus {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export class HttpResponse {

    Ok(res: Response, data?: any): Response {
        return res.status(HttpStatus.OK).json({
            error: false,
            status: HttpStatus.OK,
            statusMsg: 'Ok',
            data: data,
        });
    }

    Created(res: Response, data?: any): Response {
        return res.status(HttpStatus.CREATED).json({
            error: false,
            status: HttpStatus.CREATED,
            statusMsg: 'Created',
            data: data,
        });
    }

    BadRequest(res: Response, error?: any): Response {
        return res.status(HttpStatus.BAD_REQUEST).json({
            error: true,
            status: HttpStatus.BAD_REQUEST,
            statusMsg: "Bad Request",
            errors: error,
        });
    }

    NotFound(res: Response, data?: any): Response {
        return res.status(HttpStatus.NOT_FOUND).json({
            error: true,
            status: HttpStatus.NOT_FOUND,
            statusMsg: "Not Found",
            errors: data,
        });
    }

    Unauthorized(res: Response, error?: any): Response {
        return res.status(HttpStatus.UNAUTHORIZED).json({
            error: true,
            status: HttpStatus.UNAUTHORIZED,
            statusMsg: "Unauthorized",
            errors: error,
        });
    }

    Forbidden(res: Response, error?: any): Response {
        return res.status(HttpStatus.FORBIDDEN).json({
            error: true,
            status: HttpStatus.FORBIDDEN,
            statusMsg: "Forbidden",
            errors: error,
        });
    }

    Error(res: Response, error?: any): Response {
        console.log('[ERROR]: ', error)
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: true,
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            statusMsg: "Internal server error",
        });
    }
}
