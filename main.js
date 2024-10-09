import dayjs from 'dayjs'
dayjs().format()

const date = document.querySelector(".date")
const result = document.querySelector(".result")
date.addEventListener("change", (e)=>onchange(e))
console.log("fuera de onchange")

const onchange = (e) => {
    result.textContent = dayjs(date.value).fromNow()
}

