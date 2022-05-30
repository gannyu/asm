const a = 10;
const b = 20;

function sum(a, b) {
    //kiểm tra
    if (!isNaN(a) || !isNaN(b)) {
        return -1;
    }
    //xử lí
    const result = a + b;
    //kết quả
    return result;
}
console.log(sum(a, b));