import PropTypes from 'prop-types';
import { TransTable, TableHeaderItem, TableBodyItem, TableHeader, TableHeaderItemWrap} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (<TransTable>
        <TableHeader>
            <TableHeaderItemWrap>
                <TableHeaderItem>Type</TableHeaderItem>
                <TableHeaderItem>Amount</TableHeaderItem>
                <TableHeaderItem>Currency</TableHeaderItem>
            </TableHeaderItemWrap>
        </TableHeader>

        <tbody>
            {items.map(({ id, type, amount, currency }) =>
                <tr key={id}>
                    <TableBodyItem>{type}</TableBodyItem>
                    <TableBodyItem>{amount}</TableBodyItem>
                    <TableBodyItem>{currency}</TableBodyItem>
                </tr>)}
        </tbody>
    </TransTable>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}