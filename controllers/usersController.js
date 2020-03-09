const Account = require("../models/account");
const passport = require('passport');
const Contact = require('../models/contact');
const Note = require('../models/note')

module.exports = {
	getUser: function(req, res, next) {
        if(req.session.passport.user) {
            return res.status(200).json({
                user: req.session.passport.user,
                authenticated: true
            });
        } else {
            return res.status(401).json({
                error: 'User is not authenticated',
                authenticated: false
            }); 
        }
	},
    register: function(req, res, next) {
        console.log('/register handler', req.body);
		Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
				if (err) {
					return res.status(500).send({ error : err.message });
				}

				passport.authenticate('local')(req, res, () => {
						req.session.save((err) => {
								if (err) {
									//ToDo:log the error and look for an existing user
									
										return next(err);
								}

								res.send(200,"successful register");
						});
				});
		});
    },
    login: function(req, res, next) {
        console.log('/login handler');
		req.session.save((err) => {
				if (err) {
						return next(err);
				}
				res.status(200).send('OK');
		});
    },
    logout: function(req, res, next) {
        req.logout();
		req.session.save((err) => {
				if (err) {
						return next(err);
				}
				res.status(200).send('OK');
		});
    },
    test: function(req , res, next){
        console.log(`Ping Dinger ${req.statusCode}`);
		res.status(200).send("Dong!");
	},
	getContacts: function(req, res, next){
		Account.find({username: req.params.username})
		.populate("contacts")
		.then(dbModel=>res.json(dbModel))
		.catch(err=>res.status(422).json(err))
	},
	addContact: function(req, res, next){
		Contact.create(req.body)
		.then(function(dbContact){
			return Account.findOneAndUpdate({username: req.params.username}, {$push: {contacts: dbContact._id}})
		})
		.then(dbModel=>{res.json(dbModel)})
		.catch(err=>res.status(422).json(err))
	}
};