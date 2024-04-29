class LikedButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return React.createElement(
        "button",
        { onClick: () => this.setState({ liked: !this.state.liked }) },
        "You liked comment number " +
          this.props.commentID +
          ". Do you want to unlike it?"
      );
    }

    return React.createElement(
      "button",
      { onClick: () => this.setState({ liked: !this.state.liked }) },
      "Like"
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll(".like_button_container").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  const commentID = parseInt(domContainer.dataset.commentid, 10);
  const root = ReactDOM.createRoot(domContainer);
  root.render(React.createElement(LikedButton, { commentID: commentID }));
});
