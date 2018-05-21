// src/containers/Square.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'
import { connect } from 'react-redux'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired
  }
  render() {
    return(
      <div
        className={`Square fill-${this.props.value || 0}`}
      />
    )
  }
}

// At the bottom of the file, where you connect your component:
const mapStateToProps = ({ square }) => ({ square })


// Then pass it to connect:
export default connect(mapStateToProps)(Square)
