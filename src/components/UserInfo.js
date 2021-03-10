import React, { Component } from 'react'

export class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    handleSignIn = () => {
        this.setState({ isLoggedIn: true })
    }
    handleSignOut = () => {
        this.setState({ isLoggedIn: false })
    }
    
    render() {
        return (
            <div className="col-3">
                {
                   this.state.isLoggedIn ? (
                        <div>
                            <p>welcome!</p>
                            <button className="btn-danger" onClick={this.handleSignOut}>
                                sign out
                            </button>
                        </div>
                    ) : (
                        <div>
                            <p>please sign in</p>
                            <button className="btn-success" onClick={this.handleSignIn}>
                                sign in
                            </button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default UserInfo
