import * as layout from "./layout.js";
import generateContentHome from "./home.js";
import generateContentMenu from "./menu.js";
import generateContentContact from "./contact.js";

layout.generateNav();
layout.generateMain();
layout.generateFooter();

generateContentHome();
layout.resetContent();

generateContentMenu();
layout.resetContent();

generateContentContact();
