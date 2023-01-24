let current = "0";
let memory = "0";
let operator = null;

function calcGen()
{
AppContent.insertAdjacentHTML("beforeend",`
    <div id="calculator">
        <div id="display">0</div>
        <div id="buttons">
            <div data-id="clear-all">C</div>
            <div data-id="pi">π</div>
            <div data-id="divide">/</div>
            <div data-id="delete"><i class="fa-solid fa-delete-left"></i></div>
            <div data-id="7">7</div>
            <div data-id="8">8</div>
            <div data-id="9">9</div>
            <div data-id="multiply">*</div>
            <div data-id="4">4</div>
            <div data-id="5">5</div>
            <div data-id="6">6</div>
            <div data-id="subtract">-</div>
            <div data-id="1">1</div>
            <div data-id="2">2</div>
            <div data-id="3">3</div>
            <div data-id="add">+</div>
            <div data-id="positive-negative">+/-</div>
            <div data-id="0">0</div>
            <div data-id="decimal">.</div>
            <div data-id="equal">=</div>
        </div>
    </div>`);

    addStyle.innerHTML = `
    #calculator {
        width: 200%;
        max-width: 410px;
        margin: 2% 5%;
        text-align: center;
        padding-top: 2%;
    }

    #display {
        width: 100%;
        padding: 20px;
        background-color: #ddd;
        font-size: 30px;
        text-align: right;
        box-sizing: border-box;
    }

    #buttons {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-top: 30px;
    }

    #buttons > div {
        width: 24.2%;
        background-color: gray;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
        border: solid 1px darkgray;
        padding: 40px 0;
    }

    #buttons > div:hover {
        background-color: #eee;
    }`;
    
    //fonctionnement des boutons
    document.getElementById("buttons").addEventListener("click", function(event){
        const button = event.target;
        if (button.tagName === "DIV") {
            const id = button.getAttribute("data-id");
            if (id === "clear-all") {
                current = "0";
                memory = "0";
                operator = null;
                updateDisplay();
            } else if (id === "pi") {
                current = "3.141592653589";
                updateDisplay();
            } else if (id === "divide") {
                handleOperator("/");
            } else if (id === "delete") {
                current = current.toString().slice(0, -1);
                if (!current) {
                    current = "0";
                }
                updateDisplay();
            } else if (id === "multiply") {
                handleOperator("*");
            } else if (id === "subtract") {
                handleOperator("-");
            } else if (id === "add") {
                handleOperator("+");
            } else if (id === "positive-negative") {
                current = current * -1;
                updateDisplay();
            } else if (id === "equal") {
                handleEqual();
            } 
            else if (id === "decimal") {
                if (current.indexOf(".") === -1) {
                    current += ".";
                }
                updateDisplay();
            }else if(!isNaN(id) && id!=null){
                handleNumber(id);
            }
        }
    });
    
    //fonction de gestion d'affichage
    function handleNumber(num) {
        if (current === "0") {
            current = num;
        }
        else {
        current += num;
    }
    console.log(num);
    updateDisplay();
}

function handleOperator(nextOperator) {
    if (operator && current) {
        handleEqual();
    }
    operator = nextOperator;
    memory = current;
    current = "";
}

function handleEqual() {
    if (operator === "+") {
        current = parseFloat(memory) + parseFloat(current);
    } else if (operator === "-") {
        current = parseFloat(memory) - parseFloat(current);
    } else if (operator === "*") {
        current = parseFloat(memory) * parseFloat(current);
    } else if (operator === "/") {
        current = parseFloat(memory) / parseFloat(current);
    }
    operator = null;
    memory = "0";
    updateDisplay();
}
function updateDisplay() {
    if (current.length > 14) {
        current = current.slice(0, 14);
    }
    document.getElementById("display").textContent = current;
}
}