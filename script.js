let ting = new Audio('ting.mp3')
let turn = 'X'
document.querySelector('#winning').style.width = '0vw'

let boxes = document.body.querySelectorAll('.gamebox')
let gameover = false

const changeTurn = ()=> {
      return turn === 'X' ? '0':'X'
}
const win = ()=>{
      let arr1 = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
      arr1.forEach((e)=>{
            if ((values[e[0]].innerHTML === values[e[1]].innerHTML) && (values[e[1]].innerHTML === values[e[2]].innerHTML) && (values[e[0]].innerHTML !== '')) {
                  gameover = true
                  document.body.getElementsByTagName('p')[0].innerHTML = values[e[0]].innerHTML + ' Won'
                  document.querySelector('#winning').style.width = '30vw'
            }
      }) 
}

let values = document.body.querySelectorAll('#value')
Array.from(boxes).forEach((element) => {
      element.addEventListener('click',()=>{
            if (element.querySelector('#value').innerHTML === '') {
                  ting.play()
                  element.querySelector('#value').innerHTML = turn 
                  turn = changeTurn()
                  win()
                  if (!gameover) {
                        document.body.getElementsByTagName('p')[0].innerHTML = 'Turn For '+turn
                  }
            }
      })
});

document.querySelector('#reset').addEventListener('click',()=>{
      document.querySelector('#winning').style.width = '0vw'
      let arr2 = [0,1,2,3,4,5,6,7,8,9]
      arr2.forEach((e)=>{
            if (values[e] !== undefined) {
                  values[e].innerHTML = '';
            }
      })
})