document.addEventListener('DOMContentLoaded', () => {
    initApp();
});
const initApp = () => {
    let inputText = document.querySelector('#input-text');
    let upperCaseBtn = document.querySelector('#upper-case');
    let lowerCaseBtn = document.querySelector('#lower-case');
    let properCaseBtn = document.querySelector('#proper-case');
    let sentenceCaseBtn = document.querySelector('#sentence-case');
    let saveFileBtn = document.querySelector('#save-text-file');

    upperCaseBtn.addEventListener("click", () => {
        inputText.value = inputText.value.toUpperCase();
    });

    lowerCaseBtn.addEventListener("click", () => {
        inputText.value = inputText.value.toLowerCase();
    });

    properCaseBtn.addEventListener("click", () => {
        let textArray = inputText.value.toLowerCase().split(' ');
        for (let i = 0; i < textArray.length; i++) {
            textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
        }
        inputText.value = textArray.join(' ');
    });

    sentenceCaseBtn.addEventListener("click", () => {
        let textArray = inputText.value.toLowerCase().split('. ');
        for (let i = 0; i < textArray.length; i++) {
            textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
        }
        inputText.value = textArray.join('. ');
    });

    saveFileBtn.addEventListener("click", () => {
        function download(filename, text) {
            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }

        // Start file download.
        download("text.txt", inputText.value);
    });
};