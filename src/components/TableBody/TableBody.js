import React from 'react';


export const TableBody = ({ body, users }) => {

  const cellsValidation = (value, i, arr, usersArr) => {
    switch (i) {
      case 1:
        return;

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

      case 7:
        if (value === '') {
          value = 'FALSE';
        };

        return;

      case 9:
        if (value.includes('-')) {
          const q = value.split('-');

          return (q[0].length === 4) ? '' : 'error';
        } else if (value.includes('/')) {
          const q = value.split('/');

          return (q[0].length === 2) ? '' : 'error';
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
          }

          return (
            <td className={cellsValidation(item, i, arr, users)} key={i}>
              {item}
            </td>);
        })}
      </tr>
    </tbody>
  );
};
