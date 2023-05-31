const show2009 = function() {
  if (typeof window !==undefined) {
    document.querySelector('.titre-2009').classList.remove('hidden');
    document.querySelector('.titre-2010').classList.add('hidden');
    document.querySelector('.titre-2023').classList.add('hidden');
    document.querySelector('.nav-2009').classList.add('hidden');
    document.querySelector('.nav-2010').classList.remove('hidden');
    document.querySelector('.nav-2023').classList.remove('hidden');
    let itemElts = document.querySelectorAll('.itemslist> li:not(.separator)');
    let item2009Elts = document.querySelectorAll('.item-2009');
    let i;
    for (i=0;i<itemElts.length;i++) itemElts[i].classList.add('hidden');
    for (i=0;i<item2009Elts.length;i++) item2009Elts[i].classList.remove('hidden');
  };
};
export default show2009