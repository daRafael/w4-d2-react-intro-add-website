class IronhackButton extends React.Component {
  constructor(props) {
    super(props);
  }

  // Render an a tag to Ironhack's website
  render() {
    return React.createElement(
      "a",
      { href: "https://ironhack.com", target: "_blank"},
      "Click here to go to Ironhack's website!"
    );
  }
}
console.log(React.Component);
// Find all DOM containers with the class ironhack_button, and render Like buttons into them.
document.querySelectorAll(".ironhack_button").forEach((domContainer) => {
  console.log(domContainer);
  const root = ReactDOM.createRoot(domContainer);
  root.render(React.createElement(IronhackButton));
});