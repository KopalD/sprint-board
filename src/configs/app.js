const PROJECT = {
    NAME: "CBS: CORPORATE",
    VERSION: "1.0",
    TEAM: "BRAHMOS"
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

export {PROJECT, REFRESH_RATE, ISSUE_TRACKER, BUILD_SERVER }
