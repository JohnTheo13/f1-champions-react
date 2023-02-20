import styled from "styled-components";

export const MoadalStyles = styled.div`
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: #ffffffd6;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;              
  .modal {
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid grey;
      padding: 0 20px;
      > button {
        height: 28px;
        width: 28px;
      }
    }
  }
`;

export const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#ffffffd6',
    maxWidth: '650px',
    height: '80%',
    padding: '0',
    border: 'none',
    margin: '20px auto',
  },
};
