$(document).ready(function() {
    getnumber();
    gettotal();
    getnumber1();
})

/*全选*/
$(".selectAll").click(function() {
    $(".check-box").prop("checked", $(this).prop("checked"));
    getnumber();
    getnumber1();
    gettotal();
});
/*单选*/
$(".check-box").click(function() {
    if ($(this).prop("checked") == false) {
        $(".selectAll").prop("checked", false);
    }
    if ($(".cart-bucket").length == $(".check-box:checked").length) {
        $(".selectAll").prop("checked", true);
    }
    getnumber();
    getnumber1();
    gettotal();
});
/*移除*/
$(".del").click(function() {
        if (confirm("确定要删除吗?")) {


            $(this).parentsUntil(".left-section").remove();
            // for(var i=0;i<arrs.length;i++)
            // 	arrs[i].remove();
            // alert($(".cart-bucket").html());
        }
        getnumber();
        getnumber1();
        gettotal();
    })
    /*加物品*/

$(".plus").click(function() {
    var count = $(this).prev().val();
    count++;
    $(this).prev().val(count);
    var price = $(this).parent().parent().next().find(".money").html();
    var newprice = $(this).prev().val() * Number(price);
    $(this).parent().parent().next().find(".totalMoney").html(newprice);
    getnumber();
    gettotal();
})
$(".minus").click(function() {

        var count = $(this).next().val();
        if (1 == count)
            return;
        count--;
        $(this).next().val(count);
        var price = $(this).parent().parent().next().find(".money").html();
        var newprice = $(this).next().val() * Number(price);
        $(this).parent().parent().next().find(".totalMoney").html(newprice);
        getnumber();
        gettotal();
    })
    //前往付款
$("#pay").click(function() {
    var loca=window.location.href ;
	if(loca.indexOf("?")!=-1){
		var nameAndPassword=loca.substr(loca.indexOf("?")+1);
		
		var arrs=nameAndPassword.split("&");
		
		var name=arrs[0].substr(arrs[0].indexOf("=")+1);
		name=decodeURI(name);
		window.location.href="pay.html?name="+name;
	}else{
		alert("请先注册或登录");
	}
})

function getnumber() {
    $(".number1").html(function() {
        var arrs = $(".check-box:checked").parent().siblings(".goods-num").find(".numberinput");
        var nums = 0;
        for (var i = 0; i < arrs.length; i++) {
            nums += Number(arrs[i].value);
        }
        // var nums=0;
        // var arrs=$(".numberinput");
        // for(var i=0;i<arrs.length;i++){
        // 	nums+=Number(arrs[i].value);
        // }
        return nums;
    })
}

function getnumber1() {
    $(".number").html(function() {

        return $(".cart-bucket").length;
    })
}

function gettotal() {
    $(".total-price").html(function() {
        var arrs = $(".check-box:checked").parent().siblings(".goods-price").find(".totalMoney");
        var total = 0;
        for (var i = 0; i < arrs.length; i++) {
            total += Number(arrs[i].innerHTML);

        }
        return total;
    })
}