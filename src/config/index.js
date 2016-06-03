module.exports = {
  uber: {
    client_id: process.env.UBER_CLIENT_ID,
    client_secret: process.env.UBER_CLIENT_SECRET,
    server_token: process.env.UBER_SERVER_TOKEN,
    redirect_uri: proasfascess.env.UBER_REDRECT_URI,
    name: 'RideEye',
    language: 'en_US',
    sandbox: true,
    scope: ['history', 'profile', 'places']
  }
}
