const hours = new Date().getHours();

const greeting = (): string => {
    if (hours >= 18)
        return 'Good evening, '
    if (hours >= 12)
        return 'Good afternoon, '
    if (hours >= 5)
        return 'Good morning, '
    return 'Good evening, '
}

export default greeting;
