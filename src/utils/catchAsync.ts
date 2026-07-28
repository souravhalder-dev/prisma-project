
import httpStatus from "http-status";
import { NextFunction, Request, RequestHandler, Response } from "express";


const catchAsync = (fn: RequestHandler): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
        res.status(200).json({
            success:false,
    status: false,
    statusCode: httpStatus.CREATED,
    message: "filed",
   
  });
    }
  };
};

export const catchAsyncF = catchAsync