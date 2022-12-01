import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

const Slider = () => {
    return (
        <div>
            <div>
                search
            </div>
            <Outlet></Outlet>
            <div>navigator</div>
        </div>
    )
}

@inject('homeStore')
@observer
export default class Home extends Component {
  render() {
    console.log(this.props);
    return (
        <div>
            <div>
                search
                <div>{this.props.homeStore.title}</div>
            </div>
            <Outlet></Outlet>
            <div>navigator</div>
        </div>
    )
  }
}