
let previewProject = document.querySelector('.project-preview');
let previewBox = previewProject.querySelectorAll('.preview');

document.querySelectorAll('.project-container .project').forEach(product =>{
  product.onclick = () =>{
    previewProject.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.close').onclick = () =>{
    close.classList.remove('active');
    previewProject.style.display = 'none';
  };
});


function next(t){
  let elm = t.parentElement.parentElement.children[0];
  let item = elm.getElementsByClassName("item");
  elm.append(item[0]);
}
function prev(t){
  let elm = t.parentElement.parentElement.children[0];
  let item = elm.getElementsByClassName("item");
  elm.prepend(item[item.length - 1]);
}

