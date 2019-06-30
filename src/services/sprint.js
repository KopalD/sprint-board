import { SPRINT_SPAN } from '../configs/sprint'
import { updateSprint, updateCodeFreeze } from '../actions';
import  DateService  from './date';

class SprintService {

    static update(store) {
        store.dispatch(updateSprint(SprintService.getSprintDetails()));

        const codeFreeze = SprintService.isCodeFreeze();
        if (codeFreeze) {
            store.dispatch(
                updateCodeFreeze({ enabled : true })
            );
        }
    }

    static getSprintDetails() {
        const sprint = {};
        sprint.completion = DateService.computePercentageRemaining(
            SPRINT_SPAN.START_DATE,
            SPRINT_SPAN.END_DATE, 
            SPRINT_SPAN.ONLY_BUSINESS_DAYS);
        sprint.daysRemaining = DateService.computeTotalDays(
            new Date(),
            SPRINT_SPAN.END_DATE,
            false);
        return sprint;
    }

    static isCodeFreeze() {
        if (SPRINT_SPAN.CODE_FREEZE.ENABLED) {
            const daysLeft = DateService.computeTotalDays(new Date(), SPRINT_SPAN.END_DATE, false);
            if (daysLeft < SPRINT_SPAN.CODE_FREEZE.DAYS_BEFORE) {
                return true;
            }
        } else {
            return false;
        }
    }
}

export default SprintService;