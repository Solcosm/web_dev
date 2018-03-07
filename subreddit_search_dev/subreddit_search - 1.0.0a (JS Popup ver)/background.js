function myFunc() {
    var a = confirm();
    if (a == true) {
        var sub = prompt("What subreddit are you searching?");
        var search = window.prompt("Enter search:");
        var result = window.alert("https:www.reddit.com/r/" + sub + "/search?q=" + search + "&restrict_sr=on&sort=relevance&t=all");

        var win = window.open("https:www.reddit.com/r/" + sub + "/search?q=" + search + "&restrict_sr=on&sort=relevance&t=all", '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    } else {}

}

document.getElementById('search').onclick = myFunc();