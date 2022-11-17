export class Form {
  constructor(form, controls) {
    this.form = form
    this.controls = controls
  }

  value() {
    const value = {}

    Object.keys(this.controls).forEach(console => {
      value[control] = this.form[control].value
    })
    return value
  }
}
