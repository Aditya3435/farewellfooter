const text = document.getElementById('textrotate');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i*16}deg)">${char}</span>`
).join("");