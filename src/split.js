export default function (xs, index) {
  const ys = xs.slice(0, index);
  const zs = xs.slice(index);

  return [ys, zs];
}
