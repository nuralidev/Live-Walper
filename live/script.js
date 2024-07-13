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
    console.log(saniye)
}

setInterval(trick, 1000)