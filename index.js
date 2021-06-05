// Code your solutions in this file
function writeCards(name, event){
    let array = []
    for (let i = 0; i < name.length; i++){
       array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return array
}



function countDown(int){
    let i = int
    while (i > -1){
        console.log(i)
        i--
    }
}