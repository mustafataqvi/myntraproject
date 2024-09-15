let s1 = document.getElementById("square1");
s1.addEventListener("mouseenter", function() {
    let r = Math.floor(Math.random() * 100);
    s1.innerHTML = `<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave", function() {
    s1.innerHTML = '<h1>1</h1>';
});

let clr = "green";
let s2 = document.getElementById("square2");
s2.addEventListener("mouseenter", function() {
    if (clr == "green") {
        s2.style.backgroundColor = "green";
        clr = "red";
    } else {
        s2.style.backgroundColor = "red";
        clr = "green";
    }
});

s2.addEventListener("mouseleave", function() {
    s2.style.backgroundColor = "white";
});

let s3 = document.getElementById("square3");
s3.addEventListener("mouseenter", function() {
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    s3.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;
});
s3.addEventListener("mouseleave", function() {
    s3.style.backgroundColor = "white";
});
let s4 = document.getElementById("square4");
s4.addEventListener("mouseenter", function() {
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    s1.style.backgroundColor =  `rgb(${r1}, 0, ${r3})`;
    s2.style.backgroundColor = `rgb(${r1}, ${r2}, 0 ) `;
    s3.style.backgroundColor = `rgb(0, ${r2}, ${r3})`;
})
s4.addEventListener("mouseleave", function() {
    s3.style.backgroundColor = "white";
     s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
});