//Create a queue that will implement operations to add elements to the end of the queue, remove the first element,
//and calculate the size of the queue with the complexity of the O(1) algorithm.

class Queue {
    constructor() {
        this.start = null
        this.end = null
    }
    
    append(item) {
        // todo: добавить элемент в конец очереди
        const node = {
            data: item,
            next: null
        }

        if (this.end) {
            this.end.next = node
        }

        this.end = node

        if (!this.start) {
            this.start = node
        }

        this.end = node

    }
  
    prepend(item) {
        const node = {
            data: item,
            next: this.start
        }

        this.start = node

        if (!this.end) {
            this.end = node
        }

    }

    dequeue() {
        this.start = this.start.next
    }

    
  
    get size() {
        // todo: возвращает размер списка
				// нельзя использовать геттер
    }
}


const list = new Queue()

list.append('tott')

console.log(list)

list.append('moc')

console.log(list)

list.append('rort')

console.log(list)

list.prepend('pipt')

console.log(list)

list.dequeue()

console.log(list)