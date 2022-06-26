const link = document.querySelectorAll('.nav-link')

for (let i of link) {
    i.addEventListener('click', () => {
        for (let n of link) {
            n.classList.remove('active')
        }
        i.classList.add('active')
    })
}

const link2 = document.querySelectorAll('#sidepanel')

for (let r of link2) {
    r.addEventListener('click', ()=>{
        for (let s of link2) {
            n.classList.remove('shift')
        }
        r.classList.add('shift')
    })
}
