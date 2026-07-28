
import httpStatus from "http-status";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { useServiceregdB } from "./user.service";
import { catchAsyncF } from "../../utils/catchAsync";


const createdUser = catchAsyncF (async (req:Request,res:Response,next:NextFunction)=>{
    const payload= req.body;

 const user = await  useServiceregdB.registereddB(payload)

  res.status(200).json({
    status: true,
    statusCode: httpStatus.CREATED,
    message: "User registered successfully",
    data:{ 
      user }
  });

} )


export const userControler={
    createdUser
}