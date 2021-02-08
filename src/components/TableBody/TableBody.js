import React from 'react';
import './TableBody.css';
import PropTypes from 'prop-types';

export const TableBody = ({ body, users }) => {

  const cellsValidation = (value, i, arr, usersArr) => {
    switch (i) {

      case 2:
        const duplicatePhoneIndx = usersArr
          .findIndex(ts => ts[2] === arr[2] && ts !== arr);

        if (value.length > 12 || duplicatePhoneIndx !== -1) {
          return 'error';
        };

        return;

      case 3:
        const duplicateEmailIndx = usersArr
          .findIndex(ts => ts[3] === arr[3] && ts !== arr);

        if (!value.includes('@') || duplicateEmailIndx !== -1) {
          return 'error';
        };

        return;

      case 4:
        if (+value === 0 || +value < 21 || isNaN(+value)) {
          return 'error';
        };

        return;

      case 5:
        if (+arr[i - 1] < +value) {
          return 'error';
        };

        return;

      case 6:
        if (+value > 1000000 || value === '') {
          return 'error';
        };

        return;

      case 9:
        if (value.includes('-')) {
          const format = value.split('-');

          return (format[0].length === 4) ? '' : 'error';
        } else if (value.includes('/')) {
          const format = value.split('/');

          return (format[0].length === 2) ? '' : 'error';
        } else {
          return 'error';
        }

      case 10:
        if (value.length !== 6) {
          return 'error';
        };

        return;

      default:
        return;
    }
  };

  return (
    <tbody className="employees__body">
      <tr>
        {body.map((item, i, arr) => {
          if (i === 7 && item === '') {
            item = 'FALSE';
          };

          if (i === 8 && item.split(', ').length === 1) {
            item = item.slice(0, 2).toUpperCase();
          }

          if (i === 8 && item.includes(', ')) {
            item = item.split(', ').join(' | ');
          };

          return (
            <td className={cellsValidation(item, i, arr, users)} key={i}>
              {item}
            </td>);
        })}
      </tr>
    </tbody>
  );
};

TableBody.propTypes = {
  body: PropTypes.array.isRequired,
  users: PropTypes.arrayOf(PropTypes.array).isRequired,
}