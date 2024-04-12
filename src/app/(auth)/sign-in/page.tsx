"use client";
import Button from "@/components/core/common/DemoButton";
import { useSignInMutation } from "@/store/services/auth";
import { Checkbox, Input } from "antd";
import * as S from "./signIn.styles";
import { useRouter } from "next/navigation";
import { postRequest } from "@/services/request";
import { setCookie } from "cookies-next";

export default function SignIn() {
  const [signIn, { isLoading }] = useSignInMutation();
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      const data = {
        username: "ledinhdangkhoa10a9@gmail.com",
        password: "Admin123@",
        rememberMe: true,
      };
      // await signIn(data);
      const res: any = await postRequest(
        "https://fudeverwebapi.io.vn/api/Auth/sign-in",
        {
          data,
        }
      );
      console.log(res?.body?.accessToken);

      setCookie("next_token", res?.body?.accessToken);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.CenterContainer>
      <S.InputWrapper>
        <Input type="email" placeholder="Enter email" />
        <Input type="password" placeholder="Enter password" />
        <Checkbox>Remember me?</Checkbox>
        <Button
          $color="white"
          $backgroundColor="#00a8f7ce"
          onClick={() => handleSignIn()}
        >
          Sign In
        </Button>
      </S.InputWrapper>
    </S.CenterContainer>
  );
}
