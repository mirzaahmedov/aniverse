export function getErrorMessage(error: unknown) {
  switch (true) {
    case typeof error === "string":
      return error;
    case isError(error):
      return error.message;
    default:
      return "Something went wrong";
  }
}
function isError(error: unknown): error is Error {
  return (
    error instanceof Error ||
    (typeof error === "object" && error !== null && "message" in error)
  );
}
