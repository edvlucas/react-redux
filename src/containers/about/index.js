import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const About = props => (
  <div>
    <h1>About</h1>
    <p>Count: {props.count}</p>
  </div>
)

const mapStateToProps = state => ({
    count: state.counter.count,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)