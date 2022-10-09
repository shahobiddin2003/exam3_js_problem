// 1-misol

function convert(info) {
  if (info === true) {
    info = "yes";
  } else if (info === false) {
    info = "no";
  } else {
    info = "no";
  }

  return info;
}

console.log(convert(true));
