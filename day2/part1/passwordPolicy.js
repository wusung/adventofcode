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
        let matches = getMatches(str, key)

        if (matches >= start && matches <= end) count++
    }
}

console.log(`total = ${count}`)
