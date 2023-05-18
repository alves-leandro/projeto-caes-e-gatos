import { newToast } from "../../scripts/toast.js";
import { catUserRedirect } from "../../scripts/loginCatPage.js";
import { loginCatRedirect } from "../../scripts/loginCatPage.js";
import {loginAction} from "../../scripts/loginCatPage.js"

loginAction();
loginCatRedirect()
newToast();
catUserRedirect()