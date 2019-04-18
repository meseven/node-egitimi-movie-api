const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Models
const User = require("../models/User");

/* GET home page. */
router.get("/", (req, res, next) => {
	res.render("index", { title: "Express" });
});

router.post("/register", async (req, res, next) => {
	const { username, password } = req.body;

	try {
		const userExists = await User.findOne({ username });
		if (userExists) {
			throw new Error();
		}
	} catch (e) {
		res.status(200).json({
			status: false,
			errors: {
				username: "Username already exists.",
			},
		});
		return false;
	}

	bcrypt.hash(password, 10).then(hash => {
		const user = new User({
			username,
			password: hash,
		});

		const promise = user.save();
		promise
			.then(({ username, _id }) => {
				res.json({ username, _id });
			})
			.catch(err => {
				res.json(err);
			});
	});
});

router.post("/authenticate", (req, res) => {
	const { username, password } = req.body;

	User.findOne(
		{
			username,
		},
		(err, user) => {
			if (err) throw err;

			if (!user) {
				res.json({
					status: false,
					message: "Wrong username or password.",
				});
			} else {
				bcrypt.compare(password, user.password).then(result => {
					if (!result) {
						res.json({
							status: false,
							message: "Wrong username or password.",
						});
					} else {
						const payload = {
							username,
						};
						const token = jwt.sign(payload, req.app.get("api_secret_key"));

						res.json({
							status: true,
							token,
						});
					}
				});
			}
		},
	);
});

module.exports = router;
