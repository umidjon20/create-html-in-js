let wrapper = document.createElement('div')
// wrapper.classList.add('wrapper')
wrapper.style.cssText = `
    margin: 4rem auto;
    width: 600px;
    height: 450px;
    border-radius: 8px;
    background-image: url(../img/bg-chanel.png);
    background-repeat: no-repeat;
    background-color:  rgb(250, 246, 246);
    display: flex;
    justify-content: end;
`

let content = document.createElement('div')
content.style.cssText = `
    width: 50%;
    height: 100%;
    display: grid;
    align-content: space-around;

`

let perfume = document.createElement('p')
perfume.innerText = 'Perfume'
perfume.style.cssText = `
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 5px;
    padding-left: 1rem;
    color: #6C7289;`
let h1 = document.createElement('h1')
h1.innerText = 'Gabrielle  Essence Eau De Parfum'
h1.style.cssText = `  
    width: 250px;
    font-family: 'Fraunces';
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0px;

padding-left: 1rem;
color: #1C232B; `
let describe = document.createElement('p')
describe.innerText = 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'
describe.style.cssText = `
    width: 250px;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0px;
    padding-left: 1rem;
    color: #6C7289;`

let discount = document.createElement('div')
let price  =document.createElement('span')
discount.innerText = '$149,99'
price.innerText = '$169,99'
discount.style.cssText = `
    font-family: 'Fraunces';
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0px;
    padding-left: 1rem;
    color: #3D8168;`

price.style.cssText = `
    font-family: 'Montserrat';
    font-size: 13px;
    font-weight: 500;
    line-height: 23px;
    padding-left: 10px;
    text-decoration: line-through;
    color: #6C7289;`    

discount.append(price)

let btn = document.createElement('button')
btn.innerText = 'Add to card'
btn.style.cssText = `
width: 236px;
height: 48px;
border-radius:8px;
border: none;
margin-left: 1rem;
background-image:url(../img/btn.svg);
background-repeat:no-repeat;
background-position:22%  ;
background-color: #3D8168;
font-family: 'Montserrat';
font-size: 15px;
font-weight: 700;
line-height: 17px;
color: #fff;`

document.body.append(wrapper)
wrapper.append(content)
content.append(perfume)
content.append(h1)
content.append(describe)
content.append(discount)
content.append(btn)