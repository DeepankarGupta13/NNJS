import Node from "./Node";
import { DEFAULT_TEXT, HIDDEN_TEXT, INPUT_TEXT, OUTPUT_TEXT } from "../utils/Constant";

// mapping of weights and inputs should be handled at layers instead of nodes
/* For reference: https://www.notion.so/LAYERS-code-flow-10143638c0c080aba99ffbaa24a0cd63 */
export default class Layer {
    constructor(model, type = INPUT_TEXT, noOfNodes = 1) {
        this.model = model;
        this.type = type;

        /* 
            for input layer no of input nodes depends on the inputs
            Example: If your input is an image of size 28×28, you will have 784 input nodes (one for each pixel value).
        */
        this.noOfNodes = noOfNodes;

        this.nodes = [];

        if (this.type === INPUT_TEXT) {
            for (let i = 0; i < noOfNodes; i++) {
                this.nodes.push(
                    new Node(this.model, this.model.idGenerator.next(), this.type)
                )
            }
        }
        else if (this.type === HIDDEN_TEXT) {
            for (let i = 0; i < noOfNodes; i++) {
                this.nodes.push(
                    new Node(this.model, this.model.idGenerator.next(), this.type)
                )
            }
        }
        else if (this.type === OUTPUT_TEXT) {
            this.nodes.push(
                new Node(this.model, this.model.idGenerator.next(), this.type)
            )
        }
    }

    /**
     * connects the node of current layer with input layer
     * @param {*Layer} inputLayer 
     */
    connectNodes(inputLayer) {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].inputs = inputLayer.nodes;
        }
    }
}