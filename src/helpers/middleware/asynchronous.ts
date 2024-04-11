class CustomError extends Error {
  status: string | number;
  data: any;
  constructor(status: string | number, errors: any) {
    super('API Error');
    this.name = 'API Error';
    this.status = status;
    this.data = { errors };
  }
}

export const handleException = async (response: any) => {
  if (response && response.error) {
    throw new CustomError(
      response.error.status,
      response.error.data 
    );
  }

  return response;
};
