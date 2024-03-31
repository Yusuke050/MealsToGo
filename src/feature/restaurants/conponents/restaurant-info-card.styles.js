import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RedtaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RedtaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-siza: ${(props) => props.theme.fontSizes.caption};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
