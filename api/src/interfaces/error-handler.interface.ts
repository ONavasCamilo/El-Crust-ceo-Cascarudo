export interface ErrorHandler extends Error {
  message: string;
  status: number;
}