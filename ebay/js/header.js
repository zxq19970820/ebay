	
	
	//将表头span标签内容置换成用户名
		
		var loca=window.location.href;
		if(loca.indexOf("?")!=-1)
		{var nameAndPassword=loca.substr(loca.indexOf("?")+1);
		
		var arrs=nameAndPassword.split("&");
		
		var name=arrs[0].substr(arrs[0].indexOf("=")+1);
		name=decodeURI(name);
		$(".first-second").replaceWith(name);}
		// var password=arrs[1].substr(arrs[1].indexOf("=")+1);
		// var base=new Base64();
		//  password=base.decode(password);
		// alert(password);
		// $.getJSON("users.json",function(data){
		// 	var user=data.users;
		// 	var jname=user[0].usersname;
		// 	var jpassword=user[0].password;
		// 	jpassword=base.encode(jpassword);
		// 	jpassword=base.decode(jpassword);
		// 	alert(jpassword);
			
		// 	if(name==jname&&password==jpassword){
				
		// 	}
		// });
		$(".cart-button").click(function(){
			
			if(loca.indexOf("?")!=-1){
			var nameAndPassword=loca.substr(loca.indexOf("?")+1);
			
			var arrs=nameAndPassword.split("&");
			
			var name=arrs[0].substr(arrs[0].indexOf("=")+1);
			name=decodeURI(name);
			window.location.href="cart.html?name="+name;
			}else{
				window.location.href="cart.html";
			}
			
		})
		$("img").click(function(){
			if(loca.indexOf("?")!=-1){
				var nameAndPassword=loca.substr(loca.indexOf("?")+1);
				
				var arrs=nameAndPassword.split("&");
				
				var name=arrs[0].substr(arrs[0].indexOf("=")+1);
				name=decodeURI(name);
				window.location.href="index.html?name="+name;
			}else{
				window.location.href="index.html";
			}
			
		})