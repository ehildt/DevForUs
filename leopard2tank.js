const traitors = require('./lists.js').list

traitors.map((traitor, index)=>{
    setTimeout(()=>{
        console.log('shooting naked from the tank', traitor.name, 'in Ukraine direction')
        console.log('Selesnkiy reveived', traitor.dmg)
    }, 2000 * index)
})