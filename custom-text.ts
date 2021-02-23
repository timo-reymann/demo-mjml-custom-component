import {BodyComponent} from "mjml-core"
import {MJMLCustomElement} from "./annotation";

@MJMLCustomElement({
    endingTag: true,
    attributes: {
        text: {
            type: 'string',
            default: 'Hello World'
        },
        'text-color': {
            type: "color"
        }
    }
})
export class CustomText extends BodyComponent {
    render() {
        return this.renderMJML(`
            <mj-text align="center" color="${this.getAttribute('text-color')}">
                ${this.getAttribute("text")}
            </mj-text>`
        )
    }
}
