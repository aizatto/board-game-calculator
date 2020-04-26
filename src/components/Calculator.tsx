import React, { useState, useEffect } from 'react';
import { InputNumber, Input, Select } from 'antd';
const { Option } = Select;

interface SavedNumberProps {
  name: string,
  number: number | undefined,
  row: number,
  onChange: (name: string, number: number) => void
}

export const SavedNumber: React.FC<SavedNumberProps> = (props) => {
  const [name, setName] = useState(props.name);
  const [number, setNumber] = useState(props.number);

  return (
    <div style={{marginBottom: '1rem'}}>
      <Input.Group compact>
        <Input
          style={{ width: '70%' }}
          defaultValue={name}
          placeholder={`Name ${props.row}`}
          onChange={(e) => {
            setName(e.target.value);
            if (!number) {
              return;
            }
            props.onChange(
              e.target.value,
              number,
            );
          }}
        />
        <InputNumber
          inputMode="decimal"
          style={{ width: '30%', textAlign: 'right' }}
          defaultValue={number}
          placeholder="0"
          onChange={(newNumber) => {
            if (!newNumber) {
              return;
            }
            setNumber(newNumber);
            props.onChange(
              name,
              newNumber,
            );
          }}
        />
      </Input.Group>
    </div>
  )
}

export const Calculator: React.FC = () => {
  const [rows] = useRows();
  const [rowsLength, setRowsLength] = useState(2);
  const [sum, setSum] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let newSum = 0;
    for (let i = 1; i <= rowsLength; i++) {
      let row = rows[i];
      newSum += row.number ?? 0;
    }
    setSum(newSum);
  }, [rows, rowsLength, counter]);

  const calculators = [];
  for (let i = 1; i <= rowsLength; i++) {
    const row = rows[i];
    calculators.push(
      <SavedNumber
        name={row.name}
        number={row.number}
        row={i}
        key={`calculator:${i}`}
        onChange={(name, number) => {
          rows[i].name = name;
          rows[i].number = number;
          setCounter(counter + 1);
        }}
      />
    );
  }

  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push(
      <Option value={i}>{i}</Option>
    );
  }

  return (
    <>
      <Select defaultValue={rowsLength} onChange={(e) => setRowsLength(e)}>
        {options}
      </Select>
      {calculators}
      <Input.Group compact style={{textAlign: 'right'}}>
        <div style={{display: 'inline-block', width: '70%'}}>
          Result:
        </div>
        <InputNumber
          style={{width: '30%'}}
          value={sum}
          readOnly
        />
      </Input.Group>
    </>
  )
}

function useRows() {
  return useState<{name: string, number: undefined | number}[]>([
    {
      name: '',
      number: undefined,
    },
    {
      name: '',
      number: undefined,
    },
    {
      name: '',
      number: undefined,
    },
    {
      name: '',
      number: undefined,
    },
    {
      name: '',
      number: undefined,
    },
    {
      name: '',
      number: undefined,
    },
    {
      name: '',
      number: undefined,
    },
    {
      name: '',
      number: undefined,
    },
    {
      name: '',
      number: undefined,
    },
    {
      name: '',
      number: undefined,
    },
    {
      name: '',
      number: undefined,
    },
  ]);
}
