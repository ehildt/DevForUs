const list = [
    {
        name: 'Annalena', 
        class: 'Idiot' , 
        scale: 0.75 , 
        dmg: 100 
    },
    {
        name: 'Olaf', 
        class: 'Sleeper' , 
        scale: 0.8 , 
        dmg: 20 ,
        skill: 'scholzen' 
    }
]

//console.log(JSON.stringify(list, null, 4))

list.reverse().filter((traitor)=>console.log(traitor.name))

module.exports ={list}