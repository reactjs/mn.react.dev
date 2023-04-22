class HelloMessage extends React.Component {
  render() {
    return <div>Сайн уу {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);
