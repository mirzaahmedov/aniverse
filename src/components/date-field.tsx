const monthOptions = Array(12)
  .fill(1)
  .map((val, i) => val + i);
const dateOptions = Array(31)
  .fill(1)
  .map((val, i) => val + i);
const yearOptions = Array(2024 - 1974)
  .fill(1974)
  .map((val, i) => val + i);

type DateFieldProps = {
  name: string;
};
function DateField({ name }: DateFieldProps) {
  return (
    <>
      <select name={`${name}-month`}>
        <option value="">-</option>
        {monthOptions.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <select name={`${name}-date`}>
        <option value="">-</option>
        {dateOptions.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <select name={`${name}-year`}>
        <option value="">-</option>
        {yearOptions.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </>
  );
}

export default DateField;
