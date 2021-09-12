"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sum2 = function sum2(arr1, arr2) {
  var result = (Number(arr1.toString().replace(",", "")) + Number(arr2.toString().replace(",", ""))).toString().split("");
  return arr1.length > 0 || arr2.length > 0 ? result[0] === "-" ? result.filter(function (v) {
    return v !== "-";
  }).map(function (v, i) {
    return i === 0 ? Number("-" + v) : Number(v);
  }) : result.map(Number) : [];
};

console.log(sum2([6, 7], [6, 7])); // [1, 3, 4]

console.log(sum2([6, 7], [])); // [6, 7]

console.log(sum2([-6, 7], [1, 0])); // [-5, 7]

console.log(sum2([], [])); // []

var sum = function sum() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  var sumInt = arg.reduce(function (total, arr) {
    return total + (parseInt(arr.join(_templateObject())) || 0);
  }, 0);
  return sumInt ? sumInt.toString().match(/(-?\d)/g).map(function (num) {
    return parseInt(num);
  }) : [];
};

console.log(sum([6, 7], [6, 7])); // [1, 3, 4]

console.log(sum([6, 7], [])); // [6, 7]

console.log(sum([-6, 7], [1, 0])); // [-5, 7]

console.log(sum([], [])); // []

var count = function count(arr) {
  return arr.reduce(function (tol, val) {
    return tol + Math.max.apply(Math, _toConsumableArray(val));
  }, 0);
};

console.log(count([[1, 2], [3, 4]])); // 6

console.log(count([[7, 4], [10, 10]])); // 17

console.log(count([[5, 10], [50, 100], [30, 15]])); // 140

var sls = function sls(a, b) {
  return (a.replace(/./g, ".") > b.replace(/./g, ".") ? b : "") + a + b + (a.replace(/./g, ".") < b.replace(/./g, ".") ? a : "");
};

console.log(sls("45", "1"), "1451");
console.log(sls("13", "200"), "1320013");
console.log(sls("U", "False"), "UFalseU");
console.log(sls("js", "s"), "JS");

var solution = function solution(str1, str2) {
  var pad = str1.length - str2.length == 0 ? "" : str1.length > str2.length ? str2 : str1;
  return (str1 + str2).indexOf(pad) > 0 ? pad + (str1 + str2) : str1 + str2 + pad;
};

console.log(solution("45", "1"), "1451");
console.log(solution("13", "200"), "1320013");
console.log(solution("U", "False"), "UFalseU");
console.log(solution("js", "s"), "JS");

var y = function y(num) {
  return num % 3 == 0 ? num % 5 == 0 ? "FizzBuzz" : "Fizz" : num % 5 === 0 ? "Buzz" : num;
};

var isFizzOrBuzz = function isFizzOrBuzz(num) {
  return ((!(num % 3) || "") && "Fizz") + ((!(num % 5) || "") && "Buzz") || num;
};

console.log(y(6));
console.log(y(10));
console.log(y(15));
console.log(y(17));
console.log(isFizzOrBuzz(6));
console.log(isFizzOrBuzz(10));
console.log(isFizzOrBuzz(15));
console.log(isFizzOrBuzz(17));

var repeats = function repeats(str) {
  return Array.from(Array(Math.floor(str.length / 2)), function (e, i) {
    return str.match(new RegExp(".{1,".concat(i + 1, "}"), "g")).reduce(function (a, c, j, r) {
      return a && c == r[0];
    }) ? [str.substring(0, i + 1), str.length / (i + 1)] : "";
  }).filter(function (e) {
    return e.length > 0;
  })[0] || [str, 1];
};

var repeatTest = function repeatTest(str) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var regex = new RegExp(str.substring(0, index), "g");
  var match = str.match(regex);
  return match.length * index === str.length ? [match[0], match.length] : repeatTest(str, index + 1);
};

