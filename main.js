let h2 = document.querySelector(".scene #text")
let img2 = document.querySelector(".scene #img1")
let img22 = document.querySelector(".scene #img2")
let img3 = document.querySelector(".scene #img3")
let masjid = document.querySelector(".scene #img4")
window.addEventListener("scroll" , () => {
    let scrollY = window.scrollY
    h2.style.transform = `translateY(-${scrollY + 10}px)`
    img2.style.marginTop = `${scrollY}px`
    img22.style.marginTop = `${scrollY}px`
    img3.style.marginTop = `${scrollY}px`
    masjid.style.transform = `translateY(-${scrollY / 30}px)`
})