import { Head } from "next/document";
import * as S from './styles';
import { Avatar } from "@mui/material";

export default function Header() {
    return (
      <S.Container>
          <Avatar src="./avatar.jpg"></Avatar>
          <S.Title>Home</S.Title>
      </S.Container>
    )
  }