function repeat(str) {
  var s = "";
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;
      if (s.indexOf(el) === -1) s += el;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
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
  var results = [];
  var width = 1;

  for (var level = 0; level < height; level++) {
    var floor = "*".repeat(width);
    var space = " ".repeat(height - level - 1);
    results.push("".concat(space).concat(floor).concat(space));
    width += 2;
  }

  return results;
}

var towers = function towers(h) {
  return Array(h).fill().map(function (_, i) {
    return " ".repeat(h - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(h - i - 1);
  });
};

console.log(tower(["*", "***", "*****"]));
console.log(towers(["*", "***", "*****"]));

var pad = function pad(str, length) {
  var _char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  var len = (str.length + length) % 2 === 0 ? length : length + 1;
  return str.padStart((str.length + len) / 2, _char).padEnd(len, _char);
};

console.log(pad("cat", 10, ".")); // ....cat....

console.log(pad("js", 20, "*"));

var arrayMul = function arrayMul(num, length) {
  return Array.from(Array(length), function (e, i) {
    return num * (i + 1);
  });
};

var multi = function multi(m, n) {
  return _toConsumableArray(Array(n)).map(function (e, i) {
    return ++i * m;
  });
};

console.log(arrayMul(7, 5)); // [7, 14, 21, 28, 35]

console.log(multi(7, 5)); // [7, 14, 21, 28, 35]

var getType = function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

console.log(getType([]));
console.log(getType({}));
console.log(getType(true));
console.log(getType(""));
console.log(getType(1));
console.log(getType(new Date()));
console.log(getType(new Set([])));
console.log(getType(null));
console.log(getType(undefined));

var filterArray = function filterArray(arr) {
  return arr.filter(function (f) {
    return f === ~~f;
  });
}; // เลขเต็มจำนวน


console.log(filterArray([1, 2, "a", "b"])); // [1, 2]

console.log(filterArray([1, "a", "b", 0, 15])); // [1, 0, 15]

console.log(filterArray([1, 2, "3", "4", 5, "6"]));

var fnDuplicate = function fnDuplicate(ar) {
  return ar.length != _toConsumableArray(new Set(ar)).length;
}; // หาต่าซ่ำกันหรือไม่


var isDuplicate = function isDuplicate(numbers) {
  return numbers.reduce(function (p, c, i, a) {
    return p || a.filter(function (n) {
      return n === c;
    }).length > 1;
  }, false);
}; // หาต่าซ่ำกันหรือไม่


console.log(fnDuplicate([]));
console.log(fnDuplicate([1]));
console.log(fnDuplicate([1, 2, 3]));
console.log(fnDuplicate([1, 1]));
console.log(isDuplicate([]));
console.log(isDuplicate([1]));
console.log(isDuplicate([1, 2, 3]));
console.log(isDuplicate([1, 1]));

var orderBy = function orderBy(arr, props, orders) {
  return _toConsumableArray(arr).sort(function (a, b) {
    return props.reduce(function (acc, prop, i) {
      if (acc === 0) {
        var _ref = orders && orders[i] === "desc" ? [b[prop], a[prop]] : [a[prop], b[prop]],
            _ref2 = _slicedToArray(_ref, 2),
            p1 = _ref2[0],
            p2 = _ref2[1];

        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }

      return acc;
    }, 0);
  });
};

var users = [{
  name: "fred",
  age: 48
}, {
  name: "barney",
  age: 36
}, {
  name: "fred",
  age: 40
}];
console.log(orderBy(users, ["name", "age"], ["asc", "desc"])); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]

console.log(orderBy(users, ["name", "age"])); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]

var nest = function nest(items) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var link = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "parent_id";
  return items.filter(function (item) {
    return item[link] === id;
  }).map(function (item) {
    return _objectSpread({}, item, {
      children: nest(items, item.id, link)
    });
  });
};

var comments = [{
  id: 1,
  parent_id: null
}, {
  id: 2,
  parent_id: 1
}, {
  id: 3,
  parent_id: 1
}, {
  id: 4,
  parent_id: 2
}, {
  id: 5,
  parent_id: 4
}];
var nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]

console.log(nestedComments);