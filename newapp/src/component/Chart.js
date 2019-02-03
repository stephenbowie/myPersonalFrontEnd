import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../action/postAction'
import LineChart from 'react-linechart';

// the event handler needs to be refactored, so is the render components
class Chart extends Component {


    componentWillMount() {
        this.props.fetchPosts();
        this.returnVisa = this.returnVisa.bind(this);
        this.returnDB = this.returnDB.bind(this);
        this.returnAmerica = this.returnAmerica.bind(this);
    }

    returnVisa() {
        const visa = 'Visa';
        let visaCollection, returnVisa = [], visaCalc = 0, visaTotal = 0;

        visaCollection = this.props.posts.filter(trans => trans.PaymentMode === visa);
        returnVisa.push({
            x: 0, y: 0
        })
        visaCollection.forEach(visa => {
            visaTotal = visaTotal + parseInt(visa.Amount);
            visaCalc = visaCalc + 1

            returnVisa.push(
                {

                    x: parseInt(visaCalc),
                    y: parseInt(visaTotal)
                }
            );
        });

        return returnVisa;
    }

    returnDB() {
        const dbpay = 'DBS Pay La';
        let dbpayCollection, returndbpay = [], dbpayCalc = 0, dbpayTotal = 0;

        dbpayCollection = this.props.posts.filter(trans => trans.PaymentMode === dbpay);
        returndbpay.push({
            x: 0, y: 0
        })

        dbpayCollection.forEach(dbpay => {
            dbpayTotal = dbpayTotal + parseInt(dbpay.Amount);
            dbpayCalc = dbpayCalc + 1
            returndbpay.push(
                {
                    x: parseInt(dbpayCalc),
                    y: parseInt(dbpayTotal)
                }
            );
        });

        return returndbpay;
    }

    returnAmerica() {
        const Ampay = 'American Express';
        let AmpayCollection, returnAmpay = [], AmpayCalc = 0, AmpayTotal = 0;

        AmpayCollection = this.props.posts.filter(trans => trans.PaymentMode === Ampay);
        returnAmpay.push({
            x: 0, y: 0
        })

        AmpayCollection.forEach(Ampay => {
            AmpayTotal = AmpayTotal + parseInt(Ampay.Amount);
            AmpayCalc = AmpayCalc + 1
            returnAmpay.push(
                {
                    x: parseInt(AmpayCalc),
                    y: parseInt(AmpayTotal)
                }
            );
        });

        return returnAmpay;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        let total = [], dbtotal = [], amtotal = [];
        console.log(this.returnVisa());
        const visadata = [
            {
                color: "steelblue",
                points: this.returnVisa()
            }
        ];
        const dbdata = [
            {
                color: "red",
                points: this.returnDB()
            }
        ];
        const amdata = [
            {
                color: "green",
                points: this.returnAmerica()
            }
        ]
        ///
        total = visadata;
        dbtotal = dbdata;
        amtotal = amdata;

        return (
            <div>
                <div>
                    <div className="App">
                        <h1>visa</h1>
                        <LineChart
                            width={600}
                            height={400}
                            data={total}
                        />
                    </div>
                </div>
                <div>
                    <div className="App">
                        <h1>DB Pay La</h1>
                        <LineChart
                            borderColor='Red'
                            width={600}
                            height={400}
                            data={dbtotal}
                        />
                    </div>

                </div>
                <div>
                    <div className="App">
                        <h1>American Express</h1>
                        <LineChart
                            borderColor='green'
                            width={600}
                            height={400}
                            data={amtotal}
                        />
                    </div>

                </div>
            </div>


        )
    }
}

Chart.PropTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => (
    {
        posts: state.posts.items,
        newPost: state.posts.item
    }
);

export default connect(mapStateToProps, { fetchPosts })(Chart)



