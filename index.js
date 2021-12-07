async function translater() {

    let que = document.getElementById('inp').value;
    let language_select = document.getElementById("lang").value;
    console.log(language_select);
    const res = await fetch("https://libretranslate.de/translate", {

        method: "POST",
        body: JSON.stringify({
            q: que,
            source: "en",
            target: language_select,
        }),
        headers: { "Content-Type": "application/json" }
    });


    let r = await res.json();
    console.log(r);
    var output = document.getElementById('output');
    output.innerHTML = r.translatedText;
}