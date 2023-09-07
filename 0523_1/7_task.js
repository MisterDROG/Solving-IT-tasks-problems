function zoomLayout(n, width, height) {
    let video = []
    let scrProp = height/width
    // console.log('Пропорция', scrProp)
    let columnNumber = Math.ceil(Math.sqrt(n))
    // console.log('Количество колонок', columnNumber)
    let cellWidth = Math.round(width/columnNumber)
    // console.log('Ширина карточки', cellWidth, 'Неокругл:', width/columnNumber)
    let cellHight = Math.round(cellWidth*scrProp)
    // console.log('Высота карточки', cellHight, 'Неокругл:', cellWidth*scrProp)
    let rowNumberFull = Math.floor(n/columnNumber)
    let firstRow = n % columnNumber
    let rowNumber
    if (firstRow === 0) {
        rowNumber = rowNumberFull
    } else {
        rowNumber = rowNumberFull + 1
    }
    // console.log('Количество строк', rowNumber,'Количество полных строк', rowNumberFull, 'Неполная строка из', firstRow, 'Полная строка из', columnNumber)

    let x = 0 // координата х
    let y = 0 // координата y
    let r = 0 // номер ряда
    let c = 0 // номер колонки
    let nc = 0 // номер неполной колонки

    if ((firstRow === 0) && (columnNumber === rowNumber)) {
        for (let i = 0; i < n; i++) {
            console.log('x', x, 'y', y, 'c', c, 'r', r)
            let obj = {
                width: cellWidth, // Ширина видео в пикселях
                height: cellHight,  // Высота видео в пикселях
                x: x, // Положение левого верхнего угла видео по x относительно верхнего левого угла экрана
                y: y // Положение левого верхнего угла видео по y относительно верхнего левого угла экрана
            }
            video.push(obj)
            if (c === (columnNumber-1)) {
                c = 0
                x = 0
                r = r + 1
                y = r*cellHight
            } else{
                c = c + 1
            }
            x = c*cellWidth
        }

    } else if ((firstRow !== 0) && (columnNumber === rowNumber)) {
        console.log('width',width)
        console.log('firstRow',firstRow)
        console.log('cellWidth',cellWidth)
        first = Math.round((width - firstRow*cellWidth)/2)
        console.log('первый',first)
        x = first

        for (let i = 0; i < firstRow; i++) {

            
    } else if ((firstRow === 0) && (columnNumber !== rowNumber)) {

    } else if ((firstRow !== 0) && (columnNumber !== rowNumber)) {

    }

    return video
}

console.log(zoomLayout(8, 6, 6))
