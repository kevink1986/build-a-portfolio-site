// function ellipsizeTextBox(id) {
//     var el = document.getElementById(id);
//     var wordArray = el.innerHTML.split(' ');
//     while(el.scrollHeight > el.offsetHeight) {
//         wordArray.pop();
//         el.innerHTML = wordArray.join(' ') + '...';
//      }
// }
// ellipsizeTextBox('description');

function ellipsizeTextBox(name) {
    var el = document.getElementsByClassName(name);
    console.log(el);
    // var wordArray = el.innerHTML.split(' ');
    // while(el.scrollHeight > el.offsetHeight) {
    //     wordArray.pop();
    //     el.innerHTML = wordArray.join(' ') + '...';
     // }
}
ellipsizeTextBox('description');