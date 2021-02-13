class MensagemView extends View {
    
    constructor(elemento) {
       super(elemento);
    }
    
   template(model) {
       
       return model.texto ? `<p>${model.texto}</p>` : '<p></p>';
   }
}