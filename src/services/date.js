
const DateService = {

    computeRemainingWorkingDays: function (startDate, endDate) {
        let elapsed, daysAfterLastSunday;
        let ifThen = function (a, b, c) {
            return a === b ? c : a;
        };
    
        elapsed = endDate - startDate;
        elapsed /= 86400000;
    
        let daysBeforeFirstSunday = (7 - startDate.getDay()) % 7;
        daysAfterLastSunday = endDate.getDay();
    
        elapsed -= (daysBeforeFirstSunday + daysAfterLastSunday);
        elapsed = (elapsed / 7) * 5;
        elapsed += ifThen(daysBeforeFirstSunday - 1, -1, 0) + ifThen(daysAfterLastSunday, 6, 5);
    
        return Math.ceil(elapsed);
    },

    computeRemainingDays: function (startDate, endDate) {
        let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let diffDays = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / (oneDay)));
        return diffDays;
    },

    computeTotalDays: function (startDate, endDate, onlyWorkingDays) {
        if(!(startDate instanceof Date))
        {
            startDate = new Date(startDate)
        }

        if(!(endDate instanceof Date))
        {
            endDate = new Date(endDate)
        }

        startDate.setHours(0,0,0,0);
        
        if (onlyWorkingDays) {
            return this.computeRemainingWorkingDays(startDate, endDate);
        } else {
            return this.computeRemainingDays(startDate, endDate);
        }
    },

    computePercentageRemaining: function (startDate, endDate, onlyWorkingDays) {
        let start, end, today, daysPassed, totalDays, percent;

        start = new Date(startDate);
        end = new Date(endDate);
        today = new Date()
        today.setHours(0,0,0,0);

        daysPassed = this.computeTotalDays(start, today, onlyWorkingDays);
        totalDays = this.computeTotalDays(start, end, onlyWorkingDays)

        percent = ((daysPassed - 1)  / totalDays) * 100;
        return percent;
    },

};

export default DateService;