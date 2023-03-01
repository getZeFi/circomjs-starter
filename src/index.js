const {CircomJS} = require("../../circomjs")

const main = async() => {
    const circomjs = new CircomJS()
    const circuit =  circomjs.getCircuit("mul")

    // important to await compilation, before running circuit.genProof()
    await circuit.compile()

    const input = {
        x: 3,
        y: 5
    }

    const proof = await circuit.genProof(input);
    console.log("proof verification result ----->",await circuit.verifyProof(proof))
}

main()