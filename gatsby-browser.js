import './src/styles/global.css';
import "prismjs/themes/prism-coy.css"


// export const onClientEntry = () => {
    // alert("fd")
    // document.getElementsByClassName("linear-progressbar-container")[0].style.visibility = 'hidden'
// };

export const onClientEntry = () => {
    window.onload = () => {
        console.log("loaded")
    };

    // const container = document.getElementsByClassName("linear-progressbar-container");
    // container[0].display = 'block';
};
export const onPreRouteUpdate = () => {
  console.log("routing")
};

export const onRouteUpdate = () => {
    console.log("dsf")
};


//
// export const onInitialClientRender = () => {
//   alert("ds")
// };