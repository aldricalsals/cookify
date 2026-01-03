/*=Hash PW=*/
function hashPassword(password){
    return btoa(password);
}
/*=Register=*/
function registerUser(nama, email, password){
    const user = {
        nama: nama,
        email: email,
        password: hashPassword(password)
    };
    localStorage.setItem("user", JSON.stringify(user));
}
/*=Login=*/
function loginUser(email, password){
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return false;

    return email === user.email && hashPassword(password) === user.password;
}
/*=Session=*/
function setSession(){
    sessionStorage.setItem("isLogin", "true");
}
function logout(){
    sessionStorage.removeItem("isLogin");
    window.location.href = "login.html";
}