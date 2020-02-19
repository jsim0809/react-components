
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    this.setState({
      hover: true
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return <li style={style} onMouseOver={this.onHover}>{this.props.groceryItem}</li>;
  }
}

var GroceryList = (props) => (
  <ul>
    <GroceryListItem groceryItem={props.groceryItems[0]} />
    <GroceryListItem groceryItem={props.groceryItems[1]} />
  </ul>
);

ReactDOM.render(<GroceryList groceryItems={['Cucumbre', 'Kalle']} />, document.getElementById('app'));