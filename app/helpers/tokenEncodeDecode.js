
export const encodeToken = (token) => {
    let transformedToken = '';

    let i = 0;
    while (i < token.length) {
        const char = token[i];

        if (char >= 'A' && char <= 'Z') {
            transformedToken += char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            transformedToken += char.toUpperCase();
        } else if (!isNaN(parseInt(char))) {
            let num = char;
            while (!isNaN(parseInt(token[i + 1]))) {
                num += token[i + 1];
                i++;
            }
            transformedToken += (parseInt(num) + 1).toString();
        } else {
            transformedToken += char; // If it's not a letter or number, keep it unchanged
        }

        i++;
    }

    return transformedToken;
}


export const dcryptToken = (token) => {
    let reversedToken = '';
    let i = 0;

    while (i < token.length) {
        const char = token[i];

        if (char >= 'A' && char <= 'Z') {
            reversedToken += char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            reversedToken += char.toUpperCase();
        } else if (!isNaN(parseInt(char))) {
            let num = char;
            while (!isNaN(parseInt(token[i + 1]))) {
                num += token[i + 1];
                i++;
            }
            reversedToken += (parseInt(num) - 1).toString();
        } else {
            reversedToken += char; // If it's not a letter or number, keep it unchanged
        }

        i++;
    }

    return reversedToken;
}

