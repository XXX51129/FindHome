let phone_ = document.getElementById('phone');
let numCode_ = document.getElementById('numCode');
let getNumCode_ = document.getElementById('getNumCode');
let psw1 = document.getElementById('psw');
let promptlyRegister_ = document.getElementById('promptlyRegister');

let return1 = 0;
let return2 = 0;
let return3 = 0;

phone_.onfocus = function () {
    phone_.value = '';
}
phone_.onblur = function () {
    reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (!reg.test(phone_.value)) {
        phone_.value = '请输入正确的手机号码！';
    } else {
        return1 = 1;
    }
}

let num = 60;
let timer = null;
getNumCode_.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        getNumCode_.innerText = num + '秒';
        num--;
        if (num == 30) {
            alert('验证码为：1640');
        } else if (num == 0) {
            clearInterval(timer);
            getNumCode_.innerText = '再次获取';
        }
    }, 1000);
    numCode_.onblur = function () {
        let text = '1640';
        if ((numCode_.value) != text) {
            numCode_.value = '请输入正确的验证码！';
        } else {
            return2 = 1;
        }
    }
    numCode_.onfocus = function () {
        numCode_.value = '';
    }
}

psw1.onfocus = function () {
    psw1.value = '';
}
psw1.onblur = function () {
    reg = /^\w{6,12}$/;
    reg1 = /[^0-9]/;
    reg2 = /[^a-zA-Z]/;
    if (!reg.test(psw1.value)) {
        psw1.value = '密码安全性过低，不予通过';
    } else if (!reg1.test(psw1.value)) {
        psw1.value = '密码安全性过低，不予通过';
    } else if (!reg2.test(psw1.value)) {
        psw1.value = '密码安全性过低，不予通过';
    } else {
        return3 = 1;
    }
}

promptlyRegister_.onclick = function () {
    if (return1 == 1 && return2 == 1 && return3 == 1) {
        alert('注册成功！');
    } else {
        alert('信息填写不完整，并未注册成功！');
    }
}