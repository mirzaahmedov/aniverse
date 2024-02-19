export function fmtNumber(num: number) {
  return Intl.NumberFormat().format(num);
}
