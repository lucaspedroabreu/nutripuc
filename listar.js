function retreiveClients() {
  const clients = []
  const keys = Object.keys(localStorage)
  let i = keys.length

  while (i--) {
    if (localStorage.getItem(keys[i]).endsWith(']')) {
      clients.push(localStorage.getItem(keys[i]))
    }
  }

  return clients
}

const pacientes = retreiveClients()
console.log(pacientes)
