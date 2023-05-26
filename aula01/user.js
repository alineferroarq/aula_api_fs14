fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    /*json.forEach(element => {
        console.log(`User: ${element.id} - ${element.name.toUpperCase()}, ${element.username.toLowerCase()}`)
    });*/
json.filter(element => element.id % 2 === 0).forEach(item => console.log(`${item.id} - ${item.name.toUpperCase()}, ${item.username.toLowerCase()}`))
    
})

