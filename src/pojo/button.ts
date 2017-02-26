export class Button {
  text:string;
  color:string;
  rounded:boolean;
  state_name:string;

  constructor(text:string, color:string, rounded:boolean, state_name:string) {
    this.text = text;
    this.color = color;
    this.rounded = rounded;
    this.state_name = state_name;
  }
}
