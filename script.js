res = document.getElementById('res')
        function reset() {
            res.innerHTML =''
        }
        
        function insert(num) {
            res.innerHTML += num
        }

        function apagar() {
            if (res.textContent) {
                 result = document.getElementById('res').innerHTML
                 res.innerHTML = result.substring(0, result.length -1)
            }     
        }

        function calcular() {
            if (res.textContent != 'Erro') {
                document.getElementById('res').innerHTML = eval(res.innerHTML)
            }
        }