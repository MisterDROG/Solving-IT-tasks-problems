/*
3. Получить объект с отчётом по массиву
  Я хочу получить функцию которая примет этот массив на вход и вернёт объект, 
  который скажет сколько у меня субъектов в регионе 1 и сколько в регионе 2
  Дополнительные объявления переменны-массивов использовать не хочу, нужен return {какое то действие создающее объект из массива}
*/

//Вспомогательные функции
const showTaskResult = (task: number, taskResult: { result: any, expectedResult: any }) => {
    console.log(`---Результат задачи ${task}---`)
    console.log('Ожидаемый: ', taskResult.expectedResult)
    console.log('Из функции: ', taskResult.result)
}

const Task3 = () => {
    interface ISubjectRegion { name: string, region: number }
    interface IResult { [key: ISubjectRegion['region']]: number }


    const sourceData: ISubjectRegion[] = [
        { name: "Субъект 1", region: 1 },
        { name: "Субъект 2", region: 2 },
        { name: "Субъект 3", region: 2 },
        { name: "Субъект 4", region: 2 },
        { name: "Субъект 5", region: 4 }
    ]

    const expectedResult: IResult = {
        1: 1, //1 субъект в регионе 1
        2: 3 //3 субъекта в регионе 3
    }

    //Логику реализовать внутри этой функции
    // const getResult = (bar: ISubjectRegion[]):IResult => {
    //   return {1:0, 2:0}
    // }

    const getResult = (bar: ISubjectRegion[]): IResult => {
        return bar.reduce((result, item) => {
            if (item.region === 1 || item.region === 2) {
                return { ...result, [item.region]: (result[item.region] || 0) + 1 };
            }
            return result;
        }, {} as IResult);
    };

    //Это выведет результат её работы справа
    return { expectedResult: expectedResult, result: getResult(sourceData) }
}
//Это выведет результат её работы справа
showTaskResult(3, Task3())