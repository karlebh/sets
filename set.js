/**
* @param setA
* @param setB
* return {intersectSet}
*/
function Intersect(setA, setB) 
{
    let intersectSet = new Set();
    for(let elem of setA) {
        if(setB.has(elem)) {
            intersectSet.add(elem)
        }
    }
    return intersectSet;
}

/**
* @param setA
* @param setB
* return {Set}
*/
function union(setA, setB) 
{
    return new Set([...setA, ...setB]);
}

/**
* @param setA
* @param setB
* return {boolean}
*/

function isSuperSet(setA, setB)
{
    for(let elem of setB) {
        if(setB.has(elem)) {
            return true;
        }
        return false;
    }
}

/**
* @param setA
* @param setB
* return {differenceSet}
*/
function difference(setA, setB) 
{
    let differenceSet = new Set(setA);
    for(let elem of setB) {
        differenceSet.delete(elem);
    }
    return differenceSet;
}

/**
* @param setA
* @param setB
* return {boolean}
*/
function isSubSet(setA, setB)
{
    if(setA.size >= setB.size) {
        return false;
    }

    return [...setA].every(function(value) {
        return setB.has(value)
    })
}



//usage

Intersect(new Set([1,2,3,4,5]), new Set([2,3,5,6])); //{2,3}
union(new Set([1,2,3,4]), new Set([5,6,7,8,9])); //{1,2,3,4,5,6,7,8,9}
isSuperSet(new Set([1,2,3,4,5,6,6]), new Set([2,3])); //true
isSuperSet(new Set([1,2,3]), new Set([2,3,7,8])); //false
difference(new Set([1,2,3,4,5]), new Set([1,2,3])); //new Set([4,5])
isSubSet(new Set([1,2,3]), new Set([1,2,3,4,5,6,7])); //true
isSubSet(new Set([1,2,3]), new Set([1,2])); //false
