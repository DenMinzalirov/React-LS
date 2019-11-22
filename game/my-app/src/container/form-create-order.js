import React, {Component, Fragment} from 'react';
import './form-create-order.css'; 

import {connect} from 'react-redux'
import {addOrder} from '../redux/actions/actions'

class FormCreateOrder extends Component {
    //  formRef = createRef(null);
    ;
    submitForm = e => {

        e.preventDefault();
        console.log({
            brend: this.refs.brend.value,
            model: this.refs.model.value,
            part: this.refs.part.value,
            description: this.refs.description.value,
        })
        const order ={
            brend: this.refs.brend.value,
            model: this.refs.model.value,
            part: this.refs.part.value,
            description: this.refs.description.value,
        }
        this.props.addOrder(order)
        // console.log(new FormData(e.target))
    }

    render () {
        console.log(this.props)
        return (
            <Fragment>
                <form onSubmit={this.submitForm}>
                    <label>
                        Бренд:
                        <input type="text" 
                            ref="brend"
                        />
                    </label>
                    <label>
                        Модель:
                        <input type="text" 
                            ref="model"
                        />
                    </label>
                    <label>
                        Parts:
                        <input type="text"
                            ref="part"
                        />
                    </label>
                    <label>
                        Описание:
                        <textarea  ref='description'/>
                    </label>
                    <input onClick={this.props.addNewOrder} type="submit" value="Отправить" />
                </form>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        brend: state.addNewOrder.brend,
        model: state.addNewOrder.model,
        part: state.addNewOrder.part,
        description: state.addNewOrder.description,
    }
}
  
function mapDispatchToProps(dispatch) {
   return {addOrder: (order) => dispatch(addOrder(order))}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateOrder);