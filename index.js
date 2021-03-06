
let arr = [
    { type: "num", value: 0 },
    { type: "num", value: 1 },
    { type: "num", value: 2 },
    { type: "num", value: 3 },
    { type: "num", value: 4 },
    { type: "num", value: 5 },
    { type: "num", value: 6 },
    { type: "num", value: 7 },
    { type: "num", value: 8 },
    { type: "num", value: 9 },
    { type: "str", value: "mohib1" },
    { type: "str", value: "rony" },
    { type: "str", value: "mohib2" },
    { type: "str", value: "mohib3" },
    { type: "str", value: "mohib4" },
    { type: "str", value: "mohib5" },
    { type: "str", value: "mohib6" },
    { type: "str", value: "mohib7" },
    { type: "str", value: "mohib8" },
    { type: "str", value: "mohib9" },
    { type: "str", value: "mohib10" },
    { type: "str", value: "mohib11" },
    { type: "str", value: "mohib12" },
    { type: "str", value: "mohib13" },
    { type: "str", value: "mohib14" },
    { type: "str", value: "mohib15" },
    { type: "str", value: "mohib16" },
    { type: "str", value: "mohib17" },
    { type: "str", value: "mohib18" }

];

let initialFromLength = 10;
let fromLength = initialFromLength;
let strButtonView = 10;
let toLength = fromLength + strButtonView;
let total = arr.length;
let isShow = false;
let selectionStart = 0;
let selectionEnd = 0;

const createButton = () => {
    var buttonText = '';
    var buttonNum = '';
    arr.map((item, index) => {
        if (item.type === "str" && index >= fromLength && index <= toLength) {
            buttonText += `<div class="col px-0 mb-1"><button onclick="getData('${item.value}')" type="button" class="btn btn-light">${item.value} </button></div>`;
        }
        else if (item.type === "num") {
            buttonNum += `<div class="col px-1"><button onclick="getData('${item.value}')" type="button" class="btn btn-light btn-block">${item.value} </button></div>`;
        }
    });
    document.getElementById("allNum").innerHTML = buttonNum;
    document.getElementById("allStr").innerHTML = buttonText;
};
const getData = (value) => {
    let existValue = document.getElementById("calculatorValue").value;
    let superscript = { 0: '\u2070', 1: '\u00B9', 2: '\u00B2', 3: '\u00B3', 4: '\u2074', 5: '\u2075', 6: '\u2076', 7: '\u2077', 8: '\u2078', 9: '\u2079' }
    let subscript = { 0: '\u2080', 1: '\u2081', 2: '\u2082', 3: '\u2083', 4: '\u2084', 5: '\u2085', 6: '\u2086', 7: '\u2087', 8: '\u2088', 9: '\u2089' }
    let isNum = Number(value);
    console.log(isNum);
    if (value == 'space') {
        document.getElementById("calculatorValue").value = `${existValue} `;
    }
    else if (isNum || isNum == 0) {
        document.getElementById("calculatorValue").value = `${existValue}${superscript[isNum]}`;
    } else {
        if (existValue == '') {
            document.getElementById("calculatorValue").value = `${existValue}${value}`;
        } else {
            document.getElementById("calculatorValue").value = `${existValue}, ${value}`;
        }

    }
    document.getElementById("calculatorValue").focus();
}
const previous = () => {
    if (toLength - strButtonView > initialFromLength) {
        toLength = fromLength - 1;
        fromLength = toLength - strButtonView;
    } else {
        fromLength = initialFromLength;
    }
    createButton();
    document.getElementById("calculatorValue").focus();
};
const next = () => {
    if (fromLength + strButtonView < total) {
        fromLength = toLength + 1;
        toLength = fromLength + strButtonView;
    }
    createButton();
    document.getElementById("calculatorValue").focus();
}
createButton();
const isKeyboardShow = () => {
    if (isShow) {
        document.getElementById("keyboard").style.display = 'block';
        isShow = !isShow;
        document.getElementById("showHide").innerHTML = 'hide'
    } else {
        document.getElementById("keyboard").style.display = 'none';
        isShow = !isShow;
        document.getElementById("showHide").innerHTML = 'show'
    }
    document.getElementById("calculatorValue").focus();
}
isKeyboardShow()

const backSpace = () => {
    var removeText = '';
    if ((selectionStart >= 0 ) && selectionStart === selectionEnd) {
        var valueArr = existValue.split('');
        console.log("valueArr",valueArr);
        valueArr.splice(selectionStart-1, 1);
        valueArr.filter(Boolean);
        removeText = valueArr.join('');

        if (selectionStart >= 0) {
            selectionStart = selectionStart - 1;
            selectionEnd = selectionEnd - 1
        }
    }
    else if (selectionStart < selectionEnd) {
        var valueArr = existValue.split('');
        valueArr.splice(selectionStart, selectionEnd - selectionStart);
        valueArr.filter(Boolean);
        removeText = valueArr.join('');
        selectionEnd = selectionStart;
    }
    console.log("selectionStart", selectionStart, "selectionEnd", selectionEnd, "removeText", removeText);
    document.getElementById("calculatorValue").value = removeText;
    document.getElementById("calculatorValue").focus();
}

var selectStartEnd = document.getElementById('calculatorValue');
selectStartEnd.addEventListener("click", () => {
    selectionStart = selectStartEnd.selectionStart;
    selectionEnd = selectStartEnd.selectionEnd;
    console.log("selectionStart", selectionStart, "selectionEnd", selectionEnd);

});

const reset=()=>{
    document.getElementById("calculatorValue").value = "";
}