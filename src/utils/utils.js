
// Функция разбивки предложения на цифровую и буквенную части
export function extraNumberWrapper(string) {

    //Best performance
    const number = string.substr(0,string.indexOf(' '));
    const cutString = string.substr(string.indexOf(' ')+1);

    if(isNaN(number))
        return {string}

    return {
        number: number,
        string: cutString
    }
}