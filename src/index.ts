// import componentsV2 from "../components-v2/index.ts";
import { isVue2 } from 'vue-demi'
import componentsV3 from "./components-v3/index.ts";
import componentsV2 from "./components-v2/index.ts";


export default isVue2?componentsV2:componentsV3
