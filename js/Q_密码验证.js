let xin_ = document.getElementById('xin');
let queding_ = document.getElementById('queding');
let registerBtn_ = document.getElementById('registerBtn');

let return1 = 0;
let return2 = 0;



xin_.onfocus = function() {
    xin_.value = '';
}
xin_.onblur = function() {
    reg = /^\w{6,12}$/;
    reg1 = /[^0-9]/;
    reg2 = /[^a-zA-Z]/;
    if (!reg.test(xin_.value)) {
        xin_.value = '密码安全性过低，不予通过';
    } else if (!reg1.test(xin_.value)) {
        xin_.value = '密码安全性过低，不予通过';
    } else if (!reg2.test(xin_.value)) {
        xin_.value = '密码安全性过低，不予通过';
    } else {
        return1 = 1;
    }
}

queding_.onfocus = function() {
    queding_.value = '';
}
queding_.onblur = function() {
    if (queding_.value != queding_.value) {
        queding_.value = '两次密码输入不一致';
    } else {
        return2 = 1;
    }
}

registerBtn_.onclick = function() {
    if (return1 == 1 && return2 == 1) {
        alert('注册成功！');
    } else {
        alert('信息填写不完整，并未注册成功！');
    }
}