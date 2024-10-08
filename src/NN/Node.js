import { DEFAULT_TEXT, INPUT_TEXT } from "../utils/Constant";

export default class Node {
    /**
     * @param {*} model reference to the model class
     * @param {*} id id of the current node
     * @param {*} inputs array of the nodes which acts as an input to this node
     * @param {*} actFuncType activation function
     */
    constructor(model, id, type = INPUT_TEXT) {
        /* TODO: 
            4. loss calculation: Measuring the Error
            5. back propagation: Learning from Errors
            6. Gradient Descent: Optimizing the Network
            7. Training Process: Putting It All Together
            8. Prediction: Using the Trained Network
        Refer: 
            1. https://www.notion.so/Code-Structure-d39aaf60d57d4528abf243782fa8be45 for codeflow
            2. https://www.notion.so/Theory-for-JS-374f6b9bcd1c48aaaf9924513666fc7a for theory flow
        */

        this.bias = 0;
        this.model = model;
        this.activationFunction = this.model.getActFun();
        this.id = id;

        this.type = type;
    }

    calc() {
        if (this.type === INPUT_TEXT) return this.inputs[0];

        this.output = this.activationFunction(this.weightedSum() + this.bias);
        return this.output;
    }

    weightedSum() {
        let sum = 0;
        for (let [key, value] of this.weightMap) {
            sum += value[0] * value[1].calc();
        }
        return sum;
    }

    /**
     * the weight map will look like
     * {
     *  1: [w1, output from the connected node],
     *  2: [w2, output from the connected node],
     * ......
     * }
     */
    setMap() {
        this.weightMap = new Map();
        for (let i = 0; i < this.inputs.length; i+=1) {
            // the the is input node then theres no need for mapping it to its input node because there will be no input node for this.
            if (this.type === INPUT_TEXT) {
                continue;
            }
            const id = this.inputs[i].id.value;
            this.weightMap.set(id, [this.getRandomWeight(), this.inputs[i]])
        }
    }

    getRandomWeight() {
        switch (this.model.activationFunction) {
            case (DEFAULT_TEXT):
                return (Math.floor(Math.random() * (21)) + 10) / 10; // return random no between -1 to 1 within 1 decimal
        }
    }

    
    get inputs() {
        return this._inputs || new Map();
    }

    set inputs(v) {
        this._inputs = v;
        this.setMap();
    }
}