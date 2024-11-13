// your timeword solutio goes here
function timeToWords(timeStr) {
    // Extract hours and minutes from the input string
    let [hour, minute] = timeStr.split(':').map(Number);
    
    // Determine am or pm based on the hour
    let period = hour < 12 ? "am" : "pm";
    
    // Convert hour from 24-hour format to 12-hour format
    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour -= 12;
    }

    // Handle special cases for minutes
    if (minute === 0) {
        return `${hour} o'clock ${period}`;
    } else if (minute < 10) {
        return `${hour} oh ${minute} ${period}`;
    } else {
        return `${hour} ${minute} ${period}`;
    }
}

