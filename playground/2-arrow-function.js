// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guessList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guess List for ' + this.name)

        this.guessList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()