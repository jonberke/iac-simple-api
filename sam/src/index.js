exports.handler = async (event) => {
    console.log('Request received at ' + new Date().toISOString())
  
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status: 'ok' })
    }
  }
  