document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');

    preloader.style.display = 'flex';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 2000);
});

document.getElementById("human").addEventListener("click", human);
function human() {
  window.location.href="human.html";
}
document.getElementById("computer").addEventListener("click", myFunction);
function myFunction() {
  window.location.href="computer.html";
}