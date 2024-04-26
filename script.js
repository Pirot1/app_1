/*querySelectors*/
let button = document.querySelector('.btn')
let head = document.querySelector('header')
let main = document.querySelector('main')
let meme = document.querySelector('.meme')
let planets = document.querySelectorAll('.planet')
let imgs = document.querySelectorAll('.img')
/*functions*/
head.style.backgroundImage == 'url("https://images01.nicepage.io/a1389d7bc73adea1e1c1fb7e/335bc12dcce55b76af124ec3/59f86e9a43e6f89908a4f0b948915bef.png")'
button.addEventListener('click',function(){
    if(head.style.backgroundImage == 'url("https://images01.nicepage.io/a1389d7bc73adea1e1c1fb7e/335bc12dcce55b76af124ec3/59f86e9a43e6f89908a4f0b948915bef.png")'){
        head.style.backgroundColor = 'rgb(31, 31, 204)'
        main.style.backgroundColor = 'rgb(137, 157, 169)'
        head.style.color = 'black'
        head.style.backgroundImage = 'url("https://masterpiecer-images.s3.yandex.net/748490694bfc11ee92f3363fac71b015:upscaled")'
    }else{
        head.style.backgroundColor = 'rgb(8, 8, 50)'
        main.style.backgroundColor = 'rgb(7, 2, 25)'
        head.style.color = 'white'
        head.style.backgroundImage = 'url("https://images01.nicepage.io/a1389d7bc73adea1e1c1fb7e/335bc12dcce55b76af124ec3/59f86e9a43e6f89908a4f0b948915bef.png")'
    }
})
meme.addEventListener('dblclick',function(){
    head.style.backgroundImage = 'url("https://www.meme-arsenal.com/memes/1f8fb640d0a758966fb92441586c9bd5.jpg")'
    head.style.color = 'black'
})

