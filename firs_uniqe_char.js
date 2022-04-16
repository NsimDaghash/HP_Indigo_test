const firstUniqChar = (s) => {
    let letters = new Array(26).fill(0);
    
    for (let i=0; i<s.length; ++i) {
        let index = s.charCodeAt(i) -'a'.charCodeAt(0);
        ++letters[index];
    }
    
    for (let j=0; j<s.length; ++j) {
        let index = s.charCodeAt(j) -'a'.charCodeAt(0);
        if (letters[index] === 1) return j
    }
    
    return -1;
}
