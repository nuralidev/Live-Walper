const clock = document.querySelector(".clock")

const trick = () => {
    const newDate = new Date()
    const saat=newDate.getHours()
    const deqiqe=newDate.getMinutes()
    const saniye=newDate.getSeconds()
   const html=`
   <span class="new">${saat}:</span>
   <span class="new" >${deqiqe}:</span>
   <span class="new" >${saniye}</span>
   `
   clock.innerHTML=html
}

setInterval(trick, 1000)