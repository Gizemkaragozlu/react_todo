import * as Yup from "yup";

const validations = Yup.object().shape({
    text: Yup.string().required("zorunlu alan"),

});
export default validations;