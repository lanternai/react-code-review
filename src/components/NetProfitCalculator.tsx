'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react';

const NPCalculator = () => {
  const [gP, setGP] = useState(null);
  const [exp, setExp] = useState(null);
  const [nP, setNP] = useState(null);

  useEffect(() => {
    setNP(gP - exp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gP]);

  const onGPChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setGP(Number(event.target.value));
  }, [setGP]);

  const onExpChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setExp(Number(event.target.value));
    setNP(gP - exp);
  }, [setExp, exp, gP]);

  return useMemo(() => (
    <div>
      <div>
        <label htmlFor="gPInput">Gross Profit: </label>
        <input
          id="gPInput"
          type="number"
          value={gP}
          onChange={onGPChange}
        />
      </div>
      <div>
        <label htmlFor="expensesInput">Expenses: </label>
        <input
          id="expensesInput"
          type="number"
          value={exp}
          onChange={onExpChange}
        />
      </div>
      <div>
        <strong>Net Profit:</strong> {nP}
      </div>
      <div>
        <button
          onClick={() => setNP(gP - exp)}
          style="color: red; font-size: 1.25rem"
        >
          Calculate
        </button>
      </div>
    </div>),
    [gP, exp, nP, onExpChange, onGPChange]
  );
};

export default NPCalculator;
