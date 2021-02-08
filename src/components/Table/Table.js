import React from 'react';
import { TableBody } from "../TableBody/TableBody";
import { TableHead } from "../TableHead/TableHead";
import PropTypes from 'prop-types';
import './Table.css';

export const Table = ({ employeesData }) => {

  return (
    <table className="employees">
      {employeesData.map((item, i, arr) => {
        if (i === 0) {
          return <TableHead header={item} key={i} />;
        }

        return <TableBody body={item} users={arr} key={i} />;
      })}
    </table>
  );
};

Table.propTypes = {
  employeesData: PropTypes.array.isRequired,
};
