/*  There is a set of tickets like:

  const tickets = [
    {from: 'London',to: 'Moscow'},
    {from: 'NY',to: 'London'},
    {from: 'Portugal',to: 'NY'},
    {from: 'Moscow',to: 'SPb'},
    {from: 'SPb',to: 'Kairo'}
  ];

    From these tickets, you can build a single, inseparable route.
    There are no loops or repetitions in the route.
    Write a program that returns tickets
    in the order of the itinerary.
  */


  const tickets = [
    {from: 'London',to: 'Moscow'},
    {from: 'NY',to: 'London'},
    {from: 'Portugal',to: 'NY'},
    {from: 'Moscow',to: 'SPb'},
    {from: 'SPb',to: 'Kairo'}
  ];


function getRoute(tickets) {
    const res = tickets.splice(0,1)
    for (let i=0; i<tickets.length; i++) {
        if (!res[i]) break
        const tickFr = tickets.find((el) => el.from == res[i].to)
        if (tickFr) res.push(tickFr)
    }
    for (let i=tickets.length; i>0; i--) {
        const tickFr = tickets.find((el) => el.to == res[0].from)
        if (tickFr) res.unshift(tickFr)
    }
    return res
}

console.log(getRoute(tickets))




  // function getRoute(tickets) {
  //   const result = [];
  //   const routesTo = tickets.map((it) => it.to)

  //   result.push(tickets.filter(it => !routesTo.includes(it.from))[0]);
  //   let nextCity = result[0].to;

  //   for (let i = 1; i < tickets.length; i++) {
  //     const ticket = tickets.find(it => it.from === nextCity);
  //     result.push(ticket);
  //     nextCity = ticket.to;
  //   }

  //   return result;
  // }