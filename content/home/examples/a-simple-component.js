class HelloMessage extends React.Component {
  render() {
<<<<<<< HEAD
    return <div>Сайн уу {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example'),
);
=======
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);
>>>>>>> 26caa649827e8f8cadd24dfc420ea802dcbee246
