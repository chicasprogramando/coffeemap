const apiURL = 'https://jsonplaceholder.typicode.com' // this is not the final url

const makeRequest = endpoint => {
  const customHeaders = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  })

  return new Promise((resolve, reject) => {
    fetch(apiURL + endpoint, {
      headers: customHeaders,
      mode: 'cors',
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      resolve(data)
    })
    .catch(error => reject(error))
  })
}

const getPosts = () => {
  return makeRequest('/posts')
}

const api = {
  getPosts
}

export default api