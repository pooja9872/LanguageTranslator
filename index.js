async function translater() {

    let que = document.getElementById('inp').value;
    let language_select = document.getElementById("lang").value;
    const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: que,
            source: "en",
            target: language_select,
        }),
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": true }
    });

    let r = await res.json();
    var output = document.getElementById('output');
    output.innerHTML = r.translatedText;
}
