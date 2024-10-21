import React from 'react';
import styled from 'styled-components';


const BasicButton = styled.button`
  margin-left: 8px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  
.login-btn {
    background-color: #333;
    color: white;
}

.register-btn {
    background-color: #FFD700;
    border: solid 1px #333;
    color: #333;
}

}
`;

const Button =  ({ className, children }) => {

  return (
  <BasicButton className={className}>{children}</BasicButton>
  );
};

export default Button;
