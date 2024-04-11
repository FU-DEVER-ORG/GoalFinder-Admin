"use client";
import Button from "@/components/common/DemoButton";
import { useSignInMutation } from "@/store/services/auth";
import { Checkbox, Input } from "antd";
import * as S from "./signIn.styles";

export default function SignIn() {
  //demo rtk query
  const [signIn, { isLoading }] = useSignInMutation();
  const handleSignIn = async () => {
    try {
      const data = {
        username: "ledinhdangkhoa10a9@gmail.com",
        password: "Admin123@",
        rememberMe: true
      }
      await signIn(data);
    } catch (error) {
      
    }
  }
  return (
    <S.CenterContainer>
        <S.InputWrapper>
            <Input type="email" placeholder="Enter email"/>
            <Input type="password" placeholder="Enter password"/>
            <Checkbox>Remember me?</Checkbox>
            <Button $color="white" $backgroundColor="#00a8f7ce"
              onClick={() => handleSignIn()}
            >Sign In</Button>
        </S.InputWrapper>
    </S.CenterContainer>
  );
}
