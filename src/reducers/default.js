import { PROJECT } from "../configs/app";

export const BUILD = {
    state: {
        "status": "PASSING",
        "builds": [
            {
                "id": "",
                "name": "",
                "status": "",
                "buildNumber": "",
                "lastUpdated": "",
                "triggeredBy": "",
                "lastFailed": "",
                "history": [{
                    "status": "",
                    "buildNumber": "",
                    "lastUpdated": "",
                    "triggeredBy": "",
                }]
            }
        ]
    },
    initialState: function () {
        if (PROJECT.DEMO_MODE) {
            return this.state;
        } else {
            return {};
        }
    }
}

export const SPRINT = {
    state: {
        "completion": 60,
        "daysRemaining": 6,
        "codeFreeze": {
            "enabled": false
        }
    },
    initialState: function () {
        if (PROJECT.DEMO_MODE) {
            return this.state;
        } else {
            return {};
        }
    }
}

export const TICKETS = {
    state : { 
        "stories": {
            "count": 10,
            "status": {
                "todo": 3,
                "progress": 4,
                "testing": 2,
                "done": 1
            },
            "items": []
    
        },
        "issues": {
            "count": 5,
            "status": {
                "todo": 3,
                "progress": 4,
                "testing": 2,
                "done": 1
            },
            "shame": { "name": "Gaurav Gupta" },
            "items": [],
            "assignee": [
                {
                    "username": "nit",
                    "displayName": "Nitesh Kumar",
                    "userType": "DEVELOPER",
                    "count": 5,
                },
                {
                    "username": "nit",
                    "displayName": "Gaurav Gupta",
                    "userType": "DEVELOPER",
                    "count": 12,
                },
                {
                    "username": "nit",
                    "displayName": "Mangesh Padhri",
                    "userType": "DEVELOPER",
                    "count": 2,
                },
                {
                    "username": "nit",
                    "displayName": "Kopal Darbari",
                    "userType": "DEVELOPER",
                    "count": 2,
                },
                {
                    "username": "nit",
                    "displayName": "Pushkar Kinkar",
                    "userType": "DEVELOPER",
                    "count": 0,
                },
                {
                    "username": "nit",
                    "displayName": "Zubair Khan",
                    "userType": "DEVELOPER",
                    "count": 1,
                },
                {
                    "username": "nit",
                    "displayName": "Anu Singla",
                    "userType": "TESTER",
                    "count": 2,
                },
                {
                    "username": "nit",
                    "displayName": "Vikas Giri",
                    "userType": "TESTER",
                    "count": 1,
                },
                {
                    "username": "nit",
                    "displayName": "Ajendra Singh",
                    "userType": "TESTER",
                    "count": 0,
                }
            ]
        },
        "backlog": {
            "count": 105,
            "items": []
        }
    },
    initialState: function () {
        if (PROJECT.DEMO_MODE) {
            return this.state;
        } else {
            return {};
        }
    }
}
