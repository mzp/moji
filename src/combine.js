export default function(xs, ys) {
  return xs.map((x, i) => {
    return [x, ys[i % ys.length]]
  });
}
