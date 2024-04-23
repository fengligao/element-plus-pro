import ButtonPro from "../packages/button-pro/index";
import InputPro from "../packages/input-pro/index";

export {
  ButtonPro,
  InputPro
}
const components = [ButtonPro, InputPro]

const install = (app: any, options: any) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default install