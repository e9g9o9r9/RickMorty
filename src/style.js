import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 15px;
    input:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #515151 !important;
    -webkit-text-fill-color: white;
    }
    
    .active {
    color: #FFD700 !important;
    }

    html{

      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
  }
  
    body
    {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
    }
  }
`;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { Global, AppWrapper };
