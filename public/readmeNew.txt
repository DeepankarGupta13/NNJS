# NNJS: Neural Networks using JavaScript

NNJS is a simple and powerful JavaScript library designed to implement neural networks directly in the browser. Whether you're working on simple input-output problems or complex image recognition tasks, NNJS provides a lightweight and easy-to-use framework for neural networks.

## Features

- **Simple Neural Network (Single Input-Output):**  
  A basic neural network that allows you to pass an input and output array, such as square numbers, and get the predicted results.
  
- **Complex Neural Network (Multiple Inputs-Multiple Outputs):**  
  Advanced neural network for tasks such as image recognition using multiple input features and predicting multiple outputs.
  
- **Generative AI:**  
  A text-based generative AI model capable of summarizing or elaborating on input statements or generating images from text descriptions.

## Getting Started

Follow these instructions to get NNJS up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following:

- A modern web browser that supports WebGL (e.g., Chrome, Firefox, Edge).
- Basic knowledge of HTML, CSS, and JavaScript.

### Installation

To set up NNJS on your local machine:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/DeepankarGupta13/NNJS.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd NNJS
    ```

3. **Install the necessary dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```

5. **Open the project in your browser:**  
   Open the browser and go to `http://localhost:3000/` to see the application in action.

### Usage

To start using the neural networks in the NNJS library:

1. **Simple Neural Network (Single Input-Output):**  
   You can manually change the input and output arrays directly in the `App.js` file. For example, set the arrays to test a function like squaring numbers.
   
2. **Complex Neural Network (Multiple Inputs-Multiple Outputs):**  
   Configure the neural network in the `App.js` file for tasks like image detection. Input multiple features, and set the expected outputs.
   
3. **Generative AI:**  
   Use the generative model to summarize, elaborate, or generate content based on textual input.

4. **Initialization and Prediction:**
   - Once the inputs and outputs are set, open your browser, and click the `InitModel` button.
   - Use the `Predict` function to get the neural network's output based on the current input.

*Note: Input through the browser UI is planned for future updates.*

## Technologies Used

- **HTML/CSS:**  
  Used to create a simple user interface to interact with the neural network.
  
- **JavaScript:**  
  The core logic of the neural network is written entirely in JavaScript, making it easy to understand and extend.

## Future Plans

- Add the ability to change inputs directly through the browser interface, removing the need to modify the code manually.
- Implement additional generative models and improve the complexity of the existing neural networks.

---

Feel free to contribute, report issues, or suggest features. Happy coding with NNJS!

