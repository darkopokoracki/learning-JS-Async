console.log('Start');


function loginUser(email, password, callback) {
    setTimeout( () => {
        console.log('Now We Have The Data');
        callback ( {userEmail: email} );
    }, 3000);
}

function getUserVideos(email, callback) {
    setTimeout( () => {
        callback( ['video1', 'video2', 'video3']);
    });
}

function videoDetails(video, callback) {
    setTimeout( () => {
        callback( 'title of the video' );
    }, 1500); 
}

const user = loginUser('darkopokoracki@gmail.com', 123456789, user => {
    console.log(user);
    getUserVideos(user.email, videos => {
        console.log(videos);
        videoDetails(videos[0], video => {
            console.log(video);
        });
    });
});


console.log('Finsih');

// This is CallBack HELL!!