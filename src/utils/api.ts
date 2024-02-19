export function isAbsoluteURL(input: string): boolean {
  return input.indexOf("http://") === 0 || input.indexOf("https://") === 0;
}
export function isRequest(input: URL | RequestInfo): input is Request {
  if (typeof input === "object" && input !== null && "url" in input) {
    return true;
  }
  return false;
}
