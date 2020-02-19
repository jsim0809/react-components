
var GroceryListItem = (props) => {
  return <li>{props.groceryItems[0]}</li>;
}

var GroceryList = (props) => (
  <ul>
    <GroceryListItem groceryItems={props.groceryItems} />

  </ul>
);

ReactDOM.render(<GroceryList groceryItems={['Cucumber', 'Kale']} />, document.getElementById('app'));s