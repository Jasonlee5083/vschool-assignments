// Given an array of mixed types, return an object or array with 4 arrays of their own type
// input - `["cat", [1, 2 ,3], "dog", 1, 4, {name: "john"}, ["pie", "cake"]]`

// output - {
//   strings: ["cat", "dog"],
//   arrays: [[1, 2, 3], ["pie", "cake"]],
//   objects: [{name: "john"}],
//   numbers: [1, 4]
// }

input = ["cat", [1, 2 ,3], "dog", 1, 4, {name: "john"}, ["pie", "cake"]];
outputNumber =[];
outputString =[];
outputObject =[];
outputArray =[];
outputSum =[];

function theirOwnType(input) {
  for (i = 0; i < input.length; i++) {
    if (input[i] instanceof Array) {
      outputArray.push(input[i]);
    }
      else if (typeof(input[i]) === "object") {
      outputObject.push(input[i]);
    }
    else if (typeof(input[i]) === "string") {
      outputString.push(input[i]);
    }
     
    else if (typeof(input[i]) === "number") {
      outputNumber.push(input[i]);
    }
  }
  outputSum = outputSum.concat(outputNumber,outputString,outputObject,outputArray);
   return outputSum;
}
  console.log(theirOwnType(input));


//function objectGenerator(input) {
//
//    var output = {
//        strings: [],
//        arrays: [],
//        objects: [],
//        numbers: [],
//        boolean: []
//    };
//
//    for (var i = 0; i < input.length; i++) {
//        if (typeof (input[i]) === "string") {
//            output.strings.push(input[i])
//        } else if (typeof (input[i]) === "number") {
//            output.numbers.push(input[i])
//        } else if (input[i] instanceof Array) {
//            output.arrays.push(input[i])
//        } else if (typeof (input[i]) === "object") {
//            output.objects.push(input[i])
//        } else if (typeof (input[i]) === "boolean") {
//            output.boolean.push(input[i])
//        }
//    }
//
//    console.log(output);
//}
//
//objectGenerator(input);