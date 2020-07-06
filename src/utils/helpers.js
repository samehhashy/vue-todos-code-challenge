export function toNumericId(value) {
  switch (typeof value) {
    case "number":
      return value;
    case "string":
      return Number(value.replace(/\D/g, ""));
    default:
      throw new Error(`${value} is not a string or number`);
  }
}

export function generateId(data) {
  const maxId = Math.max.apply(
    null,
    data.map(item => toNumericId(item.id))
  );
  return `$uid${maxId + 1}`;
}
