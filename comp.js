
const withMountHOC = WrappedComponent => {
  return class extends Component {
    componentDidMount() {
      console.log('mounted');
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withMountHOC;