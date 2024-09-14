import Layer from "./Layer"
import { DEFAULT_TEXT, HIDDEN_TEXT, INPUT_TEXT, OUTPUT_TEXT } from "./utils/Constant"

export default class Model {
    /* TODO:
        1. Handle Input "all types of input" and node connection
        2. map the inputs or pass the input node ids to each hidden node (NODE INPUT MAPPING)
        3. Layer Connections
    */
    //for now the input is number and output is number and the no of nodes is 1 for each layer
    constructor(input, noOfHiddenLayer = 1, activationFunction = DEFAULT_TEXT) {
        this.idGeneator = idGenerator()
        this.activationFunction = activationFunction;
        this.input = input;

        this.inputLayer = new Layer(this, INPUT_TEXT, input);

        this.hiddenLayers = [];

        for (let i = 0 ; i < noOfHiddenLayer; i++) {
            this.hiddenLayers.push(
                new Layer(this, HIDDEN_TEXT),
            )
        }

        this.outputLayer = new Layer(this, OUTPUT_TEXT);
    }

    // TODO: Handle all the activation functions types
    getActFun() {
        switch (this.activationFunction) {
            case (DEFAULT_TEXT):
                return (x) => { return x };
        }
    }

    // function handles the layer connection
    mapLayers(inLayer, outLayer) {

    }
}