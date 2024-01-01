function shorten() {
    let url = document.getElementById("input-url").value;
    if(!url) {
        alert("Insira uma URL válida para continuar");
        return;
    }

    let headers = {
        "Content-Type": "application/json",
        "apiKey": "57f7156e69a24593a6f8f60a7900bcdf"
    }

    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })  
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
    });
}

function copy() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    try {
        document.execCommand('copy');
        alert(`URL copiada: ${inputUrl.value}`);
    } catch (err) {
        console.error('Erro ao copiar: ', err);
        alert('Não foi possível copiar a URL. Por favor, copie manualmente.');
    }
}
