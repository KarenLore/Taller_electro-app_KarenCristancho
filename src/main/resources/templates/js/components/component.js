document.getElementById("btnMostrar").addEventListener("click", () => {
            fetch(URL_API, {
                method: "GET",
                headers: myHeaders
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("resultado").innerText = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                document.getElementById("resultado").innerText = "Error: " + error;
            });
        });