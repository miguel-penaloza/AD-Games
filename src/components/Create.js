import React, {Component} from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Modal from './Modal';


const Form = styled.div`
    margin: 10px 5px 30px 5px;
    color: white;
`;

const Calendar = styled.input`
    margin: 15px;
`;

const Button = styled.button`
    margin-top: 10px;
`;

const Select = styled.select`
    margin-top: 5px;
`;

class Create extends Component {

    constructor(props){
        super(props);
        this.state ={
            description: '',
            name: '',
            type: 'SCORE',
            date: 1510324270,
            score: [{key:''}, { key: ''}]
        };
    }

    render() {
        const { onClose, index, onRefresh }= this.props;
        return (
            <Modal
                onClose={onClose}
                index={index}
            >
                <Form>
                        <h2>Create an Event</h2>
                        <div>Name: 
                            <input
                                type={'text'}
                                value={this.state.name}
                                onChange={(e) => this.setState({
                                    name: e.target.value
                                })}
                            />
                        </div>
                        <div>Description: 
                            <textarea
                                rows="4" 
                                cols="50"
                                type={'text'}
                                value={this.state.description}
                                onChange={(e) => this.setState({
                                    description: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <Select
                                onChange={(e)=> this.setState({type: e.target.value})}
                            >
                                <option value="VERSUS">Versus (Bet for the Winner)</option>
                                <option value="SCORE">Score (Bet for the Score)</option>
                            </Select>
                        </div>
                        <div>Event Date: 
                            <Calendar
                                type={'date'}
                                value={this.state.date}
                                onChange={(e) => this.setState({
                                    date: e.target.value
                                })}
                            />
                        </div>
                        <div>Option 1: 
                            <input
                                type={'text'}
                                value={this.state.score[0].key}
                                onChange={(e) => {
                                    const { score }= this.state; 
                                    score[0].key =  e.target.value;
                                    this.setState({score});
                                }}
                            />
                        </div>
                        <div>Option 2: 
                            <input
                                type={'text'}
                                value={this.state.score[1].key}
                                onChange={(e) => 
                                {
                                    const { score }= this.state; 
                                    score[1].key =  e.target.value;
                                    this.setState({score});
                                }}
                            />
                        </div>
                        <div>
                            <Button 
                                disabled={
                                    this.state.name === '' 
                                    || this.state.date === ''
                                    || this.state.score[0].key === ''
                                    || this.state.score[1].key === ''
                                }
                                onClick={()=>{
                                    this.state;
                                    const selfThis = this;
                                    Axios.post(
                                        'http://localhost:4000/events',
                                        this.state
                                    )
                                    .then(function (response) {
                                        onClose();
                                        onRefresh();
                                    })
                                    .catch(error => console.log(error));
                                }}
                            >
                                Save
                            </Button>
                            </div>
                    </Form>
            </Modal>
        );
    }
}

export default Create;
