const actions = document.getElementById("select");
const output = document.getElementById("ats");
const render= drawing => {
  output.innerHTML = drawing;
};

const triangle = () => {
  let drawing = '';
  for (let i=0;i<10;i++){
    for (let j=0; j<i+1; j++){
      drawing+="*";
    };
    drawing+="<br />";
  };

  render(drawing);
};

const pyramid = () => {
  let drawing = '';
  for (let i=0;i<10;i++){
    for (let z=0; z<10-i;z++){
      drawing+="&nbsp;";
    };
    for (let j=0; j<2*i+1; j++){
      drawing+="*";
    };
    //tarpai tarp zvg
    // for (let j=0; j<i; j++){
    //   drawing+="* ";
    // };
    drawing+="<br />";
  };

  render(drawing);
};

const revPyramid = () => {
  let drawing = '';
  for (let i=10;i>=0;i--){
    for (let z=0; z<10-i;z++){
      drawing+="&nbsp;";
    };
    for (let j=0; j<2*i+1; j++){
      drawing+="*";
    };
    drawing+="<br />";
  };

  render(drawing);
};

actions.addEventListener("click", function( event ) {
  if (event.target.tagName==="BUTTON"){

  const action=event.target.name;

  switch (action) {
      case "triangle":
        triangle ();
      break;
      case "pyramid":
        pyramid ();
      break;
      case "revPyramid":
        revPyramid ()
      break;
      case "clear":
        render("");

      break;
      default:
        render("");
  }
};
}, false);

// let zvg='';
// const triangle = () => {
//   for (i=0; i<=6; i++){
//
//     for (j=0;j<i; j++){
//
//     zvg=zvg+("*");
// }
// console.log(zvg);
// output.innerHTML=output.innerHTML+zvg+ ("<br>");
// zvg="";
// }
// };

// let trp='';
// let psn='';
// const pyramid = () => {
//   for (i=0; i<5;i++){
//     trp="";
//     for (y=0; y<(5-i);y++){
//       trp+="&nbsp";
//     }
//     for (j=1; j<=2*i+1;j++){
//       psn+="*";
//     }
//     console.log(trp+psn);
//
//     output.innerHTML=output.innerHTML+trp+psn+("<br>");
//     psn="";
//   }
// };

// let k="";
// let m="";
// const revPyramid = () => {
//   for (i=5; i>0;i--){
//     k="";
//     for (y=5; y>i;y--){
//       k+="&nbsp";
//     }
//     for (j=0; j<(2*i-1);j++){
//       m+="*";
//     }
//
//     console.log(k+m);
//     output.innerHTML=output.innerHTML+k+m+("<br>");
//     m="";
//   }
// };
