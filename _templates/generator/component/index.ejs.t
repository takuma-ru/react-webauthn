---
to: <%= atomic %>/<%= h.changeCase.pascal(componentName) %>/index.ts
---
export * from './<%= h.changeCase.pascal(componentName) %>'
