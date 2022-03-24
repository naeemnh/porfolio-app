input = document.querySelector('input');
inputWidth = 4;
input.style.width = inputWidth + 'px';

/**
 * 
 * @param {number} key ASCII Code generated for the key pressed down
 */
const addValue = (key) => {
    query = input.value;
    input.value = query + key;
}

const removeValue = () => {
    query = input.value;
    input.value = query.slice(0,-1);
}

const adjustInputWidth = () => {
    length = input.value.length;
    inputWidth = (length*13.1) + 4;
    input.style.width = inputWidth + 'px';
} 

/**
 * 
 * @param {Object} param0 Information about the key pressed down
 */
const inputLog = ({key, keyCode}) => {
    //Executable Code
    switch (true) {
        case (keyCode == 32):
        case (keyCode >=48 && keyCode <=57):
        case (keyCode >=65 && keyCode <=90):
        case (keyCode >=186 && keyCode <=192):
        case (keyCode >=219 && keyCode <=222):
            addValue(key);
            break;
        case (keyCode == 8):
            removeValue();
            break;
        default:
            break;
    }
    adjustInputWidth()


    // Debug
    // console.log(keyCode);
    // console.log(key);
    // console.log(`"${input.value}"`);
}

document.addEventListener('keydown', inputLog);
