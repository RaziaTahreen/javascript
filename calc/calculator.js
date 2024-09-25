
    function show(value) {
        document.getElementById('display').value += value;

        }

    function clearDisplay() {
        document.getElementById('display').value = '';
        }


    function del() {
        let cValue = document.getElementById('display').value;
    document.getElementById('display').value = cValue.slice(0, -1);
        }


    function calAnswer() {
        let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;

        }
