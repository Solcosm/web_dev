//Header
function mouseaway(logo) {
    logo.src = '../Images/vtbook.png'
}
function rollover(logo_alt) {
    logo_alt.src = '../Images/vaultboy_surprised.png'
}
//SPECIAL(form)
function points() {
    var sp = parseInt(document.getElementById("S").value);
    var pp = parseInt(document.getElementById("P").value);
    var ep = parseInt(document.getElementById("E").value);
    var cp = parseInt(document.getElementById("C").value);
    var ip = parseInt(document.getElementById("I").value);
    var ap = parseInt(document.getElementById("A").value);
    var lp = parseInt(document.getElementById("L").value);
    var total = sp + pp + ep + cp + ip + ap + lp;
    var overall = total - 28;
    document.getElementById("points").innerHTML = Math.abs(overall);
    if (overall == 0) {
        document.getElementById("S").disabled = true;
        document.getElementById("P").disabled = true;
        document.getElementById("E").disabled = true;
        document.getElementById("C").disabled = true;
        document.getElementById("I").disabled = true;
        document.getElementById("A").disabled = true;
        document.getElementById("L").disabled = true;
    }
}