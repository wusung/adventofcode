import { readLines } from "https://deno.land/std@0.79.0/io/mod.ts";
import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

const filename = path.join(Deno.cwd(), "./input.txt");
let fileReader = await Deno.open(filename);


// prepare data
let arr1 = []
let arr2 = []
let arr3 = []
for await (let line of readLines(fileReader)) {
//   console.log(line);
  if (line !== '') {
    arr1.push(parseInt(line))
    arr2.push(parseInt(line))
    arr3.push(parseInt(line))
  }
}

let expectedSum = 2020;

let results = []
for (let i of arr1) {
    for (let j of arr2) {
        for (let k of arr3) {
          if ((i + j + k) == expectedSum) {
              results.push([i, j, k])
          }
        }
    }
}
console.log(results)

for (let i of results) {
  console.log(i[0] * i[1] * i[2])
}
