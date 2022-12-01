import HomeStore from './HomeStore'

export default class RootStore {
    constructor() {
        this.homeStore = new HomeStore(this)
    }
}