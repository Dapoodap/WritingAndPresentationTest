let inputan = document.getElementById("nama-pegawai")
let forme = document.getElementById("form")
let pegawai = []
const container = document.getElementById("list-pegawai")


if (localStorage.getItem("pegawai")) {
    let buatpush = JSON.parse(localStorage.getItem("pegawai"))
    buatpush.map((item) => {
        pegawai.push(item)
        localStorage.setItem("pegawai", JSON.stringify(pegawai))
        const li = document.createElement("li")
        li.innerText = item
        container.appendChild(li)
    })
}



forme.addEventListener('submit', eve => {
    eve.preventDefault()
    let inputValue = inputan.value
    pegawai.push(inputValue)
    localStorage.setItem("pegawai", JSON.stringify(pegawai))
    const li = document.createElement("li")
    li.innerText = inputValue
    container.appendChild(li)

})