let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

let niz = []
let kupac = document.querySelector('#kupac')
let select = document.querySelector('#select-dino')
let naruci = document.querySelector('#naruci')
let text = document.querySelector('.textarea-field')
let narudzbina = document.querySelector('#item-container')
let btnIspis = document.querySelector('#btn-all')
let i=0

dinos.forEach(e=>{
    let opt = document.createElement('option')
    opt.textContent = e.name
    select.appendChild(opt)
    
})




// console.log(select.selectedIndex)

naruci.addEventListener('click',b=>{
    b.preventDefault()

if (kupac.value.trim().length >= 4 && select.value !=='' ){


    let search = dinos.find(t=>{
        return select.selectedIndex === t.id
    })
    // console.log(search)

    let div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML = `<p><span>Купац:</span> ${kupac.value}</p><p><span>Напомена:</span>${text.value}</p><p><span>Диносаурус: </span> ${select.value}</p><p><span>Цена: </span> ${search.cena}</p>`
    let btnDel = document.createElement('button')
    btnDel.textContent = 'Delete'

    narudzbina.appendChild(div)
    div.appendChild(btnDel)

    btnDel.addEventListener('click',s =>{
        btnDel.parentElement.remove()
        
    })


niz.push({
        id: i,
        name: select.value,
        img: search.img,
        cena: search.cena

})
            i++
            kupac.value=''
            select.value=''
            text.value=''
   } else {
       let greska = document.createElement('p')
       greska.textContent ='Ime kupca mora biti najmanje 4 karaktera i morate izabrati dinosaurusa'
       narudzbina.appendChild(greska)
       setTimeout( () => {
           greska.remove()
       },1500)
   }
})

btnIspis.addEventListener('click', e=>{

    console.log(niz)
})