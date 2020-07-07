

let mySet = new Set();

//addition
//removal
//has
//intersection
//union
//superSet
//difference
//isSubSet

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


/* 
    for(let elem of setA) {
        if(setB.has(elem)) {
            return true;
        }
        return false;
    } */
