import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
import {createNewArticlesArray} from "../js/actions/index"

window.store = store;
window.addArticle = addArticle;
window.createNewArticlesArray = createNewArticlesArray;

