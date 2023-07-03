//Write a print List(list) function that prints the elements of a singly linked list one at a time.

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list){
    if (list.next == null) console.log(list.value)
    else {
        console.log(list.value)
        printList(list.next)
    }
}

printList(list)

function printList2(list){
    let currList = list
    while (currList) {
        console.log(currList.value)
        currList = currList.next
    }
}

printList2(list)