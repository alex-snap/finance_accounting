import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import * as actions from '../../app/actions';
import TransfersList from '../components/transfers-list/TransfersList';
import TransferEditForm from '../components/transfer-edit-form/TransferEditForm';
import NavBar from '../components/nav-bar/NavBar';
import { Error } from 'modules/error';

/**
 * @class Transfers
 * @extends React.Component
 */
class Transfers extends Component {

    /**
     * @public
     * @param {Object} transferData
     */
    @autobind
    createTransfer(transferData) {
        actions.createTransfer(this.props.dispatch, transferData);
    }

    /**
     * @inheritDoc
     * @param {Object} props - next props
     */
    componentWillReceiveProps(props) {
        if (props.isTransferCreateSuccess) {
            this.refs.transferEditForm.resetForm();
        }
    }

    /**
     * @inheritDoc
     */
    componentDidMount() {
        actions.loadTransfers(this.props.dispatch, this.props.location.query);
    }

    /**
     * @inheritDoc
     */
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <h1>Операции</h1>

                    <div className="row">
                        {this.renderTransfers()}
                    </div>

                    <div className="row">
                        <div className="alert alert-info text-center">
                            Итог по операциям: {this.props.account.amountTotal}
                        </div>}
                    </div>

                    <div className="row">
                        <TransferEditForm
                            onSubmit={this.createTransfer}
                            isTransferCreating={this.props.isTransferCreating}
                            ref="transferEditForm"
                        />
                    </div>

                    {this.renderCreateTransferError()}
                </div>
            </div>
        );
    }

    /**
     * @public
     */
    renderTransfers() {
        if (this.props.isTransfersLoading) {
            return (
                <p className="text-center">Загрузка операций...</p>
            );
        }

        if (this.props.transfersLoadError) {
            return (
                <Error error={this.props.transfersLoadError}>
                    Загрузка операций
                </Error>
            );
        }

        return (
            <TransfersList transfers={this.props.transfers} />
        );
    }

    /**
     * @public
     */
    renderTotalAmount() {
        if (this.props.isTransfersStatisticLoading) {
            return (
                <p className="text-center">Загрузка состояния счета...</p>
            );
        }
        if (this.props.transfersStatisticLoadError) {
            return (
                <Error error={this.props.transfersStatisticLoadError}>
                    Загрузка стастистики
                </Error>
            );
        }
        return (
            <div className="alert alert-info text-center">
                Итог по операциям: {this.props.transfersStatistic.currentAmount}
            </div>
        );
    }

    /**
     * @public
     */
    renderCreateTransferError() {
        if (!this.props.isTransferLoading && this.props.transferCreateError) {
            return (
                <Error error={this.props.transferCreateError}>
                    Создание операции
                </Error>
            );
        }
    }

}

Transfers.propTypes = {
    dispatch: PropTypes.func.isRequired,
    transfers: PropTypes.array,
    isTransfersLoading: PropTypes.bool.isRequired,
    transfersLoadError: PropTypes.object,

    isTransferCreating: PropTypes.bool.isRequired,
    transferCreateError: PropTypes.object,
    isTransferCreateSuccess: PropTypes.bool.isRequired
};

const mapStateToProps = function ({ transfers }) {
    return {
        transfers: transfers.transfers,
        isTransfersLoading: transfers.isTransfersLoading,
        transfersLoadError: transfers.transfersLoadError,

        isTransferCreating: transfers.isTransferCreating,
        transferCreateError: transfers.transferCreateError,
        isTransferCreateSuccess: transfers.isTransferCreateSuccess
    };
};

export default connect(mapStateToProps)(Transfers);