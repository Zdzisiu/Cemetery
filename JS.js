function ANY(div,outputs) {
    let i = Math.floor(Math.random() * outputs.length);
    let doc = document.getElementById(div)
    doc.innerHTML += outputs[i];
}