let name = document.getElementById('name')

class Message {
    constructor(name, time, text)
    {
        this.name = name
        this.time = time
        this.text = text
    }

    toHtml () {
        let time = new Date();
        time.toLocaleDateString().slice(0, -3)
        let output = document.createElement('p')
        let inputzone = document.querySelector('.name')
        let textzone = document.querySelector('.message')
        output.innerHTML = `<p>${time.getHours()}:${time.getMinutes()} ${inputzone.value}: ${textzone.value}</p>`
        document.querySelector('.history').append(output)
    }
}

let user = new Message()

class Messenger extends Message {
    show_history()
    {
        user.toHtml()
    }
    send(name, text)
    {
        user.name = name
        user.text = text
    }
}

let user2 = new Messenger()

// user2.send('Zaur', 'hello')

// user2.show_history()
let inputzone = document.querySelector('.name')
let textzone = document.querySelector('.message')
let send = document.querySelector('.btn-send')
let show = document.querySelector('.btn-show')

send.addEventListener('click', () => {
    user2.send(inputzone.innerText, textzone.innerText)
})

show.addEventListener('click', () => {
    user2.show_history()
})


