// total -May: // 16

const root = document.querySelector('.root')

function renderWaterfall(rootNode, columnCount, elementGap) {
    const els = root.querySelectorAll('.el')

    rootNode.style.position = 'relative'
    els.forEach(element => {
        element.style.position = 'absolute'
    })

    rootWidth = root.getBoundingClientRect().width
    columnwidth = (rootWidth - elementGap*(columnCount-1))/columnCount

    console.log(rootWidth)
    console.log(columnwidth)
    console.log('начали')

    let rowsHeight = []
    let rowsLeft = []
    console.log('rowsHeight', rowsHeight)
    console.log('rowsHeight', rowsLeft)
    let leftPos = 0;

    for (let i=0; i < columnCount; i++) {
        rowsHeight.push(0)
        rowsLeft.push(leftPos)
        leftPos = leftPos + columnwidth + elementGap
    }

    console.log('старт проги')
    console.log('rowsHeight', rowsHeight)
    console.log('rowsHeight', rowsLeft)

    els.forEach(element => {

            let hMin = Infinity 
            let lMin = 0
            let iNum = 0
            for (i in rowsHeight) {
                if (rowsHeight[i] < hMin) {
                    hMin = rowsHeight[i]
                    lMin = rowsLeft[i]
                    iNum = i
                }
            }

            console.log('hMin',hMin)
            console.log('lMin',lMin)
            console.log('iNum',iNum)

            element.style.top = hMin + 'px';
            element.style.left = lMin + 'px';
            element.style.width = columnwidth + 'px';

            console.log(element.getBoundingClientRect().height)

            rowsHeight[iNum] = rowsHeight[iNum] + element.getBoundingClientRect().height + elementGap;

            console.log('rowsHeight', rowsHeight)
            console.log('rowsHeight', rowsLeft)

        })
}


renderWaterfall(root, 3, 20)

// const root = document.querySelector('.root')

// function renderWaterfall(rootNode, columnCount, elementGap) {
//     const els = root.querySelectorAll('.el')

//     rootNode.style.position = 'relative'
//     els.forEach(element => {
//         element.style.position = 'absolute'
//     })

//     rootWidth = root.offsetWidth
//     columnwidth = (rootWidth - elementGap*(columnCount-1))/columnCount
//     let rowsHeight = []
//     console.log('нулевой в роу', rowsHeight[0])
//     console.log('нулевой', rowsHeight)
//     console.log('нулевой в роу', rowsHeight[0])
//     let leftPos = 0;

//     for (let i=0; i < columnCount; i++) {
//         let obj = Object.assign({
//             h: 0,
//             l: leftPos,  
//         })
//         rowsHeight.push(obj);
//         leftPos = leftPos + columnwidth + elementGap
//     }
    
//     console.log('нулевой в роу', rowsHeight[0])
//     console.log('нулевой в роу', rowsHeight[0].h)
//     console.log('старт проги',rowsHeight)

//     els.forEach(element => {

//             let hMin = Infinity 
//             let lMin = 0
//             let iNum = 0
//             for (i in rowsHeight) {
//                 if (rowsHeight[i].h < hMin) {
//                     hMin = rowsHeight[i].h
//                     lMin = rowsHeight[i].l
//                     iNum = i
//                 }
//             }

//             console.log('hMin',hMin)
//             console.log('lMin',lMin)
//             console.log('iNum',iNum)

//             element.style.top = hMin + 'px';
//             element.style.left = lMin + 'px';
//             element.style.width = columnwidth + 'px';

//             console.log(element.offsetHeight)

//             rowsHeight[iNum].h = rowsHeight[iNum].h + element.offsetHeight + elementGap;
//             console.log('rowsHeight', rowsHeight)
//             console.log('нулевой в роу', rowsHeight[0])
//             console.log('второй в роу', rowsHeight[1])
//             console.log('третий в роу', rowsHeight[2])
//         })
//     console.log('работает')

// }


// renderWaterfall(root, 3, 20)
