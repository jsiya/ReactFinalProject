import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0 0 20px 3px;

    >svg{
        color: white;
        width: 30px;
        height:30px;
        cursor:pointer;
    }
`;
