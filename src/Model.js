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

        this.inputLayer = new Layer(this, INPUT_TEXT, input.length);

        this.hiddenLayers = [];

        /**
         *  a. 1 hidden layer for simple tasks (e.g., linear or low-dimensional data).
            b. 2-3 hidden layers for moderately complex tasks.
            c. More than 3 layers for highly complex tasks (e.g., image processing, NLP tasks).
         */
        /* TODO: implement regulation to drop layers to check if its overfitting 
            add layers or nodes if its underfitting
            L2 regularization (weight decay): Penalizes large weights, which helps reduce overfitting.
        */
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
    mapLayers() {

        // mapping input layer to the hidden layer
        this.hiddenLayers[0].setInput(this.inputLayer);

        // mapping layers to its previous layers
        for (let i = 1; i < this.hiddenLayers.length; i++) {
            this.hiddenLayers[i].setInput(this.hiddenLayers[i - 1]);
        }

        // mapping output layer to the last hidden layer
        this.outputLayer.setInput(this.hiddenLayers[this.hiddenLayers.length - 1]);
    }
}