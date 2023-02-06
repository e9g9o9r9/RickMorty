import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const SelectsWrapper = styled.div`
  display: flex;

  @media (max-width: 1536px) {
    margin-top: 40px;
  }

  @media (max-width: 936px) {
    flex-direction: column;
  }
`;

export const CharactersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
