function func1() {
    try {
        func2();
    } catch (error) {
        throw error;
    }
}


function func2() {
    try {
        func3();
    } catch (error) {
        throw error;
    }
}

console.log(func3());

function func3() {
    try {
        console.log(0 / a);
    } catch (error) {
        throw error;
    }
    return 'success';

}