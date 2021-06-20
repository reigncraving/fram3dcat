import React from 'react';
import styled from 'styled-components';
import { Card, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { WarningOutlined } from '@ant-design/icons'
import { colors } from '../../features/styles/colors';

const PleaseLogin = (message) => {
  return (
    <StyledCard>
      <StyledDiv>
        <StyledIcon />
        <StyledTypography>Please <b>login</b> to {message}</StyledTypography>
        <StyledButton type="primary">
          <Link to='/login'>Login</Link>
        </StyledButton>
      </StyledDiv>
    </StyledCard>
  );
}

export default PleaseLogin;

const StyledCard = styled(Card)`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled(WarningOutlined)`
  color: ${colors.red};
  font-size: 20pt;
`;

const StyledTypography = styled(Typography)`
  margin-top: 10px;
  color: gray;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;