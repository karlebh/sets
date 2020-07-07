
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

function union(setA, setB) 
{
    return new Set([...setA, ...setB]);
}

//setA is a superSet of setB
function isSuperSet(setA, setB)
{
    if(setA <= setB) {
     return false;   
    }
    for(let elem of setB) {
        if(setB.has(elem)) {
            return true;
        }
        return false;
    }
}
// get the difference of two sets
function difference(setA, setB) 
{
    let differenceSet = new Set(setA);
    for(let elem of setB) {
        differenceSet.delete(elem);
    }
    return differenceSet;
}

//setA is a subset of setB
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

//intersect(new Set([1,2,3,4,5]), new Set([2,3,5,6])); //{2,3}
//union(new Set([1,2,3,4]), new Set([5,6,7,8,9])); //{1,2,3,4,5,6,7,8,9}
//isSuperSet(new Set([1,2,3,4,5,6,6]), new Set([2,3])); //true
//isSuperSet(new Set([1,2,3]), new Set([2,3])); //true
//difference(new Set([1,2,3,4,5]), new Set([1,2,3]));
//isSubSet(new Set([1,2,3]), new Set([1,2,3,4,5,6,7]));
