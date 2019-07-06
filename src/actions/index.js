const updateDays = (sprint) => {
    return {
        type : 'UPDATE_DAYS',
        payload: sprint
    }
}

const updateCodeFreeze = (codeFreeze) => {
    return {
        type : 'CODE_FREEZE',
        payload: codeFreeze
    }
}

const updateStories = (tickets) => {
    return {
        type : 'UPDATE_STORIES',
        payload: tickets
    }
}

export  {
    updateDays,
    updateCodeFreeze,
    updateStories
}