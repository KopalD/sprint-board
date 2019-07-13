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
            "shame": { "name": "Jane Doe" },
            "items": [],
            "assignee": [
                {
                    "username": "shawn.everett",
                    "displayName": "Shawn Everett",
                    "userType": "DEVELOPER",
                    "count": 5,
                },
                {
                    "username": "valerie.preston",
                    "displayName": "Valerie Preston",
                    "userType": "DEVELOPER",
                    "count": 12,
                },
                {
                    "username": "leigh.cooley",
                    "displayName": "Leigh Cooley",
                    "userType": "DEVELOPER",
                    "count": 2,
                },
                {
                    "username": "michel.sullivan",
                    "displayName": "Michel Sullivan",
                    "userType": "DEVELOPER",
                    "count": 2,
                },
                {
                    "username": "marcus.barron",
                    "displayName": "Marcus Barron",
                    "userType": "DEVELOPER",
                    "count": 0,
                },
                {
                    "username": "glenn.haleyn",
                    "displayName": "Glenn Haleyn",
                    "userType": "DEVELOPER",
                    "count": 1,
                },
                {
                    "username": "renee.bauer",
                    "displayName": "Renee Bauer",
                    "userType": "TESTER",
                    "count": 2,
                },
                {
                    "username": "tommy.roberts",
                    "displayName": "Tommy Roberts",
                    "userType": "TESTER",
                    "count": 1,
                },
                {
                    "username": "monty.parker",
                    "displayName": "Monty Parker",
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
