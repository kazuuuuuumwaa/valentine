(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Sure nayan?",
    "Really baa?",
    "Ayaw mo tlga??",
    "iihh babyy",
    "Ayaw tlga saken oh",
    "Sadboi na'ko neto",
    "sad na sad ma ako nyan",
    "like super duper extra sad tlga T^T",
    "Ok fine, Ayaw mo tlga eh :((",
    "ihh baby nmn ehh T^T </3"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const image = document.getElementById('valentineImage');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    image.src = "https://www.dropbox.com/scl/fi/knzc5fkmum1nyx0fe2pjw/jinshisad.jpg?rlkey=mwsgrj8wa0g74a8xqf18hbqzx&st=el4uz5z3&raw=1";

}

function handleYesClick() {
    window.location.href = "yeshtml.html";
}