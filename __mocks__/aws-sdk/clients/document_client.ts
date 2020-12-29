export const awsSdkPromiseResponse = jest
  .fn()
  .mockReturnValue(Promise.resolve(true));

const putFn = jest
  .fn()
  .mockImplementation(() => ({ promise: awsSdkPromiseResponse }));
export class DocumentClient {
  put = putFn;
}

export namespace DocumentClient {}
