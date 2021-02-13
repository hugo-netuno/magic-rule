class Div {
    
    constructor(div,n) {
        
        this._divisible = div;
        this._n = n;
        Object.freeze(this);
    }
    
    get divisible() {
        
        return this._divisible;
    }
    get n() {
        
        return this._n;
    }
}