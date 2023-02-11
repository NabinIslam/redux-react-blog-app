import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLatest, toggleOldest } from '../redux/actions/filterActions';

const Filter = () => {
  const filters = useSelector(state => state.filter.filters);

  const { latest, oldest } = filters;

  const activeClass =
    'font-semibold bg-blue-700 border-2 border-blue-700 px-3 py-1 rounded-full text-white';

  const dispatch = useDispatch();

  return (
    <div>
      <div className="container mx-auto flex items-center justify-between border my-5 rounded-lg p-4 shadow">
        <div>
          <h5 className="font-bold text-xl">Filter</h5>
        </div>
        <div className="flex items-center gap-1">
          <button
            className={`font-semibold border-2 px-3 py-1 rounded-full ${
              latest ? activeClass : null
            }`}
            onClick={() => dispatch(toggleLatest())}
          >
            Latest
          </button>
          <button
            className={`font-semibold border-2 px-3 py-1 rounded-full ${
              oldest ? activeClass : null
            }`}
            onClick={() => dispatch(toggleOldest())}
          >
            Oldest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
