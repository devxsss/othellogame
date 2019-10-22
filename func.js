$(function(){
    var validation = $("#inquiry-form")
        .exValidation({
            // それぞれの項目に「class="chkrequired chkkatakana"」のように記述しているのと同じことをしています。
            rules: {
                name: "chkrequired",
                email: "chkrequired chkemail chkhankaku chkgroup",
                contact:"chkrequired"
            },
            customListener: "blur", // onBlur時のみにしてみる
            stepValidation: true,
            errTipCloseBtn: false,
            errTipPos: "right",  // 吹き出しが表示される位置（左右）
          //  errHoverHide: true, // マウスオーバーで消える
            scrollToErr: true   //
        });
