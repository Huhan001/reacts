const myPromise = new Promise((resolve, reject) => {
    if(true){
        setTimeout(() => {
            resolve('it has worked out');
        }, 2000);
    } else {
        reject('error')
    }
})

myPromise.then(value => console.log(value)).catch(rejectValue => console.log(rejectValue));

