export const required = (value) => {
    if(value) return undefined;

    return 'Field is reqired';
};

export const maxLengthCreator = (maxLenqth) => (value) => {
    if (value.length > maxLenqth) return `Max length is ${maxLenqth} symbols`;
    return undefined;
}