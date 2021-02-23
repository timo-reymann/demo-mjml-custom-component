import mjml2html from "mjml";
import {registerComponent} from "mjml-core";
import {ClickToActionButton} from "./click-to-action-button";
const fs = require("fs")

// Register
registerComponent(ClickToActionButton)

// Process, with multiple tags to proof the component got instantiated only once
const htmlOutput = mjml2html(`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
            <click-to-action-button text-color="blue" text="Foo" />
            <mj-divider />            
            <click-to-action-button text="Bar"></click-to-action-button>
            <mj-divider />
            <click-to-action-button text="Baz" />
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`, {
  validationLevel: 'strict'
})

fs.writeFileSync("out.html",htmlOutput.html)

