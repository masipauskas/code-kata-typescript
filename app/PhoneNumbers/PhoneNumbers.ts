export default class PhoneNumbers {
    isConsistent(numbers: Array<String>): boolean {
        var trimmedNumbers: Array<String> = numbers.map((val, index, array) => { return array[index].replace(/\W/g, ""); });
        var consistent = true;

        trimmedNumbers.forEach((val, index, array) => {
            array.forEach((val, idx, array) => {
               if (array[index] != array[idx]) {
                   consistent = consistent && !array[idx].startsWith(array[index])
               }
            });
        });

        return consistent;
    }
}
