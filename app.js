
import React from "react";
import  ReactDOM  from "react-dom/client";


const heading = React.createElement('div',{
  className:'parent'
},[React.createElement('div',{
  className:"first_child"
},React.createElement('h1',{},"First_child")),React.createElement('div',{
  className:"second_child"
},React.createElement('h1',{},"Second Child"))]);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);