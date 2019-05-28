// This function is called onclick and the url is sent as parameter link

const newLink = (link) => {
    let win = window.open(`https://` + link, '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
}