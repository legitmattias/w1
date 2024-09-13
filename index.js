function questions() {
  const readline = require('node:readline')
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Välj sten, sax eller påse för spelare 1: ', (first) => {
    rl.question('Välj sten, sax eller påse för spelare 2: ', (second) => {
    console.log('Spelarna har valt: ${first} and ${second}')
    return [first, second]
    rl.close()
  })

}

const args = process.argv.slice(2)

if (args.length != 2) {
  if (args.length == 0) {
    const inputs = questions()
  } else {
    console.error('Ange exakt två argument eller inget')
    process.exit(1)
  }

}

const first = args[0]
const second = args[1]

const gestures = ['sten', 'sax', 'påse']

if (!(gestures.includes(first)) || !(gestures.includes(second))) {
  console.error('Ange endast sten, sax eller påse')
  process.exit(1)
}

if (first == second) {
  console.log('lika')
  } else if ((first == 'sten' && second == 'sax') || (first == 'sax' && second == 'påse') || (first == 'påse' && second == 'sten')) {
    console.log(`${first} vinner`)
  } else {
    console.log(`${second} vinner`)
}
}
