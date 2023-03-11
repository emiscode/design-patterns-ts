interface App {
  status: string
}

const app: App = {
  status: 'Running',
}

console.log(`LOG => ${JSON.stringify(app)}`)

export default App