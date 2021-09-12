// const sum = (arr1, arr2) => {
//   const result = (
//     Number(arr1.toString().replace(",", "")) +
//     Number(arr2.toString().replace(",", ""))
//   )
//     .toString()
//     .split("");
//   return arr1.length > 0 || arr2.length > 0
//     ? result[0] === "-"
//       ? result
//           .filter((v) => v !== "-")
//           .map((v, i) => (i === 0 ? Number("-" + v) : Number(v)))
//       : result.map(Number)
//     : [];
// };

// console.log(sum([6, 7], [6, 7])); // [1, 3, 4]
// console.log(sum([6, 7], [])); // [6, 7]
// console.log(sum([-6, 7], [1, 0])); // [-5, 7]
// console.log(sum([], [])); // []

const sum = (...arg) => {
  let sumInt = arg.reduce((total, arr) => {
    return total + (parseInt(arr.join``) || 0);
  }, 0);
  return sumInt
    ? sumInt
        .toString()
        .match(/(-?\d)/g)
        .map((num) => parseInt(num))
    : [];
};

console.log(sum([6, 7], [6, 7])); // [1, 3, 4]
console.log(sum([6, 7], [])); // [6, 7]
console.log(sum([-6, 7], [1, 0])); // [-5, 7]
console.log(sum([], [])); // []

let count = (arr) => {
  return arr.reduce((tol, val) => tol + Math.max(...val), 0);
};

console.log(
  count([
    [1, 2],
    [3, 4],
  ])
); // 6
console.log(
  count([
    [7, 4],
    [10, 10],
  ])
); // 17
console.log(
  count([
    [5, 10],
    [50, 100],
    [30, 15],
  ])
); // 140

let sls = (a, b) =>
  (a.replace(/./g, ".") > b.replace(/./g, ".") ? b : "") +
  a +
  b +
  (a.replace(/./g, ".") < b.replace(/./g, ".") ? a : "");

console.log(sls("45", "1"), "1451");
console.log(sls("13", "200"), "1320013");
console.log(sls("U", "False"), "UFalseU");
console.log(sls("js", "s"), "JS");

var solution = (str1, str2) => {
  let pad =
    str1.length - str2.length == 0
      ? ""
      : str1.length > str2.length
      ? str2
      : str1;
  return (str1 + str2).indexOf(pad) > 0
    ? pad + (str1 + str2)
    : str1 + str2 + pad;
};

console.log(solution("45", "1"), "1451");
console.log(solution("13", "200"), "1320013");
console.log(solution("U", "False"), "UFalseU");
console.log(solution("js", "s"), "JS");

const y = (num) =>
  num % 3 == 0
    ? num % 5 == 0
      ? "FizzBuzz"
      : "Fizz"
    : num % 5 === 0
    ? "Buzz"
    : num;

const isFizzOrBuzz = (num) =>
  ((!(num % 3) || "") && "Fizz") + ((!(num % 5) || "") && "Buzz") || num;

console.log(y(6));
console.log(y(10));
console.log(y(15));
console.log(y(17));
console.log(isFizzOrBuzz(6));
console.log(isFizzOrBuzz(10));
console.log(isFizzOrBuzz(15));
console.log(isFizzOrBuzz(17));

const repeats = (str) =>
  Array.from(Array(Math.floor(str.length / 2)), (e, i) =>
    str
      .match(new RegExp(`.{1,${i + 1}}`, "g"))
      .reduce((a, c, j, r) => a && c == r[0])
      ? [str.substring(0, i + 1), str.length / (i + 1)]
      : ""
  ).filter((e) => e.length > 0)[0] || [str, 1];

const repeatTest = (str, index = 1) => {
  let regex = new RegExp(str.substring(0, index), "g");
  let match = str.match(regex);
  return match.length * index === str.length
    ? [match[0], match.length]
    : repeatTest(str, index + 1);
};

function repeat(str) {
  let s = "";
  for (const el of str) {
    if (s.indexOf(el) === -1) s += el;
  }
  return [s, str.split(s).length - 1];
}

console.log(repeats("ababab"));
console.log(repeats("abcde"));
console.log(repeats("abababab"));
console.log(repeats("abcabcabc"));

console.log(repeatTest("ababab"));
console.log(repeatTest("abcde"));
console.log(repeatTest("abababab"));
console.log(repeatTest("abcabcabc"));

console.log(repeat("ababab"));
console.log(repeat("abcde"));
console.log(repeat("abababab"));
console.log(repeat("abcabcabc"));

function tower(height) {
  const results = [];
  let width = 1;
  for (let level = 0; level < height; level++) {
    const floor = "*".repeat(width);
    const space = " ".repeat(height - level - 1);
    results.push(`${space}${floor}${space}`);
    width += 2;
  }
  return results;
}

const towers = (h) =>
  Array(h)
    .fill()
    .map(
      (_, i) =>
        " ".repeat(h - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(h - i - 1)
    );

console.log(tower(["*", "***", "*****"]));
console.log(towers(["*", "***", "*****"]));

const pad = (str, length, char = "") => {
  const len = (str.length + length) % 2 === 0 ? length : length + 1;

  return str.padStart((str.length + len) / 2, char).padEnd(len, char);
};

console.log(pad("cat", 10, ".")); // ....cat....
console.log(pad("js", 20, "*"));

const arrayMul = (num, length) =>
  Array.from(Array(length), (e, i) => num * (i + 1));

const multi = (m, n) => [...Array(n)].map((e, i) => ++i * m);

console.log(arrayMul(7, 5)); // [7, 14, 21, 28, 35]
console.log(multi(7, 5)); // [7, 14, 21, 28, 35]

const getType = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

console.log(getType([]));
console.log(getType({}));
console.log(getType(true));
console.log(getType(""));
console.log(getType(1));
console.log(getType(new Date()));
console.log(getType(new Set([])));
console.log(getType(null));
console.log(getType(undefined));

const filterArray = (arr) => arr.filter((f) => f === ~~f); // เลขเต็มจำนวน

console.log(filterArray([1, 2, "a", "b"])); // [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])); // [1, 0, 15]
console.log(filterArray([1, 2, "3", "4", 5, "6"]));

const fnDuplicate = (ar) => ar.length != [...new Set(ar)].length; // หาต่าซ่ำกันหรือไม่

const isDuplicate = (numbers) =>
  numbers.reduce(
    (p, c, i, a) => p || a.filter((n) => n === c).length > 1,
    false
  ); // หาต่าซ่ำกันหรือไม่

console.log(fnDuplicate([]));
console.log(fnDuplicate([1]));
console.log(fnDuplicate([1, 2, 3]));
console.log(fnDuplicate([1, 1]));
console.log(isDuplicate([]));
console.log(isDuplicate([1]));
console.log(isDuplicate([1, 2, 3]));
console.log(isDuplicate([1, 1]));

const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

const users = [
  { name: "fred", age: 48 },
  { name: "barney", age: 36 },
  { name: "fred", age: 40 },
];
console.log(orderBy(users, ["name", "age"], ["asc", "desc"]));
// [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
console.log(orderBy(users, ["name", "age"]));
// [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]

const nest = (items, id = null, link = "parent_id") =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: nest(items, item.id, link) }));

const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 },
];
const nestedComments = nest(comments);
// [{ id: 1, parent_id: null, children: [...] }]

console.log(nestedComments);
