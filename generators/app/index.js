const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  prompting() {
    return this.prompt
  }
}