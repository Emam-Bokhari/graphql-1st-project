// src/shared/graphqlResponse.ts
export const gqlResponse = <T>(
  data: T | T[] | null,
  message: string = 'Success',
  success: boolean = true
) => {
  return {
    success,
    message,
    data: Array.isArray(data) ? null : data,
    list: Array.isArray(data) ? data : null,
  };
};