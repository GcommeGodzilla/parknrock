const toggleMenu = function() {
    document.querySelector('header nav').classList.toggle('hidden');
    document.querySelector('main> div').classList.toggle('hidden');
    console.log('toggle menu yeah');
}
export default toggleMenu