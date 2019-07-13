const PROJECT = {
    NAME: "CBS: CORPORATE",
    VERSION: "1.0",
    TEAM: "BRAHMOS",
    DEMO_MODE: true
}

const REFRESH_RATE = {
    APP: 10000,
    ISSUE_TRACKER: 300000,
    BUILD_SERVER: 30000,
    SPRINT: 60000
}

const ISSUE_TRACKER = {
    BASE_URL: "",
    URL: "",
    AUTH: "",
    TIMEOUT: 10000,
    JQL: "[SPRINT_ID]",
}

const BUILD_SERVER = {
    BASE_URL: "",
    URL: "",
    AUTH: "",
    TIMEOUT: 10000,
    BUILDS: {
        UI_ARTIFACT: "",
        BACKEND: ""
    }
}

const DEVELOPERS = [
    { key: 'nitesh.kumar', name: 'Nitesh Kumar' },
    { key: 'gaurav.gupta', name: 'Gaurav Gupta' },
    { key: 'mangesh.padhri', name: 'Mangesh Padhri' },
    { key: 'kopal.darbari', name: 'Kopal Darbari' },
    { key: 'zubair.khan', name: 'Zubair Khan' },
    { key: 'pushkar.kinkar', name: 'Pushkar Kinkar' }
]
const TESTERS = [
    { key: 'anu.singla', name: 'Anu Singla' },
    { key: 'vikas.giri', name: 'Vikas Giri' },
    { key: 'ajendra.singh', name: 'Ajendra Singh' },
]

export { PROJECT, REFRESH_RATE, ISSUE_TRACKER, BUILD_SERVER, DEVELOPERS, TESTERS }
