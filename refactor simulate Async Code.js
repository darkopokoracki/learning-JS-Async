console.log('Start');


function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Now We Have The Data');
            resolve ({userEmail: email});
        }, 3000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(['video1', 'video2', 'video3']);
        });
    });

}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve ( 'title of the video' );
        }, 1500); 
    });
}

// const user = loginUser('darkopokoracki@gmail.com', 123456789, user => {
//     console.log(user);
//     getUserVideos(user.email, videos => {
//         console.log(videos);
//         videoDetails(videos[0], video => {
//             console.log(video);
//         });
//     });
// }); /* This is CallBack HELL!*/



// loginUser('darkopokoracki@gmail.com', 123456789)
// .then(user => getUserVideos(user.email))
// .then(videos => videoDetails(videos[0]))
// .then(video => console.log(video));
    // This Is Nice but there is nicer way to write this code... nicer way is sync way!


// Promises on Sync way!  
async function displayUser() {
    try {
    const loggedUser = await loginUser('darkopokoracki@gmail.com', 123456789);
    const videos = await getUserVideos(loginUser.userEmail);
    const video = await videoDetails(videos[0]);
    console.log(video); 
    } catch (err) {
        console.log('We could not get the videos');
    }
}

displayUser();


console.log('Finsih');


