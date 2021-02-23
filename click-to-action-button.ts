import {BodyComponent} from "mjml-core"
import {MJMLCustomElement} from "./annotation";

@MJMLCustomElement({
    attributes: {
        text: {
            type: 'string',
            default: 'Hello World'
        }
    }
})
export class ClickToActionButton extends BodyComponent {
    render() {
        return this.renderMJML(`
            <mj-text>
                ${this.getAttribute("text")}
            </mj-section>`)
    }
}
