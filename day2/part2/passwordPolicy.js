import { readLines } from "https://deno.land/std@0.79.0/io/mod.ts";
import * as path from "https://deno.land/std@0.79.0/path/mod.ts";

const filename = path.join(Deno.cwd(), "./input.txt");
let fileReader = await Deno.open(filename);

let regexp = /([0-9]+)-([0-9]+) ([a-z]{1}): (\w*)/

function getMatches(str, substr) {
    let count = 0
    for (let i = 0; i<str.length+1-substr.length; i++) {
        if (str.substring(i, substr.length+i) == (substr)) {
            count++;
       }
    }
    return count;
}

let count = 0
for await (let line of readLines(fileReader)) {
    let values = line.match(regexp)
    if (values == null) {
        console.log(line)
    } else {
        let start = values[1]
        let end = values[2]
        let key = values[3]
        let str = values[4]
        
        let matched = key === str[start - 1] && key === str[end - 1]
        console.log(`${key} ${start} ${end} ${str} ${str[start-1]} ${str[end-1]} ${matched}`)
        if (key !== str[start - 1] && key === str[end - 1] || 
            key === str[start - 1] && key !== str[end - 1]) {
            count++
        }
    }
}

console.log(`total = ${count}`)
