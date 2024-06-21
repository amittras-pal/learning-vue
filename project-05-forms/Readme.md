## `v-model`

- Modifiers
  - `v-model.number`
  - `v-model.lazy`
  - `v-model.trim` etc.

## Handling different types of inputs.

- `input[type='text']`: Binding to v-model gets a string.
- `input[type='number']`: Automaticaly converted to number type. Can be forced by using `v-model.number`
- `select`:
  - should bind to a **string** if default.
  - should bind to an **array** if multiple is set.
- `input[type='checkbox']`:
  - Multiple checkboxes with same bound model automatically creates a group;
  - Requires an **array** type.
  - Requires **value** attribute to be uniquely set on each one.
  - A single checkbox can behave as a **boolean**, value attribute is not required.
- `input[type='radio']`:
  - Follows similar requisites with the value attribute.

## Creating custom components for input.

- Adding `v-model` to a custom component adds certain pre-defined props and events that are required to be accepted and used in the component.
  - `props: ['modelValue']`: For reading the value.
  - `emits: ['update:modelValue']`: For updating the value.
