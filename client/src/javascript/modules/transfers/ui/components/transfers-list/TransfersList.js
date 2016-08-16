import React, { PropTypes, Component } from 'react';

import transferTypeEnum from '../../../domain/transferTypeEnum';

import './transfers-list.sass';

function TransfersList(props, context) {

    const hasTransfers = props.transfers.length;

    /**
     * @private
     * @param {transferTypeEnum} type
     * @returns {string}
     */
    const getRowClassName = (type) => {
        switch (type) {
            case transferTypeEnum.Add:
                return 'success';
                break;
            case transferTypeEnum.Cost:
                return 'danger';
                break;
            default:
                return '';
                break;
        }
    };

    /**
     * @private
     * @param {transferTypeEnum} type
     * @returns {string}
     */
    const resolveTransferTypeTitle = (type) => {
        switch (type) {
            case transferTypeEnum.Add:
                return 'Приход';
                break;
            case transferTypeEnum.Cost:
                return 'Расход';
                break;
            default:
                return 'Неизвестный тип операции';
                break;
        }
    };

    /**
     * @private
     */
    const renderTransfers = () => {
        if (hasTransfers) {
            return props.transfers.map((transfer, index) => {
                return (
                    <tr key={transfer._id} className={getRowClassName(transfer.type)}>
                        <th scope="row">{++index}</th>
                        <td>{resolveTransferTypeTitle(transfer.type)}</td>
                        <td>{transfer.description}</td>
                        <td>{transfer.contractor}</td>
                        <td>{transfer.amount}</td>
                        <td>{transfer.createdAt}</td>
                    </tr>
                );
            });
        }
    };

    /**
     * @private
     */
    const renderTransfersBlank = () => {
        return(
            <tr className="text-center">
                <td colSpan="6">
                    Операций нет
                </td>
            </tr>
        );
    };

    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>#</th>
                <th>Тип операции</th>
                <th>Описание</th>
                <th>Контрагент</th>
                <th>Сумма</th>
                <th>Дата и время</th>
            </tr>
            </thead>
            <tbody>

            {
                hasTransfers
                ? renderTransfers()
                : renderTransfersBlank()
            }

            </tbody>
        </table>
    );
}

TransfersList.propTypes = {
    transfers: PropTypes.array.isRequired
};

export default TransfersList;