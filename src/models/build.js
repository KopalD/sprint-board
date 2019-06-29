class Build {

    id;
    name;
    status;
    buildNumber;
    lastUpdated;
    triggeredBy;
    lastFailed;

    constructor() {}
}

class HealthMonitor {

    status;
    builds;
    
    constructor() {}
}

export default { Build, HealthMonitor };