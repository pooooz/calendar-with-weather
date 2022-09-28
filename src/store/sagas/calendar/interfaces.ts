export interface CustomError {
  result: {
    error: {
      code: number;
      message: string;
    };
  };
}
