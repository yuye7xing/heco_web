import React, { useCallback, useState } from 'react';

import Button from '../../../components/Button';
import Modal, { ModalProps } from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';
import TicketInput from '../../../components/TicketInput';
import Label from '../../../components/Label';

import styled from 'styled-components';

interface BuyModalProps extends ModalProps {
  onConfirm: (val0: string, val1: string, val2: string, val3: string, num: string) => void;
  tokenName?: string;
}
const randNum = () => {
  return (Math.floor((Math.random() * 100000000) % 14) + 1).toString();
};

const BuyModal: React.FC<BuyModalProps> = ({ onConfirm, onDismiss, tokenName = '' }) => {
  const [val0, setVal0] = useState(randNum());
  const [val1, setVal1] = useState(randNum());
  const [val2, setVal2] = useState(randNum());
  const [val3, setVal3] = useState(randNum());
  const [num, setNum] = useState('1');

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
  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setNum(e.currentTarget.value);
    },
    [setNum],
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
      <LabelRow>
        <Label
          color={'#fff'}
          text={`每张船票价值 1${tokenName},在1~14之内选择4个数字作为幸运号码!`}
        />
      </LabelRow>
      <LabelRow>
        <StyledTicketInput>
          <Label color={'#fff'} text={`购买`} />
          <StyledInputWrapper>
            <StyledInput placeholder={'1'} value={num.toString()} onChange={handleChange} />
          </StyledInputWrapper>
          <Label color={'#fff'} text={`张船票`} />
        </StyledTicketInput>
      </LabelRow>
      <ModalActions>
        <Button text="取消" variant="secondary" onClick={onDismiss} />
        <Button text="确认" onClick={() => onConfirm(val0, val1, val2, val3, num)} />
      </ModalActions>
    </Modal>
  );
};

const StyledInputWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0px 10px;
`;
const StyledInput = styled.input`
  background-color: ${(props) => props.theme.color.grey[200]};
  border-radius: 8px;
  padding: 0 ${(props) => props.theme.spacing[3]}px;
  border: 0;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 20px;
  flex: 1;
  height: 30px;
  margin: 0;
  padding: 0;
  outline: none;
  width: 90px;
  text-align: center;
`;

const StyledTicketInput = styled.div`
  width: 100%;
  height: 60px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LabelRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  margin-bottom: -20px;
`;
const InputArea = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default BuyModal;
