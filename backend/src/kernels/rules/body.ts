import { body } from 'express-validator'
import WithLocate from './base'

class BodyWithLocate extends WithLocate {

    constructor(field: string) {
        super(field)    // gọi hàm khởi tạo của lớp cha
        this.withLocate = body(field)
    }

}

export default BodyWithLocate