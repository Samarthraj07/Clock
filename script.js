
setInterval(setClock , 1000)
const SecondsHand = document.querySelector('[data-seconds]')
const MinutesHand = document.querySelector('[data-mins]')
const HoursHand = document.querySelector('[data-hours]')


function setClock(){
    const currentDate = new Date()
    const secRatio = currentDate.getSeconds() / 60
    const minRatio = (secRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minRatio + currentDate.getHours()) /12
    
    setRotation(SecondsHand , secRatio)
    setRotation(MinutesHand , minRatio)
    setRotation(HoursHand , hourRatio)

}


function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()