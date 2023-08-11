//what in console?

function getImg(imgs) {
    console.log(imgs?.[1]?.[1])
}

getImg([[1, 2], [3]])
getImg()
getImg([[4], [5, 6]])

//undefined, undefined, 6