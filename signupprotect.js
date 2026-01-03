const isLogin = sessionStorage.getItem("isLogin");

if (isLogin) {
    console.log("User sudah login");
} else {
    console.log("User belum login");
}
