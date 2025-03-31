// HIDE PROFILE AVATAR AND OPEN BLASTDOOR

const profileAvatar = document.getElementById('profile-avatar');
const topBlastdoor = document.getElementById('top-blastdoor');
const bottomBlastdoor = document.getElementById('bottom-blastdoor');

// Hide avatar
function avatarHide() {
    profileAvatar.style.right = "-300px";
}

// Open blastdoor
function blastdoorOpen() {
    topBlastdoor.style.height = "6vh";
    bottomBlastdoor.style.height = "6vh";
}

// When blast door is clicked, hide avatar, wait for a sec, then open blastdoor
topBlastdoor.addEventListener('click', () => {
    avatarHide();
    setTimeout(() => {
        blastdoorOpen();
    }, 1000);   
})

bottomBlastdoor.addEventListener('click', () => {
    avatarHide();
    setTimeout(() => {
        blastdoorOpen();
    }, 1000);   
})





