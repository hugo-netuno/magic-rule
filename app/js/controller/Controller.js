class Controller {
    
    constructor() {

        let $ = document.querySelector.bind(document);

        this._listaDivs = new ListaDivs();

        this._divisor = $('#divisor');

        this._ruleView = new RuleView($('#ruleView'));
        this._ruleView.update(this._listaDivs);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

        this._ruleRefresh = false;
    }

    cast(event){
        event.preventDefault();
        if(this._ruleRefresh){
            this._listaDivs.reset();
        }
        let number = 0e-3;
                
        for(let i=0;i<=1000;i++){
            
            if(i%2===0){
                this._listaDivs.adiciona(this._criaDiv("par",number.toString(10).slice(0-3)));
            } else {
                this._listaDivs.adiciona(this._criaDiv("impar",number.toString(10).slice(0,3)));
            }
            number = (number * 1000 + 1000)/1000;
        }
        this._ruleView.update(this._listaDivs);
        
        this._mensagem.texto = 'Regua criada com sucesso';
        this._mensagemView.update(this._mensagem);
        this._ruleRefresh = true
    }
    
    _criaDiv(div,n) {
        return new Div(div,n);    
    }

    _calculator() {

        let result = (1/this._divisor.value)*1000;
        let str = result.toString();
        this._mensagem.texto = `${str}mm`;
        this._mensagemView.update(this._mensagem);
        if(str === "1000"){
            return "000";
        } else if(str === "Infinity"){
            this._mensagem.texto = '0mm';
            this._mensagemView.update(this._mensagem);
            return "0";
        }
        var pos = str.indexOf(".");
        if(pos===-1){
        str=str.slice(0,3)
            this._mensagem.texto = `${str}mm`;
            this._mensagemView.update(this._mensagem);
        } else {
        str = str.slice(0,pos);
            this._mensagem.texto = `${str}mm`;
            this._mensagemView.update(this._mensagem);
        }
        return str;
    }
        

    _ruleMarker(){
        document.getElementById(this._calculator()).classList.add("marcadorLimite");
    }
}