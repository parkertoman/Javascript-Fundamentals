const taskOne = () => {
    let counter = 5;
    while (counter < 26) {
        console.log(counter);
        counter++;
    };
};
taskOne();

const taskTwo = () => {
    for(index = 0; index < 31; index++) {
        if (index === 0) continue;
        if (index % 3 === 0) {
            console.log(index)
        };
    };
};
taskTwo();