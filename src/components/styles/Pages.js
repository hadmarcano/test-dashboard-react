import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 1.5rem;
  position: relative;
  background-color: #f0f0f0;
  min-height: ${(props) => `calc(100vh - ${props.theme.layoutHeaderHeight})`};
`;

export default { Container, Inner };
