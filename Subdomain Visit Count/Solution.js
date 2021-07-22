/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map();
    for(let i = 0; i < cpdomains.length; i++){
        let domain = cpdomains[i].split(' ')
        let domainStack = domain[1].split(".")
        for(let j = 0 ; j < domainStack.length; j++) {
            let temp = domainStack.join('.')
            while(temp[0] === '.'){
                temp = temp.slice(1)
            }
            domainStack[j] = ''
            if(map.has(temp)){
               map.set(temp, parseInt(map.get(temp))+parseInt(domain[0]))
            } else {
                map.set(temp, domain[0])
            }
        }
        
    }
    let arr = []
    map.forEach((value,key) => {
        arr.push(value +' '+key)
    })
    return arr
};