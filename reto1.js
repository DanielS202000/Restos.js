function wrapping(gifts){
    const giftsWrapped = [];
    for(let i = 0; i < gifts.length; i++){
        const wrap ='*'.repeat(gifts[i].length+2);
        giftsWrapped.push(`${wrap}\n*${gifts[i]}*\n${wrap}`);
        
    } 
    for(gifts in gifts){
        const wrap ='*'.repeat(gifts[i].length+2);
        giftsWrapped.push(`${wrap}\n*${gifts[i]}*\n${wrap}`);
        
    } 
    gifts.forEach(gifts=>{
        const wrap ='*'.repeat(gifts[i].length+2);
        giftsWrapped.push(`${wrap}\n*${gifts[i]}*\n${wrap}`);
        
    } )
    gifts.map(gifts=>{
        const wrap ='*'.repeat(gift.length + 2);
    return (`${wrap}\n*${gifts[i]}*\n${wrap}`);
})

const gifts = ['cats', 'game', 'socks'];
const wrapped = wrapping (gifts);
console.log(wrapped[0]);