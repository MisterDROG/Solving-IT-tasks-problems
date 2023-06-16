class Queue {
    #storage = {}
    #last = 0
    #first = 0

    
    enqueue(item) {
        this.#storage[this.#last] = item
        this.#last++
    }
  
    dequeue() {
        delete this.#storage[this.#first]
        this.#first++
    }
  
    get size() {
        return this.#last-this.#first
    }
}

const hashT = new Queue()

hashT.enqueue('ok')
hashT.enqueue('hello')
hashT.enqueue('Tom')

console.log(hashT)

hashT.dequeue()
hashT.dequeue()

console.log(hashT.size)