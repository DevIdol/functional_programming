function computeSomethingAsync(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (data % 2 == 0) {
                resolve('OK')
            } else {
                reject(new Error('Something got wrong'))
            }
        }, 2000)
    })
}

computeSomethingAsync(100).then((data) => console.log('Data', data), err => console.log(err))

console.log('Completed')