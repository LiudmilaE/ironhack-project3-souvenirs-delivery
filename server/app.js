require("dotenv").config();
const history = require('express-history-api-fallback');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./models/user');
const config = require('./config');
const { Strategy, ExtractJwt } = require('passport-jwt');
const FacebookStrategy = require('passport-facebook');
const cors = require('cors');


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
	useMongoClient: true
});

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (app.get('env') === 'development') {
	app.use(
		cors({
			origin: 'http://localhost:8080',
		})
	);
}

passport.initialize();
//passport strategy for JWT
const strategy = new Strategy({
		// this is a config we pass to the strategy
		// it needs to secret to decrypt the payload of the
		// token.
		secretOrKey: config.jwtSecret,
		// This options tells the strategy to extract the token
		// from the header of the request
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
	},
	(payload, done) => {
		// payload is the object we encrypted at the route /api/token
		// We get the user id, make sure the user exist by looking it up
		User.findById(payload.id).then(user => {
			if(user){
				// make the user accessible in req.user
				done(null, user);
			} else {
				done(new Error("User not found"));
			}
		});
	}
);
//tell passport to use this strategy
passport.use(strategy);

//facebook strategy
// passport.use(
// 	new FacebookStrategy(
// 		{
// 			clientID: process.env.FB_CLIENT_ID,
// 			clientSecret: process.env.FB_CLIENT_SECRET,
// 			callbackURL: 'http://localhost:3000/api/auth/facebook/callback',
// 			profileFields: ['id', 'displayName', 'email'],
// 		},
// 		(accessToken, refreshToken, profile, cb) => {
// 			User.findOne({
// 				facebookId: profile.id,
// 			})
// 				.then(user => {
// 					if (user) {
// 						return user;
// 					} else {
// 						const user = new User({
// 							// we need a username
// 							username: profile.email,
// 							name: profile.displayName,
// 							facebookId: profile.id,
// 						});
// 						return user.save();
// 					}
// 				})
// 				.then(user => {
// 					cb(null, user);
// 				})
// 				.catch(err => cb(err));
// 		}
// 	)
// );
//end of facebook strategy
	

const authRoutes = require('./routes/auth');
const tripsRoutes = require('./routes/trips');
const ordersRoutes = require('./routes/orders');
const imagesRoutes = require('./routes/images');

app.use('/api', authRoutes);
app.use('/api/trips', tripsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/images', imagesRoutes);

// protecting the route
app.get(
	"/api/secret",
	// this is protecting the route and giving us access to
	// req.user
	passport.authenticate('jwt', config.jwtSession),
	(req,res) => {
	// send the user his own information
	res.json(req.user);
	}
);

const clientRoot = path.join(__dirname, '../client/dist');
app.use('/', express.static(clientRoot))
app.use(history('index.html', { root: clientRoot }))

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// render the error message only in development mode
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err.message,//req.app.get('env') === 'development' ? err.message : "Something went wrong...",
	});
});

module.exports = app;
