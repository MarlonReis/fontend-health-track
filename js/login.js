const activeTabByContextAndClass = (context, classHide, classShow) => {
    $(context).addClass("active");
    $(classShow).show();
    $(classHide).hide();
}

$(document).ready(function () {
    activeTabByContextAndClass($(".login-header"), ".register", ".login");

    $(".register-header").click(function () {
        activeTabByContextAndClass(this, ".login", ".register");
        $(".login-header").removeClass("active");
    });

    $(".login-header").click(function () {
        activeTabByContextAndClass(this, ".register", ".login");
        $(".register-header").removeClass("active");
    });

    $("#form-login").submit(function (event) {
        event.preventDefault();

        const email = $('#email-login').val();
        const password = $('#password-login').val();
        if (email === "marlon@fiap.com.br" && password === "RM84127") {
            window.location.href = 'dashboard.html'; 
        }
    });
});