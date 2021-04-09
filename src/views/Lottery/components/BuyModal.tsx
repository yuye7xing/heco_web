import React, { useCallback, useMemo, useState } from 'react';

import Button from '../../../components/Button';
import Modal, { ModalProps } from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';
import TicketInput from '../../../components/TicketInput';

import { BigNumber } from 'ethers';
import styled from 'styled-components';

interface BuyModalProps extends ModalProps {
  onConfirm: (val0: string, val1: string, val2: string, val3: string) => void;
  tokenName?: string;
}
const randNum = () => {
  return (Math.floor((Math.random() * 100000000)%14)+1).toString();
}

const BuyModal: React.FC<BuyModalProps> = ({ onConfirm, onDismiss, tokenName = '' }) => {
  const [val0, setVal0] = useState(randNum());
  const [val1, setVal1] = useState(randNum());
  const [val2, setVal2] = useState(randNum());
  const [val3, setVal3] = useState(randNum());
  console.log()

  const handleChange0 = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal0(e.currentTarget.value);
    },
    [setVal0],
  );

  const handleChange1 = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal1(e.currentTarget.value);
    },
    [setVal1],
  );

  const handleChange2 = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal2(e.currentTarget.value);
    },
    [setVal2],
  );

  const handleChange3 = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal3(e.currentTarget.value);
    },
    [setVal3],
  );

  return (
    <Modal>
      <ModalTitle text={`购买 ${tokenName} 船票`} />
      <InputArea>
      <TicketInput value={val0} onChange={handleChange0} />
      <TicketInput value={val1} onChange={handleChange1} />
      <TicketInput value={val2} onChange={handleChange2} />
      <TicketInput value={val3} onChange={handleChange3} />
      </InputArea>
      <ModalActions>
        <Button text="取消" variant="secondary" onClick={onDismiss} />
        <Button text="确认" onClick={() => onConfirm(val0, val1, val2, val3)} />
      </ModalActions>
    </Modal>
  );
};

const InputArea = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default BuyModal;
