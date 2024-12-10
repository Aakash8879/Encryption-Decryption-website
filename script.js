// Encrypt a message using a Caesar Cipher
function encryptMessage() {
    const key = parseInt(document.getElementById("key").value);
    const message = document.getElementById("message").value;

    if (!key || isNaN(key)) {
        alert("Please enter a valid numeric key!");
        return;
    }

    if (!message) {
        alert("Please enter a message to encrypt!");
        return;
    }

    const encrypted = message.split("").map((char) => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = char === char.toLowerCase() ? 97 : 65;
            return String.fromCharCode(((code - base + key) % 26) + base);
        }
        return char;
    }).join("");

    displayOutput("Encrypted Message: " + encrypted);
}

// Decrypt a message using a Caesar Cipher
function decryptMessage() {
    const key = parseInt(document.getElementById("key").value);
    const message = document.getElementById("message").value;

    if (!key || isNaN(key)) {
        alert("Please enter a valid numeric key!");
        return;
    }

    if (!message) {
        alert("Please enter a message to decrypt!");
        return;
    }

    const decrypted = message.split("").map((char) => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = char === char.toLowerCase() ? 97 : 65;
            return String.fromCharCode(((code - base - key + 26) % 26) + base);
        }
        return char;
    }).join("");

    displayOutput("Decrypted Message: " + decrypted);
}

// Clear input fields and output
function clearFields() {
    document.getElementById("key").value = "";
    document.getElementById("message").value = "";
    document.getElementById("output").textContent = "";
}

// Display the output dynamically
function displayOutput(message) {
    document.getElementById("output").textContent = message;
}
