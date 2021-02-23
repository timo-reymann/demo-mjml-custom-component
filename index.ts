import mjml2html from "mjml";
import {registerComponent} from "mjml-core";
import {CustomText} from "./custom-text";

const fs = require("fs")

// Register
registerComponent(CustomText)

// Process, with multiple tags to proof the component got instantiated only once
const htmlOutput = mjml2html(`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
            <custom-text text-color="blue" text="Foo" />
            <mj-divider />            
            <custom-text text="Bar"></custom-text>
            <mj-divider />
            <custom-text text="Baz" />
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`, {
    validationLevel: 'strict'
})

fs.writeFileSync("out.html", htmlOutput.html)
