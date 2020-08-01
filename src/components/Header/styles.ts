import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 1rem 0;
`;

export const Wrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-height: 100%;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      font-size: 16px;
      font-weight: bold;
      color: #707070;

      & + li {
        margin-left: 1rem;
      }
    }
  }
`;
