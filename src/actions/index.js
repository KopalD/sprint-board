const updateSprint = (sprint) => {
    return {
        type : 'UPDATE_SPRINT',
        payload: sprint
    }
}

const updateCodeFreeze = (codeFreeze) => {
    return {
        type : 'CODE_FREEZE',
        payload: codeFreeze
    }
}

export  {
    updateSprint,
    updateCodeFreeze
}