// Async code example 


console.log('Start');

setTimeout(() => {
    // Everithing we write here will be async
    console.log('we are in timeout');
}, 3000);


console.log('end');

