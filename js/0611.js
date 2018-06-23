/**
 * Created by Administrator on 2018/6/11.
 */
$(function(){
    var zzbds=/^[1][3,4,5,7,8][0-9]{9}$/;
    var num=60;
    var time;

    $('#in1').keyup(function(){
       var thisval=$('#in1').val();
        if(zzbds.test(thisval)){
            $('#bt1').attr('disabled',false);
        }else{
            $('#bt1').attr('disabled',true);
            $('#bt2').attr('disabled',true);
        }
    });

    $('#bt1').click(function(){
        $('#in1').attr('disabled',true);
        time=setInterval(function(){
            num--;
            if(num<=0){
                $('#bt1').text('获取验正码').attr('disabled',false);
                $('#in1').attr('disabled',false)
            }else{
                $('#bt1').text('再次获取'+num+'s').attr('disabled',true)
            }
        },100);
    });


$('#in2').keyup(function(){
    if(zzbds.test($('#in1').val())){
if($('#in2').val().length===6){
    $('#bt2').attr('disabled',false);
}else{
    $('#bt2').attr('disabled',true);
}
    }else{
        $('#bt2').attr('disabled',true);
    }
});
    $('#bt2').click(function(){
        window.location.href='061102.html'
    });























});/*全部*/