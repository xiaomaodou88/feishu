import { action, observable, computed } from "mobx";
// import * as api from '../api/api'
// import { getRandomNum,getDateStr } from '../utils/utils'
const suffix = '.png'

export default class HomeStore {
    @observable title = 'home'
    @action.bound setData = (key, data) => {
        this[key] = data
    }
    constructor(rootStore) {
        this.rootStore = rootStore
    }
}
