import { body, ValidationChain } from "express-validator";
import { capitalize } from "../../utils/stringUtils";

class WithLocate {

    protected field: string
    protected withLocate: ValidationChain

    constructor(filed: string) {
        this.withLocate = body(filed)
        this.field = filed
    }

    public get value() : string {
        return this.field
    }
    
    public set value(v : string) {
        this.field = v;
    }

    notEmpty(): any {
        this.withLocate = this.withLocate
            .notEmpty()
            .withMessage(`${capitalize(this.field)} must not be empty`)
            .bail();    // ngừng kiểm tra các quy tắc còn lại
        return this;
    }

    get(): any {
        return this.withLocate
    }

    isEmail(): any {
        this.withLocate = this.withLocate
            .isEmail()
            .withMessage(`${capitalize(this.field)} must be a valid email`)
            .bail();    // ngừng kiểm tra các quy tắc còn lại
        return this;
    }

    isLength(options: any): any {
        if (options.min) {
            this.withLocate = this.withLocate
              .isLength({ min: options.min })
              .withMessage(
                capitalize(this.field) +
                  " must be at least " +
                  options.min +
                  " characters long"
              )
              .bail();
          }
      
          if (options.max) {
            this.withLocate = this.withLocate
              .isLength({ max: options.max })
              .withMessage(
                capitalize(this.field) +
                  " must be at most " +
                  options.max +
                  " characters long"
              )
              .bail();
          }
      
          return this;
    }

}

export default WithLocate