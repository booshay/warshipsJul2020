import React, { Component } from 'react'
import { addCoords } from '../../store/actions/coordActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AddCoords extends Component {
    state = {
        coordType: 'bases',
        base: '',
        sector: '',
        x: '',
        y: '',
        lvl: '',
        type: '',
        enhanced: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCoords(this.state);
        e.target.reset();
    }
    handleClick = value => () => {
        this.setState({
            coordType: value,
            lvl: ''
        })
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to={'/signIn'} />
        let typeStyle = {};
        this.state.coordType === 'bases' ? typeStyle = {
            bases: { backgroundColor: 'green', color: 'white', fontSize: '1.2em' },
            mines: { color: 'grey', fontSize: '.8em' }
        } : typeStyle = {
            mines: { backgroundColor: 'green', color: 'white', fontSize: '1.2em' },
            bases: { color: 'grey', fontSize: '.8em' }
        }
        let Form = '';

        this.state.coordType === 'bases' ? Form = (
            <form id="basesForm" onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Add New Base</h5>
                <div className="input-field">
                    <label htmlFor="base">Base Name</label>
                    <input type="text" id="base" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="sector">Map Sector</label>
                    <input type="text" id="sector" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="x">X</label>
                    <input type="text" id="x" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="y">Y</label>
                    <input type="text" id="y" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1">Submit</button>
                </div>
            </form>
        ) :
            Form = (
                <form id="minesForm" onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add New Mine</h5>
                    <div className="input-field">
                        <label htmlFor="x">X</label>
                        <input type="text" id="x" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="y">Y</label>
                        <input type="text" id="y" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lvl">Tile Level</label>
                        <input type="text" id="lvl" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="type">Tile Type</label>
                        <input type="text" id="type" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="enhanced">Enhanced</label>
                        <input type="text" id="enhanced" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Submit</button>
                    </div>
                </form>
            )

        return (
            <div className="container">
                <div className="">
                    <button style={typeStyle.bases} className="typeSelectBtn btn btn-flat btn-medium" onClick={this.handleClick('bases')}>Bases</button>
                    <button style={typeStyle.mines} className="typeSelectBtn btn btn-flat btn-medium" onClick={this.handleClick('mines')}>Mines</button>
                </div>
                {Form}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // coords: state.coord,
        auth: state.firebase.auth
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        addCoords: (coords) => dispatch(addCoords(coords))
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(AddCoords)



// style={{ visibility: 'hidden' }}  need to have only one form show