//work as postman
const url = "https://guessing-game-backend2.herokuapp.com/api/score"

async function getScores(){
//GET request by defult
const data = await fetch(url)
const updated_data = await  data.json()
return updated_data
}
async function postScores(name,score){
const data = await fetch(url,{
    method: "POST",
    headers: {
        'accept':'application/json',
        'content-type':'application/json'
    },
    body:JSON.stringify({name,score})
    
})
const updated_data = await  data.json()
return updated_data
}