const clock = document.querySelector(".clock")

const trick = () => {
    const newDate = new Date()
    let saat = newDate.getHours()
    let deqiqe = newDate.getMinutes()
    let saniye = newDate.getSeconds()
    if (saat< 10) {
        saat = "0" + saat

    }
    if (deqiqe < 10) {
        deqiqe= "0" + deqiqe

    }
    if (saniye < 10) {
        saniye = "0" + saniye

    }
    const html = `
   <span class="new">${saat}:</span>
   <span class="new" >${deqiqe}:</span>
   <span class="new" >${saniye}</span>
   `
    clock.innerHTML = html
}
setInterval(trick, 1000)
document.addEventListener("DOMContentLoaded", () => {
    function fetchIpInfo() {
      fetch('https://ipinfo.io/json?token=e07621bb9aebfc')
        .then(response => response.json())
        .then(data => {
          console.log('IP Adresiniz:', data.ip);
          console.log('Unvan:', data.city + ', ' + data.region + ', ' + data.country);
          console.log('Təxmini Ünvan:', data.loc);
        })
        .catch(error => console.error('Diqqet Xeta:', error));
    } 
    fetchIpInfo()
    })