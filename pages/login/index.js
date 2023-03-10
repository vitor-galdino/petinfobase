import { Api } from "../../scripts/apiRequests.js";
import { Form } from "../../scripts/form.js";
import { Permission } from "../../scripts/permissions.js";

Permission.userHasToken();

Form.checkInputs(".default-input", ".login-access");
Form.getFormValues(".login-access", Api.loginRequest, "login");