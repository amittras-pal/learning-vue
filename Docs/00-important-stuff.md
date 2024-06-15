### BAD::Using methods to resolve values in the template.

- WHY??
  - Because every time some data changes, Vue has to execute the method to check if something changed in that section. Overriding the rendering optimizations.
- HOW TO RESOLVE??
  - Avoid things like this.
  - Use `computed` properties.
