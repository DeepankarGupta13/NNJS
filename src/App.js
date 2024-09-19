import Model from './NN/Model';

export function initModel() {
    const inputs = [1, 2, 3, 4, 5, 6];
    const outputs = [1, 4, 9, 16, 25, 36];

    const model = new Model(1, 1);
    console.log('model: ', model);

    model.train(inputs, outputs);
}