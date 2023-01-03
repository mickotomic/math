import axios from "axios";

const expression = "4 * (a5 - 3)";

const URL = `http://api.mathjs.org/v4/?expr=${expression}`;

async function math() { 
    try {
        const response = await axios.get(URL);
        console.log(`Status: SUCCESS\nValue: ${response.data}\nExpression: ${expression}\n`);
        
    }
    catch (err) {
        console.log(`Status: FAILURE\nValue: N/A\nExpression: ${expression}\nReason: ` + err);
       
    }
}

if ((/^[0-9*-+/()]/g).test(expression)) { 
    math();
}