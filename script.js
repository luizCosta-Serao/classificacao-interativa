const classificationNumber = document.querySelectorAll(".classification-number p")

classificationNumber.forEach((number, index) => {
  number.style.transition = "all .5s"

  number.addEventListener("click", () => {
    classificationNumber.forEach(number => {
      number.style.background = "hsl(213, 17%, 23%)"
      number.style.color = "hsl(216, 5%, 50%)"
    })
    
    number.style.background = "hsl(217, 12%, 63%)"
    number.style.color = "hsl(0, 0%, 100%)"
  })
})