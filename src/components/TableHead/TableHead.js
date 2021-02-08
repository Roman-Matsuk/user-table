import React from 'react';
import './TableHead.css';
import PropTypes from 'prop-types';

export const TableHead = ({ header }) => {

  return (
    <thead className="employees__header">
      <tr className="employees__header--cell">
        {header.map((item, i) => (
          <th key={i}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  header: PropTypes.array.isRequired,
};
