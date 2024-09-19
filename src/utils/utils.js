function* idGenerator() {
    let num = 1;
    while (true) {
        yield num++;
    }
}

export {
    idGenerator,
}