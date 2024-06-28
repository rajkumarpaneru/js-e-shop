const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    const res = xhr.response;
});
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
