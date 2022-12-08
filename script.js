const classificationNumber = document.querySelectorAll(".classification-number p")

classificationNumber.forEach((number, index) => {
  number.style.transition = "all .5s"

  number.addEventListener("click", () => {
    classificationNumber.forEach(number => {
      number.classList.remove("active")
      number.style.background = "hsl(213, 17%, 23%)"
      number.style.color = "hsl(216, 5%, 50%)"
    })
    number.classList.add("active")
    number.style.background = "hsl(217, 12%, 63%)"
    number.style.color = "hsl(0, 0%, 100%)"
  })
})

const submit = document.querySelector(".submit")
submit.addEventListener("click", () => {
  const feedback = document.querySelector(".active")
  document.querySelector(".feedback").innerText = `You selected ${feedback.innerText} out of 5`
  document.querySelector(".classification").style.display = "none"
  document.querySelector(".thank-you").style.display = "flex"
})