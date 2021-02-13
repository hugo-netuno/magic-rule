class RuleView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return `
                ${model._divs.map(n => `

                    <div id="${n.n}" class="${n.divisible}"></div>

                `).join('')}
        `;
    }
}
