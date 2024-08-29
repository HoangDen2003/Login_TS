import { NextFunction, RequestHandler } from "express";
import { ValidationChain, ExpressValidator, validationResult } from "express-validator";
import { invalidated } from "../../utils/responseUtils";

// Tùy chỉnh error formatter
const customErrorFormatter = (error: any) => ({
    field: error.path,
    message: error.msg,
  });

export const validate = (validationArray: ValidationChain[]): any => {
    return async (req: Request, res: Response, next: NextFunction) => {
        // Thực hiện tất cả các validation
        for (const validation of validationArray) {
          await validation.run(req);
        }
    
        // Lấy kết quả validation
        const errors = validationResult(req).formatWith(customErrorFormatter);
    
        if (errors.isEmpty()) {
          return next();
        }
    
        return invalidated(res, {
          errors: errors.array(),
        });
      };
}