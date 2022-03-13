import styled from "styled-components"
import { IconButton } from '@mui/material'
import { ButtonGroup, Button, TextField } from '@mui/material'

export const PageSecContainer = styled.div`
    width: -webkit-fill-available;
`;

export const PageSecTopWrapper = styled.div`
    padding: 15px;
    height: 25%;
`;

export const Header = styled.h3`
    font-family: 'Goudy Bookletter 1911';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 44px;
    text-align: center;
    color: black;
    text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);

`
export const Content = styled.div`
    width: 100%;
    height: 50%;
    display: inline-flex;
`;

export const Systolic = styled.div`
    width: 50%;
    text-align: center;
    border-right: 1px solid #CBCBCB;
`;

export const Title = styled.h3`
    margin: 0;
    font-weight: 400;
    font-size: 24px;
    color: #AEAEAE;
`;

export const UoM = styled.h5`
    font-weight: 400;
    color: #AEAEAE;
    margin: 0;
`;

export const Value = styled.h1`
    font-weight: 400;
    font-size: 60px;
    color: black;
    margin-top: 20px;
    margin-bottom: 0;
`;

export const Diastolic = styled.div`
    width: 50%;
    text-align: center;
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 500px;
    display: inline-flex;
`;

export const PageSecBottomWrapper = styled.div`
    padding: 10px;
    padding-bottom: 0;
    height: 70%;
    background: #efefef;
    border: 2px solid rgba(228, 228, 228, 0.87);
`;

export const ChangeValueWrapper = styled.div`
    height: 6%;
    padding: 10px 0;
`;

export const ChangeIntervalWrapper = styled.div`
    height: 6%;
`;

export const SwitchScaleWrapper = styled.div`
    height: 5%;
    text-align: center;
    padding: 10px 0;
`;

export const ChartContainer = styled.div`
    height: 75%;
    text-align: -webkit-center;
`;

export const ButtonWrapper = styled.div`
    width: 40px;
    margin-left: auto;
    text-align: center;
    display: inline-flex;
`;

export const ButtonIcon = styled(IconButton)`
background-color: ${({ minmax, interval }) => minmax || interval ? '#f9d5d59e' : 'transparent'} !important;
    :hover {
        background-color: #f9d5d59e !important;
    }
`;

export const GroupButton = styled(ButtonGroup)`

`;

export const LeftButton = styled(Button)`
   text-transform: capitalize !important;
   border-color: #c26161c4 !important;
   color: rgba(0, 0, 0, 0.54) !important;
   background-color: ${({ active }) => active ? '#ffcbcbcc' : 'white'} !important;
   width: 100px !important;
`;

export const RightButton = styled(Button)`
      text-transform: capitalize !important;
      border-color: #c26161c4 !important;
      color: rgba(0, 0, 0, 0.54) !important;
      background-color: ${({ active }) => active ? '#ffcbcbcc' : 'white'} !important;
      width: 100px !important;
`;

export const ChartWrapper = styled.div`
    padding-top: 50px;
    width: 90%;
`;

export const Inputs = styled.div`
    width: 150px;
    display: inline-block;
    text-align: right;
    padding-right: 7px;`;

export const RightWrapper = styled.div`
    width: 200px; 
    margin-left: auto;
    text-align: right;
`;

export const ValueBox = styled(TextField)`
    vertical-align: super !important;
`;