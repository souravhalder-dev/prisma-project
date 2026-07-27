
import httpStatus from "http-status";
import { Request, Response } from "express";
import { useServiceregdB } from "./user.service";


const createdUser = async (req:Request, res:Response) => {
try {
    const payload= req.body;

 const user =await  useServiceregdB.registereddB(payload)



  res.status(200).json({
    status: true,
    statusCode: httpStatus.CREATED,
    message: "User registered successfully",
    data:{ 
      user }
  });

} catch (error) {
    console.log(error)
    res.status(500).json({
        status:false,
        statusCode:httpStatus.INTERNAL_SERVER_ERROR,
        message:"Internal server error",
        error:error
    })
}

}
export const userControler={
    createdUser
}