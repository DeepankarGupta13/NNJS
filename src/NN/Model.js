import Layer from "./Layer.js"
import { DEFAULT_TEXT, HIDDEN_TEXT, INPUT_TEXT, OUTPUT_TEXT } from "../utils/Constant.js"
import { idGenerator } from '../utils/utils.js'

export default class Model {
    /* TODO:
        1. Handle Input "all types of input" and node connection
        2. map the inputs or pass the input node ids to each hidden node (NODE INPUT MAPPING)
        3. Layer Connections
    */
    //for now the input is number and output is number and the no of nodes is 1 for each layer
    constructor(inputNodesNo, noOfHiddenLayer = 1, activationFunction = DEFAULT_TEXT) {
        this.idGenerator = idGenerator()
        this.activationFunction = activationFunction;
        this.inputNodesNo = inputNodesNo;

        this.inputLayer = new Layer(this, INPUT_TEXT, inputNodesNo);

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
                new Layer(this, HIDDEN_TEXT, 2),
            )
        }

        this.outputLayer = new Layer(this, OUTPUT_TEXT);

        this.mapLayers();
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
        this.hiddenLayers[0].connectNodes(this.inputLayer);

        // mapping layers to its previous layers
        for (let i = 1; i < this.hiddenLayers.length; i++) {
            this.hiddenLayers[i].connectNodes(this.hiddenLayers[i - 1]);
        }

        // mapping output layer to the last hidden layer
        this.outputLayer.connectNodes(this.hiddenLayers[this.hiddenLayers.length - 1]);
    }

    // TODO: algo for training model
    train(input, output) {
        /** TODO:
         * pass the input
         * get the output from forward propagation
         * backward propagation to get the losses and fix the weights accordingly
         */

        this.inputLayer.input()
    }
}