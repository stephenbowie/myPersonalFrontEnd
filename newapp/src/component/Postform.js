import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPosts } from '../action/postAction';
import { mockData } from '../MockData'

//event handler needs to be refactored

class Postform extends Component {
    constructor(props) {
        super();
        this.transfer = this.transfer.bind(this);
        this.UserA = this.UserA.bind(this);
        this.UserB = this.UserB.bind(this);
        this.UserC = this.UserC.bind(this);
        this.AmountChange = this.AmountChange.bind(this);
        this.handleChangeVisa = this.handleChangeVisa.bind(this);
        this.handleChangeDB = this.handleChangeDB.bind(this);
        this.handleChangeAM = this.handleChangeAM.bind(this);
        this.state = {
            title: '',
            body: ''
        }
    }

    handleChangeVisa() {
        this.setState(
            {
                PaymentMode: 'Visa'
            }
        )
    }
    handleChangeDB() {
        this.setState(
            {
                PaymentMode: 'DB Pay La'
            }
        )
    }
    handleChangeAM() {
        this.setState(
            {
                PaymentMode: 'American Express'
            }
        )
    }

    UserA() {
        this.setState(
            {
                UserName: 'User-A'
            }
        )
    }
    UserB() {
        this.setState(
            {
                UserName: 'User-B'
            }
        )
    }
    UserC() {
        this.setState(
            {
                UserName: 'User-C'
            }
        )
    }

    AmountChange() {
        this.setState(
            {
                Amount: '500'
            }
        )
    }

    transfer() {

        const post = {
            TransactionID: parseInt(mockData[mockData.length - 1].TransactionID) + 10,
            UserName: this.state.UserName,
            PaymentMode: this.state.PaymentMode,
            Amount: this.state.Amount
        }
        console.log(this.state);
        //
        //callaction
        this.props.createPosts(post);
    }
    render() {
        console.log(mockData);
        console.log(this.state);
        return (
            <div>
                <h1>Add Post</h1>
                <div>
                    <br />  <button onClick={this.UserA}>User-A</button>
                    <br />  <button onClick={this.UserB}>User-B</button>
                    <br />  <button onClick={this.UserC}>User-C</button> <br />


                    <label>PaymentMode: </label><br />
                    <textarea name="PaymentMode" value={this.state.PaymentMode} onChange={this.onChange} />
                    <br />
                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="Visa"
                                    checked={this.state.size === "small"}
                                    onChange={this.handleChangeVisa}
                                />
                                Visa
          </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="DB Pay La"
                                    checked={this.state.size === "medium"}
                                    onChange={this.handleChangeDB}
                                />
                                DB Pay La
          </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="American Express"
                                    checked={this.state.size === "large"}
                                    onChange={this.handleChangeAM}
                                />
                                American Express
          </label>
                        </li>
                    </ul>


                    <br /><label>Amount: </label><br />
                    <br />  <button onClick={this.AmountChange}>500</button> <br /> <br />
                    <button onClick={this.transfer}>transfer</button>
                </div>

            </div>
        )
    }
}


export default connect(null, { createPosts })(Postform);
