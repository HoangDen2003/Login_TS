export const ok = (res: any, data: any) => {
    return res.status(200).send({
      success: true,
      data,
      status: 200,
      message: "ok",
    });
}

export const notFound = (res: any) => {
    return res.status(404).send({
      success: false,
      status: 404,
      message: "Cannot find resouces",
    });
  }

export const error = (res: any, message: string) => {
    return res.status(500).send({
      success: false,
      status: 500,
      message: message || "Internal server error",
    });
  }

export const unauthorized = (res: any, message: string) => {
    return res.status(401).send({
      success: false,
      status: 401,
      message: message || "Unauthorized",
    });
}

export const invalidated = (res: any, errors: any) => {
    return res.status(422).send({
      success: false,
      status: 422,
      data: errors,
    });
}