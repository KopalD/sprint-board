import axios from 'axios'

import BuildService from './build';
import SprintService from './sprint';

import { ISSUE_TRACKER, BUILD_SERVER, REFRESH_RATE } from '../configs/app';

class AppService {

    constructor() {
        this.api = {};
        this.store = null;
        this.appInterval = null;
        this.counter = 0;
    }
   
    bootstarp(store) {
        this.store = store;
        this.api.issues = this.createInstance(ISSUE_TRACKER.BASE_URL, ISSUE_TRACKER.AUTH, ISSUE_TRACKER.TIMEOUT);
        this.api.builds = this.createInstance(BUILD_SERVER.BASE_URL, BUILD_SERVER.AUTH, BUILD_SERVER.TIMEOUT);
        this.appInterval = setInterval(() =>  this.update(), REFRESH_RATE.APP);
        this.init()        
    }

    update() {
        this.counter += REFRESH_RATE.APP;
        // if (this.counter % REFRESH_RATE.BUILD_SERVER === 0 ) {
        //     BuildService.fetchBuildStatus(this.api.builds, this.store)
        // }
        // if (this.counter % REFRESH_RATE.ISSUE_TRACKER === 0 ) {
        //     this.fetchTickets();
        // }
        if (this.counter % REFRESH_RATE.SPRINT === 0 ) {
            SprintService.update(this.store);
        }
    }

    createInstance(url, auth, timeout) {
        return axios.create({
            baseURL: url,
            headers: { Authorization: 'Basic ' + auth },
            timeout: timeout
        });
    }

    init() {
        SprintService.update(this.store);
    }

    destroy() {
        clearInterval(this.appInterval);
        this.store = null;
        this.counter = 0;
    }

}

export default AppService;