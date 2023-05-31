/*
  <div class="parent">
    <div class="first_child">
      <h1>First Child</h1>
    </div>
    <div class="second_child">
      <h1>Second Child</h1>
    </div>
  </div>
*/



const heading = React.createElement('div',{
  class:'parent'
},[React.createElement('div',{
  class:"first_child"
},React.createElement('h1',{},"First_child")),React.createElement('div',{
  class:'second_child'
},React.createElement('h1',{},"Second Child"))]);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);