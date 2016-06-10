# RideStats
### Uber Data Visualizer

## Usage
RideStats calculates statistics about your Uber usage (though has a demo mode for those who want to see it in action without actually logging into their Uber account).

## Requirements

- Node 6.2.x
- Express 4.x
- Mocha 2.x.x

> Note: You have to create an app in the [Uber Developers Dahsboard](https://developer.uber.com/dashboard) first. Grant the new app with all access rights and set the callback URL to ``http://localhost:3000/api/auth/callback``

### Installing Dependencies

From within the root directory:
```sh
* npm install
```

### Running the Repo Locally
```sh
* UBER_CLIENT_ID=[1] UBER_CLIENT_SECRET=[2] UBER_SERVER_TOKEN=[3] UBER_REDIRECT_URI=http://localhost:3000/api/auth/callback npm run dev
```
Don't forget to replace the [x] with your actual values. 

### Running tests
```sh
* npm run test
```

#### A deployed version of the repo can be found [here](https://ridestats9000.herokuapp.com/)
