var main = document.getElementById("main");
var a = [
    "https://images.unsplash.com/photo-1709884732294-ac35fa831eb4?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709884732297-4b3c1a3f725b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
];
var s = "";
for (let i = 1; i <= 48; i++) {
    let r = Math.floor(Math.random() * a.length);
    s += `<div class="card">
            <img src="${a[r]}" alt="Random Image">
          </div>`;
}
main.innerHTML = s;
