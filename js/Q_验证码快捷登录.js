// 验证码
let shouji_ = document.getElementById('shouji');
let yanzheng_ = document.getElementById('yanzheng');

let return1 = 0;
let return2 = 0;

// 手机号验证
shouji_.onfocus = function() {
    shouji_.value = '';
}
shouji_.onblur = function() {
    reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (!reg.test(shouji_.value)) {
        shouji_.value = '请输入正确的手机号码！';
        shouji_.style.color = 'red';
    } else {
        return1 = 1;
        shouji_.style.color = 'black';
    }
}

// 验证码验证
yanzheng_.onfocus = function() {
    yanzheng_.value = '';
}
yanzheng_.onblur = function() {
    let text = '123456';
    if ((yanzheng_.value) != text) {
        yanzheng_.value = '请输入正确的验证码！';
        yanzheng_.style.color = 'red';
    } else {
        return2 = 1;
        yanzheng_.style.color = 'black';
    }
}

// 验证码倒计时
var  get  =  document.getElementById('code'); 
var  i = 60;
console.log(get);    
get.onclick  =   function ()  {        
    var  times  =  setInterval(function ()  {            
        i--;            
        get.innerHTML  =  i  +  '秒后重新获取';            
        get.style.color  =  "#ccc"             // console.log(num);                                                                                                                                                                                                                                                                                                                                                                                                
                        
        if  (i  ==  50)  {                
            alert("123456")            
        } 
        else  if  (i  ==  0)  {                
            clearInterval(times);            
        }        
    },  1000);    
}