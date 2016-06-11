module.exports = {
  uber: {
    client_id: 'YOUR_CLIENT_ID_HERE',
    client_secret: 'YOUR_CLIENT_SECRET_HERE',
    server_token: 'YOUR_SERVER_HERE',
    redirect_uri: 'YOUR_REDIRECT_URI_HERE', // http://localhost:3000/api/auth/callback if running locally
    name: 'YOUR_CLIENT_ID_HERE',
    language: 'en_US',
    sandbox: true,
    scope: ['history', 'profile', 'places']
  }
}
