(function(){
	angular.module('sportsticket').controller("Usercontrollers",Usercontrollers);
    Usercontrollers.$inject= ['$state','$window','$cookieStore','MainService'];
    function Usercontrollers($state,$window,$cookieStore,MainService){
    	var ctrl=this;
    	var isLogin=true;
        ctrl.Username=false;
        ctrl.activeclass=false;
        ctrl.currlist=0;
        ctrl.switchclass1=function() {
            ctrl.activeclass=!ctrl.activeclass;
            ctrl.currlist=1;
        }
        ctrl.switchclass2=function() {
            ctrl.activeclass=!ctrl.activeclass;
            ctrl.currlist=2;
        }
        ctrl.switchclass3=function() {
            ctrl.activeclass=!ctrl.activeclass;
            ctrl.currlist=3;
        }
        ctrl.switchclass4=function() {
            ctrl.activeclass=!ctrl.activeclass;
            ctrl.currlist=4;
        }
        ctrl.switchclass5=function() {
            ctrl.activeclass=!ctrl.activeclass;
            ctrl.currlist=5;
        }
        ctrl.checkUsername=function()
        {
                var cookiedata=false;
                cookiedata=$cookieStore.get("Details");
                if(cookiedata)
                {
                    ctrl.Username=cookiedata.fname;
                    return true;
                }
                else{
                    ctrl.Username=false;
                    return false;
                }
        };
        ctrl.travcourses=function(){
    		console.log("SUCCESS");
    		$state.go('Courses');
    	};
        ctrl.travbook1=function(){
            $cookieStore.remove("ticket");
            $cookieStore.put("ticket","IND VS BAN");
            $state.go('Book');
        };
        ctrl.travbook2=function(){
            $cookieStore.remove("ticket");
            $cookieStore.put("ticket","SL VS SA");
            $state.go('Book');
        };
        ctrl.travbook3=function(){
            $cookieStore.remove("ticket");
            $cookieStore.put("ticket","IND VS SL");
            $state.go('Book');
        };
        ctrl.travbook4=function(){
            $cookieStore.remove("ticket");
            $cookieStore.put("ticket","AUS VS SA");
            $state.go('Book');
        };
        ctrl.travbook5=function(){
            $cookieStore.remove("ticket");
            $cookieStore.put("ticket","IND VS WI");
            $state.go('Book');
        };
    	ctrl.travlandingpage=function(){
    		console.log("SUCCESS");
    		$state.go('Landing_page');
    	};
    	ctrl.travstaff=function(){
    		console.log("SUCCESS");
    		$state.go('Staff');
    	};
    	ctrl.travaccount=function(){
    		console.log("SUCCESS");
    		$state.go('Account');
    	};
    	ctrl.travcontactus=function(){
    		console.log("SUCCESS");
    		$state.go('Contactus');
    	};
    	ctrl.travsignup=function(){
    		console.log("SUCCESS");
    		$state.go('Signup');
    	};
        ctrl.SwitchLoginWindow=function(){
            ctrl.isLogin=true;
        };
        ctrl.SwitchRegWindow=function(){
            ctrl.isLogin=false;
        };
        ctrl.submitdata=function(){
            var data={
            fname : ctrl.firstname,
            lname : ctrl.lastname,
            email : ctrl.email,
            cnfemail : ctrl.cnfemail,
            password : ctrl.password,
            cnfpassword : ctrl.cnfpassword
            };
            console.log(data);
            MainService.verifydata(data).then(function(response){
            	if(response.status==200){
            		console.log("ACCOUNT CREATED");
            		alert("User Created");
            	} else if(response.status==301)
                {
                    console.log("User is already created");
                    alert("User is already created");
                }
            });
        }
        ctrl.logindata=function(){
            var data1 ={
            email : ctrl.email,
            password : ctrl.password
            };
            console.log(data1);
            MainService.loginsubmit(data1).then(function(response){
                if(response.status==200){
                    console.log('The details loginned details are');
                    console.log(response.data);
                    console.log(typeof(response.data));
                    $cookieStore.put("Details",response.data);
                    console.log('Getting-data');
                    var data=$cookieStore.get("Details".name);
                    alert("LOGGED IN!!");
                    console.log("VERFIED");
                }
                else if(response.status==402)
                {
                    console.log("User Does not exist");
                }
                else if(response.status==401)
                {
                    console.log("Password is incorrect");
                }
            });
        };
        ctrl.currentmatch=function () {
            var data=$cookieStore.get("ticket");
            console.log("The current match is");
            var json={
                seats:[]
            };
            console.log(json);
            if(ctrl.q1A)
            {
              json.seats.push("1A");
            }
            if(ctrl.q1B)
            {
                json.seats.push("1B");
            }if(ctrl.q1C)
            {
                json.seats.push("1C");
            }if(ctrl.q1D)
            {
                json.seats.push("1D");
            }if(ctrl.q1E)
            {
                json.seats.push("1E");
            }if(ctrl.q1F)
            {
                json.seats.push("1F");
            }if(ctrl.q2A)
            {
                json.seats.push("2A");
            }if(ctrl.q2B)
            {
                json.seats.push("2B");
            }if(ctrl.q2C)
            {
                json.seats.push("2C");
            }if(ctrl.q2D)
            {
                json.seats.push("2D");
            }if(ctrl.q2E)
            {
                json.seats.push("2E");
            }if(ctrl.q2F)
            {
                json.seats.push("2F");
            }
            if(ctrl.q3A)
            {
                json.seats.push("3A");
            }
            if(ctrl.q3B)
            {
                json.seats.push("3B");
            }
            if(ctrl.q3C)
            {
                json.seats.push("3C");
            }
            if(ctrl.q3D)
            {
                json.seats.push("3D");
            }
            if(ctrl.q3E)
            {
                json.seats.push("3E");
            }
            if(ctrl.q3F)
            {
                json.seats.push("3F");
            }
            if(ctrl.q4A)
            {
                json.seats.push("4A");
            }if(ctrl.q4B)
            {
                json.seats.push("4B");
            }if(ctrl.q4C)
            {
                json.seats.push("4C");
            }if(ctrl.q4D)
            {
                json.seats.push("4D");
            }if(ctrl.q4E)
            {
                json.seats.push("4E");
            }if(ctrl.q4F)
            {
                json.seats.push("4F");
            }
            if(ctrl.q5A)
            {
                json.seats.push("5A");
            }if(ctrl.q5B)
            {
                json.seats.push("5B");
            }if(ctrl.q5C)
            {
                json.seats.push("5C");
            }if(ctrl.q5D)
            {
                json.seats.push("5D");
            }if(ctrl.q5E)
            {
                json.seats.push("5E");
            }if(ctrl.q5F)
            {
                json.seats.push("5F");
            }

            if(ctrl.q6A)
            {
                json.seats.push("6A");
            }if(ctrl.q6B)
            {
                json.seats.push("6B");
            }if(ctrl.q6C)
            {
                json.seats.push("6C");
            }if(ctrl.q6D)
            {
                json.seats.push("6D");
            }if(ctrl.q6E)
            {
                json.seats.push("6E");
            }if(ctrl.q6F)
            {
                json.seats.push("6F");
            }
            if(ctrl.q7A)
            {
                json.seats.push("7A");
            }if(ctrl.q7B)
            {
                json.seats.push("7B");
            }if(ctrl.q7C)
            {
                json.seats.push("7C");
            }if(ctrl.q7D)
            {
                json.seats.push("7D");
            }if(ctrl.q7E)
            {
                json.seats.push("7E");
            }if(ctrl.q7F)
            {
                json.seats.push("7F");
            }

            if(ctrl.q8A)
            {
                json.seats.push("8A");
            }if(ctrl.q8B)
            {
                json.seats.push("8B");
            }if(ctrl.q8C)
            {
                json.seats.push("8C");
            }if(ctrl.q8D)
            {
                json.seats.push("8D");
            }if(ctrl.q8E)
            {
                json.seats.push("8E");
            }if(ctrl.q8F)
            {
                json.seats.push("8F");
            }
            if(ctrl.q9A)
            {
                json.seats.push("9A");
            }if(ctrl.q9B)
            {
                json.seats.push("9B");
            }if(ctrl.q9C)
            {
                json.seats.push("9C");
            }if(ctrl.q9D)
            {
                json.seats.push("9D");
            }if(ctrl.q9E)
            {
                json.seats.push("9E");
            }if(ctrl.q9F)
            {
                json.seats.push("9F");
            }
            if(ctrl.q10A)
            {
                json.seats.push("10A");
            }
            if(ctrl.q10B)
            {
                json.seats.push("10B");
            }
            if(ctrl.q10C)
            {
                json.seats.push("10C");
            }
            if(ctrl.q10D)
            {
                json.seats.push("10D");
            }
            if(ctrl.q10E)
            {
                json.seats.push("10E");
            }
            if(ctrl.q10F)
            {
                json.seats.push("10F");
            }
            json.seats.push(data);
            var us=$cookieStore.get("Details");
            json.seats.push(us.fname);
            MainService.bookticket(json).then(function(res){
                if(res.status=401)
                {
                    alert("Select Some seats");
                }
                else if(res.status==301)
                {
                    console.log(res);
                    alert("The seats hav already booked"+res);
                }
                console.log("Post Success");
                console.log(res);
            });
            console.log(json);
            alert(data);

        };
        ctrl.logout=function()
        {
            var token=$cookieStore.get("Details");
            console.log(token._id);
            console.log(typeof(token._id));
            var jsondata={
                userid : token._id
            };
            MainService.logoutuser(jsondata).then(function(response){
                    if(response.status==200)
                    {
                        alert("Signout Sucess");
                        $cookieStore.remove("Details");
                        $state.go('Landing_page');
                    }else if (response.status==403){
                        alert("Error in the Signout data");
                    }
                    else
                    {
                        alert("Already Signed out");
                        $state.go('Landing_page');
                    }
            });
        }
        
    }
})();