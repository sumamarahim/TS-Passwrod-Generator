function generatePassword(length: number): string {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    
    const allChars = upperChars + lowerChars + numbers + specialChars;

    if (length < 8) {
        throw new Error('Password length should be at least 8 characters');
    }

    let password = '';
    
    // Ensure the password has at least one of each type of character
    password += upperChars[Math.floor(Math.random() * upperChars.length)];
    password += lowerChars[Math.floor(Math.random() * lowerChars.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Fill the rest of the password length with random characters
    for (let i = 4; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password to ensure randomness
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
}

// Example usage:
const passwordLength = 12; // You can set your desired password length here
const newPassword = generatePassword(passwordLength);
console.log(`Generated Password: ${newPassword}`);
