const out = document.getElementById('head-output')
const table = document.querySelector('#table-game')
const cell = document.getElementsByClassName('table-cell')
const btn = document.querySelector('#btn')

let motion = 0
setTimeout(() =>{out.innerHTML = 'Ход игрока 1'}, 3000)
table.onclick = function(event){
    motion+=1
    const target = event.target
    console.log(target.innerText)
    if(target.className != 'table-cell') {return}
    if(target.innerText){
        motion-=1
        event.target.innerHTML = event.target.innerText
    } 
    else if(motion%2!=0) {
        event.target.innerHTML = 'X'
    }
    else{
        event.target.innerHTML = '0'
    }
    
    for(let i = 0; i<cell.length; i++){
        if(cell[i].innerText){
            /* if(cell[0].innerText=='X'&& cell[1].innerText =='X'&& cell[2].innerText=='X'||cell[3].innerText=='X'&&cell[4].innerText=='X'&&cell[5].innerText=='X'||cell[6].innerText=='X'&&cell[7].innerText=='X'&&cell[8].innerText=='X'||
            cell[0].innerText=='X'&&cell[4].innerText=='X'&&cell[8].innerText=='X'||cell[2].innerText=='X'&&cell[4].innerText=='X'&&cell[6].innerText=='X'){
                alert(`Игрок 1 выиграл`)
                break
            } else if (cell[0].innerText=='0'&&cell[1].innerText =='0'&&cell[2].innerText=='0'||cell[3].innerText=='0'&&cell[4].innerText=='0'&&cell[5].innerText=='0'||cell[6].innerText=='0'&&cell[7].innerText=='0'&&cell[8].innerText=='0'||
                        cell[0].innerText=='0'&&cell[4].innerText=='0'&&cell[8].innerText=='0'||cell[2].innerText=='0'&&cell[4].innerText=='0'&&cell[6].innerText=='0'){
                        alert(`Игрок 2 выиграл`)
                        break
                        } */
                        check()
                        break
        }
    }
    if(motion%2!=0){
        out.innerHTML=`Ход игрока 2`
    } else{
        out.innerHTML=`Ход игрока 1`
    }
}
const check = function(){
    if(cell[0].innerText=='X'&& cell[1].innerText =='X'&& cell[2].innerText=='X'||cell[3].innerText=='X'&&cell[4].innerText=='X'&&cell[5].innerText=='X'||cell[6].innerText=='X'&&cell[7].innerText=='X'&&cell[8].innerText=='X'||
    cell[0].innerText=='X'&&cell[4].innerText=='X'&&cell[8].innerText=='X'||cell[2].innerText=='X'&&cell[4].innerText=='X'&&cell[6].innerText=='X'){
            alert(`Игрок 1 выиграл`)
            for(index=0; index<cell.length; index++){
                if(cell[index].innerText == 'X'){
                    cell[index].style.textDecoration = "line-through"
                }
            }
        } else if (cell[0].innerText=='0'&&cell[1].innerText =='0'&&cell[2].innerText=='0'||cell[3].innerText=='0'&&cell[4].innerText=='0'&&cell[5].innerText=='0'||cell[6].innerText=='0'&&cell[7].innerText=='0'&&cell[8].innerText=='0'||
        cell[0].innerText=='0'&&cell[4].innerText=='0'&&cell[8].innerText=='0'||cell[2].innerText=='0'&&cell[4].innerText=='0'&&cell[6].innerText=='0'){
            alert(`Игрок 2 выиграл`)
            for(index=0; index<cell.length; index++){
                if(cell[index].innerText == '0'){
                    cell[index].style.textDecoration = "line-through"
                }
            }
        }
}

