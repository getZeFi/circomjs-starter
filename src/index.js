const {CircomJS} = require("@zefi/circomjs")

const main = async() => {
    const circomjs = new CircomJS()
    const circuit =  circomjs.getCircuit("mul")

    // important to await compilation, before running circuit.genProof()
    await circuit.compile()

    const input = {
        x: 3,
        y: 5
    }

    // generates proof of multiplication of 3 and 5 -> 15
    const proof = await circuit.genProof(input);
    console.log("proof verification result ----->",await circuit.verifyProof(proof))
}

main()