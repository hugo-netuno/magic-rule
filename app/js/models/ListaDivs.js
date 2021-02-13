class ListaDivs {
    
    constructor() {
        
        this._divs = [];
    }
    
    adiciona(div) {
        
        this._divs.push(div);
    }
    
    get divs() {
        
        return [].concat(this._divs);
    }

    reset() {
        this._divs = [];
    }
}