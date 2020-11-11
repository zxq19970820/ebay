		$("#loginbtn").click(function() {
		
		    var base64 = new Base64();
		    var username = $("#username").val();
		    var password = $("#password").val();
		
		
		    $.getJSON("users.json", function(data) {
		        var flag = 0;
		        var user = data.users;
		        for (var i = 0; i < user.length; i++) {
		            if (username == user[i].usersname && password == user[i].password) {
		                flag = 1;
		                break;
		            }
		        }
		        if (flag) {
		            password = base64.encode(password);
		            window.location.href = "index.html?username=" + username + "&password=" + password;
		        } else {
		            alert("密码或账号输入错误，请重新输入");
		        }
		
		
		    });
		    
		});
	
		
		