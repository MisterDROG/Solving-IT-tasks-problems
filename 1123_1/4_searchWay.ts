//Вспомогательные функции
const showTaskResult1 = (task: number, taskResult: { result: any, expectedResult: any }) => {
    console.log(`---Результат задачи ${task}---`)
    console.log('Ожидаемый: ', taskResult.expectedResult)
    console.log('Из функции: ', taskResult.result)
}

/*
4. НЕОБЯЗАТЕЛЬНОЕ! Нахождение пересечений отрезков
Взять три разных набор отрезков, найти участки их пересечений и пометить как новые (например green и yellow имеют пересечение - пометить его как новый (см exampleResult4) и вырезать его и из green и из yelow), вывести информацию о последовательности отрезков с 0 до 100
*/

//Мнемоники отрезков

const Task4 = () => {
    type IMnemo = "green" | "yellow" | "red"
    //Тип для отрезка - начало и конец
    interface IInterval {
        start: number,
        end: number
    }
    type ISourceIntervals = Record<IMnemo, IInterval[]>

    //Тип ответа
    interface IExpectedResult extends IInterval {
        mnemo: IMnemo[],
    }
    //Исходные отрезки
    const sourceData: ISourceIntervals = {
        green: [{ start: 0, end: 30 }, { start: 90, end: 100 }],
        yellow: [{ start: 20, end: 40 }, { start: 50, end: 70 }],
        red: [{ start: 10, end: 50 }, { start: 70, end: 90 }],
    }


    //Ожидаемый результат
    const expectedResult: IExpectedResult[] = [
        { "mnemo": ["green"], start: 0, end: 10 },
        { "mnemo": ["red"], start: 10, end: 20 },
        { "mnemo": ["green", "yellow", "red"], start: 20, end: 30 },
        { "mnemo": ["yellow", "red"], start: 30, end: 40 },
        { "mnemo": ["red"], start: 40, end: 50 },
        { "mnemo": ["yellow"], start: 50, end: 70 },
        { "mnemo": ["red"], start: 70, end: 90 },
        { "mnemo": ["green"], start: 90, end: 100 },
    ]


    // //Реализовать внутри этой функции оптимальным способом, перебор исходного массива может быть только один! Допускается формирования дополнительных массивов/объектов
    // const getResult = (sourceIntervals: ISourceIntervals): IExpectedResult[] => {
    //     return expectedResult
    // }

    const getResult = (sourceIntervals: ISourceIntervals): IExpectedResult[] => {
        const result: IExpectedResult[] = [];
        const masRes2: { [key: number]: IMnemo[] } = {};

        Object.keys(sourceIntervals).forEach((key) => {
            sourceIntervals[key].forEach((elem) => {
                for (let i = elem.start / 10; i < elem.end / 10; i++) {
                    if (masRes2[i]) {
                        masRes2[i].push(key as IMnemo);
                    } else {
                        masRes2[i] = [key as IMnemo];
                    }
                }
            });
        });

        for (let i = 0; i < Object.keys(masRes2).length; i++) {
            if ((JSON.stringify(masRes2[i - 1]) == JSON.stringify(masRes2[i])) && (result.length != 0)) result[result.length - 1].end += 10
            else result.push({ mnemo: masRes2[i], start: i * 10, end: (i + 1) * 10 })
        }

        return result;
    };

    //Это выведет результат её работы справа
    return { expectedResult: expectedResult, result: getResult(sourceData) }
}

showTaskResult1(4, Task4())


    // Object.keys(sourceIntervals).forEach((key) => {
    //     sourceIntervals[key].forEach((elem) => {
    //         masRes.push({ start: elem.start, end: elem.end, mnemo: key })
    //     })
    // })

    // console.log("masRes", masRes)

    // const masRes2 = {}
    // masRes.forEach((elem) => {
    //     for (let i = (elem.start / 10); i < (elem.end / 10); i++) {
    //         if (masRes2[i]) masRes2[i].push(elem.mnemo)
    //         else masRes2[i] = [elem.mnemo]
    //     }

    // })

    // console.log("masRes2", masRes2)