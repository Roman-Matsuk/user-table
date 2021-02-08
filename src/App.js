import React, { useState } from 'react';
import './App.css';
import Papa from 'papaparse';
import { Table } from './components/Table/Table';

function App() {
  const [employeesData, setEmployeesData] = useState([]);
  const [isFileCorrect, setIsFileCorrect] = useState(true);

  const arrayChanger = (array) => {
    const isEmpty = array.some((item, i) => item[2] === '' || item[1] === '');

    if (isEmpty) {
      setIsFileCorrect(false);
      return;
    };

    const result = array.filter(item => item.length > 1).map((item, i) => {
      if (i === 0) {
        item.unshift('ID');
        item.push('Duplicate with');
        return item;
      }

      if (!item[1].includes('+1')) {
        const temp = item[1].split('');

        temp.unshift('+1');

        item[1] = temp.join('');
      }

      item.unshift(i);

      if (!Number.isInteger(+item[6])) {
        item[6] = Number(item[6]).toFixed(2);
      }

      return item;
    })

    for (let i = 1; i < result.length; i++) {
      const duplicateIndex = result
        .findIndex(ts => (ts[2] === result[i][2]
          && ts !== result[i])
          || (ts[3].toLowerCase() === result[i][3].toLowerCase()
          && ts !== result[i]));

      if (duplicateIndex > 0) {
        result[i].push(duplicateIndex);
      } else {
        result[i].push('');
      }
    }

    return result;
  }

  const parse = (file) => {
    if (file[0]) {
      Papa.parse(file[0], {
        complete: function(results) {
          const newResult = arrayChanger(results.data);

          setEmployeesData(newResult);
        }
      });
    } else {
      return;
    }
  }

  return (
    <div className="App">
      <label
        className="App__label"
        htmlFor="file-input-id"
      >
        Import users
      </label>
      <input
        className="App__input"
        type="file"
        id="file-input-id"
        accept=".csv"
        onChange={(event) => {
          if (!event.target.files[0].name.includes('.csv')) {
            setIsFileCorrect(false);
            return;
          }
          setEmployeesData([]);
          setIsFileCorrect(true);
          parse(event.target.files);
        }}
      />

      {isFileCorrect
        ? <Table employeesData={employeesData} />
        : <p className="App__error">
            File format is not correct
          </p>
      }
    </div>
  );
}

export default App;
