import styled from 'styled-components';

interface ContainerProps {
  sidebar: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: white;
  position: fixed;
  height: 100%;
  top: 11%;
  right: 0px;
  width: 500px;
  right: ${(props) => (props.sidebar ? '0' : '-100%')};
  animation: showSidebar 0.4s;


  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 500px;
    }
  }
  
`;

export const Content = styled.div`
  margin-top: 100px;
`;
