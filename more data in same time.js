const yt = new Promise(resolve => {
    setTimeout( () => {
        console.log('Getting stuff from YouTube');
        resolve( {videos: [1, 2, 3, 4, 5]});
    }, 2000);
});

const fb = new Promise(resolve => {
    setTimeout( () => {
        console.log('Getting stuff from Facebook');
        resolve( {user: 'name'});
    }, 2000);
});

Promise.all([yt, fb])
.then(result => console.log(result));

