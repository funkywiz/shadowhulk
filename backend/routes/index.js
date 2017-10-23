var express = require('express');
var router = express.Router();
var passport = require('passport');
var cors = require('cors');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/usermodel.js');
var Book = require('../model/booking.js');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(bodyParser.json({type: 'application/vnd.api+json'}));
var maincontroller=require('../controllers/usercontroller.js');

var userstatus=null;

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect('/users/home');
    }
};

router.get( '/',function(req,res){
    res.redirect('http://localhost:3030');
});

/*router.get( '/usercheck',function(req,res){
    if(userstatus){
        console.log("User is logged in ");
        console.log(userstatus);
        console.log(typeof(userstatus));
        res.status(200).json(userstatus);
    }
    else {
        console.log("NOT AUTHENTICATED");
        res.sendStatus(401);
    }
});*/

router.post('/logout', function(req, res){
    var id=req.body.userid;

    User.getUserById(id, function(err, user) {
        if(user)
        {
            console.log("Clearing token");
            user.token = null;
            res.sendStatus(200);
        }
        else
        {
            res.sendStatus(403);
        }
    });
});

router.post('/register',function(req,res){
    maincontroller.verification(req,res);
});

router.post('/login', function(req, res) {
    try {
        var email = req.body.email;
        var password = req.body.password;
        User.getUserByEmail(email, function (err, user) {
            if (err) throw err;
            if (!user) {
                console.log("Unknown user");
                res.sendStatus(402);
            }
            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    console.log('User is found');
                    user.token = Math.floor(Math.random() * 12151215);
                    console.log(user);
                    res.status(200).json(user);
                } else {
                    console.log("Invalid password");
                    res.sendStatus(401);
                }
            });
        });
    }
    catch(err)
    {
        console.log(err);
    }
});

