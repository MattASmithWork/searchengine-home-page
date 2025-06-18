let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(() => {
    let currentTime = new Date()

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours()
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes()
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds()
}, 1000)

function searchGoogle() {
    const query = document.getElementById('searchInput').value;
    if (query) {
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
    }
}