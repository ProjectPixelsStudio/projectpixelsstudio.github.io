var mobile_warning = 'Website is not optimised for your device!';
var isMobile = false; //initiate as false
// device detection
if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.getElementById("error").innerHTML += 'Website is not optimised for your device!';
}
else{
    document.getElementById("error").innerHTML += 'Not a mobile device!';
}