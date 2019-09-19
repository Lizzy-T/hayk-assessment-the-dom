const h1 = document.querySelector('h1')
h1.innerText = "HACKED!"

const links = document.querySelectorAll('a')

function badlinks() {
    for (const eachLink of links){
        eachLink.href = "https://thebadguys.com"
        }
    }

badlinks()

body = document.querySelector('body')

pic = document.createElement('img')
pic.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png"

body.prepend(pic)

mainPChilren = document.querySelectorAll('main > p')

function removep (){
    for (const eachElement of mainPChilren){
        eachElement.remove()
    }
}

removep()

main = document.querySelector('main')
pedit = document.createElement('p')
pedit.innerText = "Your account has been compromised."
main.append(pedit)

pCompromise = document.querySelector('p > span')
pCompromise.innerText = "0"