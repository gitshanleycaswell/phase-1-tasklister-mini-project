  let form = document.querySelector('form')
  form.addEventListener ('submit', (event) => {
    event.preventDefault()
    buildToDo(event.target["new-task-description"].value)
    form.reset()
  })

function buildToDo(chore){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' x '
  li.textContent = ` ${chore} `
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}
 
function handleDelete(event){
    event.target.parentNode.remove()
}
