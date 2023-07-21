////What in console?

async function getData() {
    return await Promise.resolve('Done')
}

const data = getData()
console.log(data)

// Promise {<pending>}