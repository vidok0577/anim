import "./css/style.css";

import "./js/app";
import { Collapse } from "./js/widget/collapse";
import { Feedback } from "./js/widget/feedback";

// TODO: write your code in app.js

const collapse = document.querySelector(".collapse");
new Collapse(collapse);

const feedback = document.querySelector(".feedback");
new Feedback(feedback);
