let shouji_ = document.getElementById('shouji');
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