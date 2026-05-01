function createColorMap() {
    const colorMap = new Map();
    colorMap.set('R', 'red');
    colorMap.set('B', 'blue');
    colorMap.set('G', 'green');
    colorMap.set('Y', 'yellow');
    colorMap.set('P', 'purple');
    colorMap.set('O', 'orange');
    return colorMap;
}

function logColor(value, key) {
    console.log(`The key is ${key}. The value is ${value}.`);
}

function displayColors() {
    createColorMap().forEach(logColor);
}

displayColors();