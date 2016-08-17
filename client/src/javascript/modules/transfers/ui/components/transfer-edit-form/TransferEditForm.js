import React, { PropTypes, Component } from 'react';
import { autobind } from 'core-decorators';

import transferTypeEnum from '../../../domain/transferTypeEnum';
import './transfer-edit-form.sass';


/**
 * @class
 * @extends React.Component
 */
class TransferEditForm extends Component {

    /**
     * @public
     * @param {Event} event
     */
    @autobind
    onSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            const formData = this.extractFormData(this.refs);
            this.props.onSubmit(formData);
        } else {
            this.showErrors();
        }
    }

    /**
     * @private
     * @param {Object} refs
     * @returns {Object}
     */
    extractFormData(refs) {
        return {
            type: refs.type.value,
            description: refs.description.value,
            contractor: refs.contractor.value,
            amount: refs.amount.value
        };
    }

    /**
     * todo validation
     * @private
     * @returns {boolean}
     */
    isValid() {
        return true
    }

    /**
     * todo show errors
     * @private
     */
    showErrors() {

    }

    /**
     * @public
     */
    @autobind
    resetForm() {
        this.refs.type.value = undefined;
        this.refs.description.value = undefined;
        this.refs.contractor.value = undefined;
        this.refs.amount.value = undefined;
    }

    /**
     * @inheritDoc
     */
    render() {
        const transferTypeOptions = [
            { key: 0, value: undefined, label: 'Тип операции' },
            { key: 1, value: transferTypeEnum.Add, label: 'Приход' },
            { key: 2, value: transferTypeEnum.Cost, label: 'Расход' }
        ];

        return (
            <form onSubmit={this.onSubmit} className="row">
                <div className="col-md-2">
                    <div className="form-group">
                        <label htmlFor="operationType" className="sr-only">Тип операции</label>
                        <select
                            id="operationType"
                            className="form-control"
                            ref="type">
                            {transferTypeOptions.map((option) => {
                                return (
                                    <option key={option.key} value={option.value}>{option.label}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="description" className="sr-only">Описание</label>
                    <textarea
                        id="description"
                        className="form-control"
                        placeholder="Описание"
                        rows="1"
                        ref="description"></textarea>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="contractor" className="sr-only">Контрагент</label>
                        <input
                            id="contractor"
                            type="text"
                            placeholder="Контрагент"
                            className="form-control"
                            ref="contractor"/>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label htmlFor="amount" className="sr-only">Сумма</label>
                        <input
                            id="amount"
                            type="number"
                            placeholder="Сумма"
                            className="form-control"
                            ref="amount"/>
                    </div>
                </div>
                <div className="col-md-2">
                    <button
                        type="submit"
                        disabled={this.props.isTransferCreating}
                        className="btn btn-success">
                        Сохранить
                    </button>
                </div>
            </form>
        );
    }
}

TransferEditForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isTransferCreating: PropTypes.bool.isRequired
};

export default TransferEditForm;