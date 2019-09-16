import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Home.css';
import { Chart } from "react-google-charts";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <span className="heading">Dashboard</span>
                <div className="row homeContainer">
                    <div className="col-sm-3">
                        <div className="containers containerOne">
                            <i className="fa fa-money">  My Wallet</i>
                            <p className="value">$50.25</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="containers containerTwo">
                            <i className="fa fa-book">  Books Read</i>
                            <p className="value">18</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="containers containerThree">
                            <i className="fa fa-bookmark">  Borrowed Books</i>
                            <p className="value">8</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="containers containerFour">
                            <i className="fa fa-leanpub">  Lended Books</i>
                            <p className="value">15</p>
                        </div>
                    </div>
                </div>
                <Chart
                    className="chart"
                    width={'100%'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Review','Books Read'],
                        ['Books Read', 18],
                        ['Lended Books', 15],
                        ['Borrowed Books', 8],
                    ]}
                    options={{
                        title: 'Review',
                        is3D: true,
                    }}
                />
            </div>
        );

    }
}

export default withRouter(Home);