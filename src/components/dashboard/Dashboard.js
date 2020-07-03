
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MinesSummary from '../coords/MinesSummary';
import BasesSummary from '../coords/BasesSummary';
import Notifications from './Notifications';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {

    state = {
        type: 'mines'
    }

    handleClick = value => () => {
        this.setState({
            type: value
        })
    }

    render() {
        const { coords, auth } = this.props;
        if (!auth.uid) return <Redirect to={'/signIn'} />
        const TypeOfMines = this.state.type === 'mines' ? <MinesSummary auth={auth} coords={coords} /> : <BasesSummary coords={coords} />;
        let typeStyle = {};
        this.state.type === 'bases' ? typeStyle = {
            bases: { backgroundColor: 'green', color: 'white', fontSize: '1.2em' },
            mines: { color: 'grey', fontSize: '.8em' }
        } : typeStyle = {
            mines: { backgroundColor: 'green', color: 'white', fontSize: '1.2em' },
            bases: { color: 'grey', fontSize: '.8em' }
        }
        return (
            <div className="container center-align">
                <p className="title">Select type:</p>
                <div className="">
                    <button style={typeStyle.bases} className="typeSelectBtn btn btn-flat btn-medium" onClick={this.handleClick('bases')}>Bases</button>
                    <button style={typeStyle.mines} className="typeSelectBtn btn btn-flat btn-medium" onClick={this.handleClick('mines')}>Mines</button>
                </div>
                <div className="row">
                    <div className="col s12 m8"></div>
                    <div className="col s11 m3 offset-s1 right">
                        <Notifications />
                    </div>
                </div>
                {TypeOfMines}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        coords: state.firestore.ordered.team,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'team',
            doc: "CHSFG8Y7UrcWAbtL1HaUqjxYRyf1",
            subcollections: [
                { collection: 'mine' }
            ]
        },
        {
            collection: 'team',
            doc: "CHSFG8Y7UrcWAbtL1HaUqjxYRyf1",
            subcollections: [
                { collection: 'rss' }
            ]
        }
    ])
)(Dashboard);

/*
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'team',
            doc: "CHSFG8Y7UrcWAbtL1HaUqjxYRyf1",
            subcollections: [
                { collection: 'rss' }
            ]
        },
        {
            collection: 'team',
            doc: "CHSFG8Y7UrcWAbtL1HaUqjxYRyf1",
            subcollections: [
                { collection: 'mine' }
            ]
        }
    ])
)(Dashboard);
*/







/*

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MinesSummary from '../coords/MinesSummary';
import BasesSummary from '../coords/BasesSummary';
import Notifications from './Notifications';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {

    state = {
        type: 'bases'
    }

    handleClick = value => () => {
        this.setState({
            type: value
        })
    }
    render() {
        const TypeOfMines = this.state.type === 'mines' ? <MinesSummary coords={this.props.coords.mines} /> : <BasesSummary coords={this.props.coords.bases} />;
        let typeStyle = {};
        this.state.type === 'bases' ? typeStyle = {
            bases: { backgroundColor: 'green', color: 'white', fontSize: '1.2em' },
            mines: { color: 'grey', fontSize: '.8em' }
        } : typeStyle = {
            mines: { backgroundColor: 'green', color: 'white', fontSize: '1.2em' },
            bases: { color: 'grey', fontSize: '.8em' }
        }
        return (
            <div className="container center-align">
                <p className="title">Select type:</p>
                <div className="">
                    <button style={typeStyle.bases} className="typeSelectBtn btn btn-flat btn-medium" onClick={this.handleClick('bases')}>Bases</button>
                    <button style={typeStyle.mines} className="typeSelectBtn btn btn-flat btn-medium" onClick={this.handleClick('mines')}>Mines</button>
                </div>
                <div className="row">
                    <div className="col s12 m8">{TypeOfMines}</div>
                    <div className="col s11 m3 offset-s1 right"><Notifications /></div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.firestore)
    return {
        coords: state.coord
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'team',
            doc: "CHSFG8Y7UrcWAbtL1HaUqjxYRyf1",
            subcollections: [
                { collection: 'rss' }
            ]
        }
    ])
)(Dashboard);

/*
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'team',
            doc: "CHSFG8Y7UrcWAbtL1HaUqjxYRyf1",
            subcollections: [
                { collection: 'rss' }
            ]
        },
        {
            collection: 'team',
            doc: "CHSFG8Y7UrcWAbtL1HaUqjxYRyf1",
            subcollections: [
                { collection: 'mine' }
            ]
        }
    ])
)(Dashboard);
*/

