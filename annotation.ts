const kebabCase = require("lodash/kebabCase")
import {registerDependencies} from "mjml-validator"

export type AnonymousObject = { [k: string]: string }

export type AttributeType = "boolean" | "color" | "enum" | "index" | "integer" | "string" | "unit"

export interface Attribute {
    type: AttributeType
    default: string
}

export interface Options {
    attributes: { [k: string]: Attribute }
}

export function MJMLCustomElement(options: Options) {
    return function (target: any) {
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

        target.endingTag = true
        target.allowedAttributes = allowedAttributes
        target.defaultAttributes = defaultAttributes

        registerDependencies({
            'mj-column': [componentName],
            componentName: []
        })

        return target
    }
}