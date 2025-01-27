'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react';

const NetProfitCalculator = () => {
  const [grossProfit, setGrossProfit] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [netProfit, setNetProfit] = useState<number>(0);

  useEffect(() => {
    setNetProfit(grossProfit - expenses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grossProfit]);

  const onGrossProfitChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setGrossProfit(Number(event.target.value));
  }, [setGrossProfit]);

  const onExpensesChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setExpenses(Number(event.target.value));
  }, [setExpenses]);

  return useMemo(() => (
    <div>
      <div>
        <label htmlFor="grossProfitInput">Gross Profit: </label>
        <input
          id="grossProfitInput"
          type="number"
          value={grossProfit}
          onChange={onGrossProfitChange}
        />
      </div>
      <div>
        <label htmlFor="expensesInput">Expenses: </label>
        <input
          id="expensesInput"
          type="number"
          value={expenses}
          onChange={onExpensesChange}
        />
      </div>
      <div>
        <strong>Net Profit:</strong> {netProfit}
      </div>
      <div>
        <button
          onClick={() => setNetProfit(grossProfit - expenses)}
          style="color: red; font-size: 1.25rem"
        >
          Calculate
        </button>
      </div>
    </div>),
    [grossProfit, expenses, netProfit, onExpensesChange, onGrossProfitChange]
  );
};

export default NetProfitCalculator;
