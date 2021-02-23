import mjml2html from "mjml";
import {registerComponent} from "mjml-core";
import {ClickToActionButton} from "./click-to-action-button";

const fs = require("fs")

registerComponent(ClickToActionButton)

const htmlOutput = mjml2html(`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
            <click-to-action-button text="blub">test</click-to-action-button>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`, {
  validationLevel: 'strict'
})

fs.writeFileSync("out.html",htmlOutput.html)

