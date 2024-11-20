import { NextFunction, Request, Response } from "express";
type ErrorSource = {
  path:string | number ,
  message:string
}[]
const globalErrorHandler = (
  err:  any, 
  req:Request,
  res: Response,
  next: NextFunction
) => {
  // default value 
  const statusCode = err.statusCode || 500; 
  const message = err.message || "Something went wrong";
  const errorSource:ErrorSource = [{
    path:'',
    message:'somting went wrong'
  }]
  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    error: err, 
  });
};

export default globalErrorHandler;


// 14-2 Understanding Error Patterns in Zod and Mongoose (8.42m)