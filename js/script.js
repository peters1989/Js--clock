/* Получаем элементы с  HTML */

/* Получаем секундную стрелку */
const sec = document.querySelector('.s'),
    min = document.querySelector('.m'), /* Получаем минутную стрелку */
    hour = document.querySelector('.h') /* Получаем часовую стрелку */

// new Date() - получает текущую дату с устройства
// let date = new Date()

// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
const cifHours = document.querySelector('.hours'),
      cifMin = document.querySelector('.minutes')


function clock() {
    
    let time = new Date()
    let seconds = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30
    
    sec.style = `transform: rotate(${seconds}deg);`
    min.style = `transform: rotate(${minutes}deg);`
    hour.style = `transform: rotate(${hours}deg);`
    // innerHTML - заменяет внутренний контент HTML элемента
    
    
    // рекурсия это когда функция внутри себя вызывает саму себя
    setTimeout(() => clock(), 1000);

    let cifH = time.getHours(),
        cifM = time.getMinutes()

       
        if(cifH == 0 || cifH == 1 || cifH == 2 || cifH == 3 || cifH == 4 || cifH == 5 || cifH == 6 || cifH == 7 || cifH == 8 || cifH == 9 ){
            // cifH = 0 + cifH
            cifHours.innerHTML = '0' + cifH
        }else{
            cifHours.innerHTML = cifH
        }

        if(cifM == 0 || cifM == 1 || cifM == 2 || cifM == 3 || cifM == 4 || cifM == 5 || cifM == 6 || cifM == 7 || cifM == 8 || cifM == 9 ){
            // cifM = 0 + cifM
            cifMin.innerHTML = '0' + cifM
        }else{
            cifMin.innerHTML = cifM
        }
        
        
        

        


    
    
}

clock()




// setTimeout(() => {
//     console.log('asddfdf');
// }, 2000);

// setInterval(() => {
//     console.log('interval');
// }, 3000);