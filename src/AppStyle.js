import styled from 'styled-components'
export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #ebebd3;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  .MuiTypography-h5 {
    color: #083d77;
  }
  .wrapper-container {
    margin: 0 auto;
    width: 1200px;
    min-height: 1000px;
    background-color: #fff;
    /* text-align: center; */
    border-radius: 15px;

    form {
      padding: 10px;
      background: #eee;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      width: 500px;
      min-height: 200px;
      justify-content: center;
      text-align: left;
      border-radius: 10px;

      input,
      textarea,
      label {
        margin: 0 auto;
        width: 80%;
      }

      textarea {
        resize: none;
      }

      input {
        padding: 5px;
      }
      button {
        width: 100px;
        height: 30px;
        align-self: flex-end;
        margin-top: 10px;
        margin-right: 48px;
      }
    }

    .search {
      display: flex;
      flex-direction: column;

      width: 70%;
      margin: 0 auto;
      margin-top: 10px;
      border-radius: 15px;
      padding: 20px;
      label,
      input {
        text-align: left;
        width: 40%;
        border-radius: 10px;
        padding: 15px;
      }
    }

    .notes-container {
      border-radius: 15px;
      padding: 20px;

      display: flex;
      flex-direction: column;
      min-height: 100px;
      margin: 0 auto;
      margin-top: 10px;
    }
    .notes-container :nth-child(even) {
      align-self: flex-end;
      min-width: 375;
    }
    .notes-container :nth-child(odd) {
      align-self: flex-start;
      min-width: 375;
    }
  }
  h1 {
    color: #083d77;
    text-align: center;
  }
`
