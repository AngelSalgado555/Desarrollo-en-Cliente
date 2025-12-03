console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);

setInterval(() => {
    location.assign("https://www.google.com/");
}, 5000);