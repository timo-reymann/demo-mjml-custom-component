const kebabCase = require("lodash/kebabCase")
import {registerDependencies} from "mjml-validator"

// Helper type for anonymous objects
export type AnonymousObject = { [k: string]: string }

// All possible attribute types
export type AttributeType = "boolean" | "color" | "enum" | "index" | "integer" | "string" | "unit"

// Attribute representation
export interface Attribute {
    type: AttributeType
    default ?: string
}

export interface Options {
    attributes: { [k: string]: Attribute }
    endingTag ?: boolean
}

export function MJMLCustomElement(options: Options) {
    console.log("== DECORATOR FACTORY called ===")
    return function (target: any) {
        console.log("== DECORATOR called ==")
        let allowedAttributes: AnonymousObject = {}
        let defaultAttributes: AnonymousObject = {}

        const componentName = kebabCase(target.name)
        const attributes = options.attributes

        for (const property in attributes) {
            const spec = attributes[property]
            allowedAttributes[property] = spec['type']

            if (spec['default']) {
                defaultAttributes[property] = spec['default']
            }
        }

        target.endingTag = options.endingTag || true
        target.allowedAttributes = allowedAttributes
        target.defaultAttributes = defaultAttributes

        registerDependencies({
            // Alow mj-column statically for now
            'mj-column': [componentName],
            // Component can have no children
            componentName: []
        })

        return target
    }
}