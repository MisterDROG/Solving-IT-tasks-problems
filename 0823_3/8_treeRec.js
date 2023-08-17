//go through the tree

const obj = {
    a: {
        a1: '1',
        a2: {
            a21: '2',
            a22: {
                a221: '3',
                a222: '4'
            },
            a23: '5'
        },
        a3: '6',
    },
    b: '7',
    c: {
        c1: {
            c11: '8',
            c22: '9',
        },
        c2: {
            c21: '10',
            c22: '11',
            c23: {
                c231: '12',
                c232: '13',
                c233: '14',
                c234: {
                    c2341: '15',
                    c2342: '16',
                    c2343: {
                        c23431: '17',
                        c23432: '18',
                        c23433: '19'
                    }
                }
            }
        },
        c3: '20',
        c4: '21'
    },
    d: '22'
}

function printTree(tree) {
    for (node in tree) {
        if (typeof tree[node] === 'string') console.log(tree[node])
        // if (typeof tree[node] === 'string') console.log(tree , ' ---> ',tree[node])
        else printTree(tree[node])
    }
}

printTree(obj)