/***** to export one item
export default 'I am an exported string.';
 */

import axios from 'axios';
import { key, proxy } from '../config';

export default class Search  {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        // const proxy = 'https://crossorigin.me/'
        // const key = '9ccfbcd2341f775ac3621a74ba741027';
        try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
        // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
