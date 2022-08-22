import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #f0f2f9;
`;

export const Nome = styled.Text`
  margin-top: 15px;
  margin-bottom: 25px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

export const Logout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #ff5456;
  width: 90%;
  height: 45px;
  align-self: center;
`;

export const LogoutTexto = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