router.post('/booking',function (req,res) {
    console.log(req.body.seats);
    var length=req.body.seats.length;
    if(length==1)
    {
        res.sendStatus(303);
    }
    if(length==2)
    {
        res.sendStatus(401);
    }
    var i=0;
    console.log(i);
    var matchname=req.body.seats[length-2];
    console.log(matchname);
    var userid=req.body.seats[length-1];
    console.log(userid);
    Book.getUserByMatch(matchname, function (err, user) {
        if (err) throw err;
        if (!user) {
            console.log("Unknown match");
            res.sendStatus(402);
        }
        else {
            while(i<length-2)
            {
                /* checking status*/
                console.log(req.body.seats[i]);
                if (req.body.seats[i] == '1A') {
                    if(user.seats.row1.slots1.status==true)
                        res.send(301).json('1A');
                    else
                        user.seats.row1.slots1.status=true;
                }
                if (req.body.seats[i] == '1B') {
                    if(user.seats.row1.slots2.status==true)
                        res.send(301).json('1B');
                    else

                        user.seats.row1.slots2.status=true;
                }
                if (req.body.seats[i] == '1C') {
                    if(user.seats.row1.slots3.status==true)
                        res.send(301).json('1C');
                    else
                        user.seats.row1.slots3.status=true;
                }
                if (req.body.seats[i] == '1D') {
                    if(user.seats.row1.slots4.status==true)
                        res.send(301).json('1D');
                    else
                        user.seats.row1.slots4.status=true;
                }
                if (req.body.seats[i] == '1E') {
                    if(user.seats.row1.slots5.status==true)
                        res.send(301).json('1E');
                    else
                        user.seats.row1.slots5.status=true;
                }
                if (req.body.seats[i] == '1F') {
                    if(user.seats.row1.slots6.status==true)
                        res.send(301).json('1F');
                    else
                        user.seats.row1.slots6.status=true;
                }

                if (req.body.seats[i] == '2A') {
                    if(user.seats.row1.slots1.status==true)
                        res.send(301).json('2A');
                    else
                        user.seats.row1.slots1.status=true;
                }
                if (req.body.seats[i] == '2B') {
                    if(user.seats.row2.slots2.status==true)
                        res.send(301).json('1B');
                    else

                        user.seats.row2.slots2.status=true;
                }
                if (req.body.seats[i] == '2C') {
                    if(user.seats.row2.slots3.status==true)
                        res.send(301).json('2C');
                    else
                        user.seats.row2.slots3.status=true;
                }
                if (req.body.seats[i] == '2D') {
                    if(user.seats.row2.slots4.status==true)
                        res.send(301).json('2D');
                    else
                        user.seats.row2.slots4.status=true;
                }
                if (req.body.seats[i] == '2E') {
                    if(user.seats.row2.slots5.status==true)
                        res.send(301).json('2E');
                    else
                        user.seats.row2.slots5.status=true;
                }
                if (req.body.seats[i] == '2F') {
                    if(user.seats.row2.slots6.status==true)
                        res.send(301).json('2F');
                    else
                        user.seats.row2.slots6.status=true;
                }

                if (req.body.seats[i] == '3A') {
                    if(user.seats.row3.slots1.status==true)
                        res.send(301).json('3A');
                    else
                        user.seats.row3.slots1.status=true;
                }
                if (req.body.seats[i] == '3B') {
                    if(user.seats.row3.slots2.status==true)
                        res.send(301).json('3B');
                    else

                        user.seats.row3.slots2.status=true;
                }
                if (req.body.seats[i] == '3C') {
                    if(user.seats.row3.slots3.status==true)
                        res.send(301).json('3C');
                    else
                        user.seats.row3.slots3.status=true;
                }
                if (req.body.seats[i] == '3D') {
                    if(user.seats.row3.slots4.status==true)
                        res.send(301).json('3D');
                    else
                        user.seats.row3.slots4.status=true;
                }
                if (req.body.seats[i] == '3E') {
                    if(user.seats.row3.slots5.status==true)
                        res.send(301).json('3E');
                    else
                        user.seats.row3.slots5.status=true;
                }
                if (req.body.seats[i] == '3F') {
                    if(user.seats.row3.slots6.status==true)
                        res.send(301).json('3F');
                    else
                        user.seats.row3.slots6.status=true;
                }


                if (req.body.seats[i] == '4A') {
                    if(user.seats.row4.slots1.status==true)
                        res.send(301).json('4A');
                    else
                        user.seats.row4.slots1.status=true;
                }
                if (req.body.seats[i] == '4B') {
                    if(user.seats.row4.slots2.status==true)
                        res.send(301).json('4B');
                    else
                    user.seats.row4.slots2.status=true;
                }
                if (req.body.seats[i] == '4C') {
                    if(user.seats.row4.slots3.status==true)
                        res.send(301).json('4C');
                    else
                    user.seats.row4.slots3.status=true;
                }
                if (req.body.seats[i] == '4D') {
                    if(user.seats.row4.slots4.status==true)
                        res.send(301).json('4D');
                    else
                    user.seats.row4.slots4.status=true;
                }
                if (req.body.seats[i] == '4E') {
                    if(user.seats.row4.slots5.status==true)
                        res.send(301).json('4E');
                    else
                    user.seats.row4.slots5.status=true;
                }
                if (req.body.seats[i] == '4F') {
                    if(user.seats.row4.slots6.status==true)
                        res.send(301).json('4F');
                    else
                    user.seats.row4.slots6.status=true;
                }

                if (req.body.seats[i] == '5A') {
                    if(user.seats.row5.slots1.status==true)
                        res.send(301).json('5A');
                    else
                    user.seats.row5.slots1.status=true;
                }
                if (req.body.seats[i] == '5B') {
                    if(user.seats.row5.slots2.status==true)
                        res.send(301).json('5B');
                    else
                    user.seats.row5.slots2.status=true;
                }
                if (req.body.seats[i] == '5C') {
                    if(user.seats.row5.slots3.status==true)
                        res.send(301).json('5C');
                    else
                    user.seats.row5.slots3.status=true;
                }
                if (req.body.seats[i] == '5D') {
                    if(user.seats.row5.slots4.status==true)
                        res.send(301).json('5D');
                    else
                    user.seats.row5.slots4.status=true;
                }
                if (req.body.seats[i] == '5E') {
                    if(user.seats.row5.slots5.status==true)
                        res.send(301).json('5E');
                    else
                    user.seats.row5.slots5.status=true;
                }
                if (req.body.seats[i] == '5F') {
                    if(user.seats.row5.slots6.status==true)
                        res.send(301).json('5F');
                    else
                    user.seats.row5.slots6.status=true;
                }


                if (req.body.seats[i] == '6A') {
                    if(user.seats.row6.slots1.status==true)
                        res.send(301).json('6A');
                    else
                    user.seats.row6.slots1.status=true;
                }
                if (req.body.seats[i] == '6B') {
                    if(user.seats.row6.slots2.status==true)
                        res.send(301).json('6B');
                    else
                    user.seats.row6.slots2.status=true;
                }
                if (req.body.seats[i] == '6C') {
                    if(user.seats.row6.slots3.status==true)
                        res.send(301).json('6C');
                    else
                    user.seats.row6.slots3.status=true;
                }
                if (req.body.seats[i] == '6D') {
                    if(user.seats.row6.slots4.status==true)
                        res.send(301).json('6D');
                    else
                    user.seats.row6.slots4.status=true;
                }
                if (req.body.seats[i] == '6E') {
                    if(user.seats.row6.slots5.status==true)
                        res.send(301).json('6E');
                    else
                    user.seats.row6.slots5.status=true;
                }
                if (req.body.seats[i] == '6F') {
                    if(user.seats.row6.slots6.status==true)
                        res.send(301).json('6F');
                    else
                    user.seats.row6.slots6.status=true;
                }


                if (req.body.seats[i] == '7A') {
                    if(user.seats.row7.slots1.status==true)
                        res.send(301).json('7A');
                    else
                    user.seats.row7.slots1.status=true;
                }
                if (req.body.seats[i] == '7B') {
                    if(user.seats.row7.slots2.status==true)
                        res.send(301).json('7B');
                    else
                    user.seats.row7.slots2.status=true;
                }
                if (req.body.seats[i] == '7C') {
                    if(user.seats.row7.slots3.status==true)
                        res.send(301).json('7C');
                    else
                    user.seats.row7.slots3.status=true;
                }
                if (req.body.seats[i] == '7D') {
                    if(user.seats.row7.slots4.status==true)
                        res.send(301).json('7D');
                    else
                    user.seats.row7.slots4.status=true;
                }
                if (req.body.seats[i] == '7E') {
                    if(user.seats.row7.slots5.status==true)
                        res.send(301).json('7E');
                    else
                    user.seats.row7.slots5.status=true;
                }
                if (req.body.seats[i] == '7F') {
                    if(user.seats.row7.slots6.status==true)
                        res.send(301).json('7F');
                    else
                    user.seats.row7.slots6.status = true;
                }


                if (req.body.seats[i] == '8A') {
                    if(user.seats.row8.slots1.status==true)
                        res.send(301).json('8A');
                    else
                    user.seats.row8.slots1.status=true;
                }
                if (req.body.seats[i] == '8B') {
                    if(user.seats.row8.slots2.status==true)
                        res.send(301).json('8B');
                    else
                    user.seats.row8.slots2.status=true;
                }
                if (req.body.seats[i] == '8C') {
                    if(user.seats.row8.slots3.status==true)
                        res.send(301).json('8C');
                    else
                    user.seats.row8.slots3.status=true;
                }
                if (req.body.seats[i] == '8D') {
                    if(user.seats.row8.slots4.status==true)
                        res.send(301).json('8D');
                    else
                    user.seats.row8.slots4.status=true;
                }
                if (req.body.seats[i] == '8E') {
                    if(user.seats.row8.slots5.status==true)
                        res.send(301).json('8E');
                    else
                    user.seats.row8.slots5.status=true;
                }
                if (req.body.seats[i] == '8F') {
                    if(user.seats.row8.slots6.status==true)
                        res.send(301).json('8F');
                    else
                    user.seats.row8.slots6.status=true;
                }

                if (req.body.seats[i] == '9A') {
                    if(user.seats.row9.slots1.status==true)
                        res.send(301).json('9A');
                    else
                    user.seats.row9.slots1.status=true;
                }
                if (req.body.seats[i] == '9B') {
                    if(user.seats.row9.slots2.status==true)
                        res.send(301).json('9B');
                    else
                    user.seats.row9.slots2.status=true;
                }
                if (req.body.seats[i] == '9C') {
                    if(user.seats.row9.slots3.status==true)
                        res.send(301).json('9C');
                    else
                    user.seats.row9.slots3.status=true;
                }
                if (req.body.seats[i] == '9D') {
                    if(user.seats.row9.slots4.status==true)
                        res.send(301).json('9D');
                    else
                    user.seats.row9.slots4.status=true;
                }
                if (req.body.seats[i] == '9E') {
                    if(user.seats.row9.slots5.status==true)
                        res.send(301).json('9E');
                    else
                    user.seats.row9.slots5.status=true;
                }
                if (req.body.seats[i] == '9F') {
                    if(user.seats.row9.slots6.status==true)
                        res.send(301).json('9F');
                    else
                    user.seats.row9.slots6.status=true;
                }

                if (req.body.seats[i] == '10A') {
                    if(user.seats.row10.slots1.status==true)
                        res.send(301).json('10A');
                    else
                    user.seats.row10.slots1.status=true;
                }
                if (req.body.seats[i] == '10B') {
                    if(user.seats.row10.slots2.status==true)
                        res.send(301).json('10B');
                    else
                    user.seats.row10.slots2.status=true;
                }
                if (req.body.seats[i] == '10C') {
                    if(user.seats.row10.slots3.status==true)
                        res.send(301).json('10C');
                    else
                    user.seats.row10.slots3.status=true;
                }
                if (req.body.seats[i] == '10D') {
                    if(user.seats.row10.slots4.status==true)
                        res.send(301).json('10D');
                    else
                    user.seats.row10.slots4.status=true;
                }
                if (req.body.seats[i] == '10E') {
                    if(user.seats.row10.slots5.status==true)
                        res.send(301).json('10E');
                    else
                    user.seats.row10.slots5.status=true;
                }
                if (req.body.seats[i] == '10F') {
                    if(user.seats.row10.slots6.status==true)
                        res.send(301).json('10F');
                    else
                    user.seats.row10.slots6.status=true;
                }
                i++;
                console.log(i++)
            }

        }
    });
    /*
    User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
            console.log('User is found');
            user.token = Math.floor(Math.random() * 12151215);
            console.log(user);
            res.status(200).json(user);
        } else {
            console.log("Invalid password");
            res.sendStatus(401);
        }
    });*/

});

module.exports= router;
