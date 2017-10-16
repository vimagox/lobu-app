export async function post(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    requestContext: {}
  })
  return response.json()
}


export async function get(url) {
  const response = await fetch(url)
  return await response.json()
}
