document.addEventListener('DOMContentLoaded', function() {
    var slideNav = document.querySelectorAll('.sidenav');
    var instancesSlideNav = M.Sidenav.init(slideNav);
});

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelectorAll('.modal');
    var instancesModal = M.Modal.init(modal);
});


const links = document.querySelectorAll(".sidenav li a")
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function (e) {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
        e.preventDefault();
    }
}