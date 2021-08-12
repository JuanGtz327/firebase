const express = require('express');
const firebase = require('firebase');
const router = express.Router();

router.get('/',(req,res)=>{
	res.render('index');
})

router.post('/signUp',(req,res)=>{
	const {email,password} = req.body;
	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
		let user = userCredential.user;
		res.render('user',{user})
	})
	.catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
		res.render('index',{errorMessage})
	});
});

router.post('/signIn',(req,res)=>{
	const {email,password} = req.body;
	firebase.auth().signInWithEmailAndPassword(email, password)
	  .then((userCredential) => {
	    var user = userCredential.user;
	    res.render('user',{user})
	}).catch((error) => {
	    var errorCode = error.code;
	    var errorMessage = error.message;
	    res.render('index',{errorMessage})
	});
});

router.post('/signOut',(req,res)=>{
	firebase.auth().signOut().then(() => {
		res.redirect('/');
	}).catch((error) => {
		console.log(error)
	});
})

module.exports = router;