import { useActionState } from "react";

// 서버 함수 (실제 DB 작업)
async function signUp(userDto) {
  try {
    // 실제로는 Supabase나 다른 DB 사용
    // await db.user.create(userDto);
    console.log("서버에 사용자 생성:", userDto);
    return { success: true, message: "회원가입 성공!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "서버 오류가 발생했습니다." };
  }
}

// 클라이언트 검증 + 서버 요청
async function clientValidation(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const desc = formData.get("desc");

  // 1단계: 클라이언트 검증
  if (!email || !password) {
    return { success: false, message: "이메일과 비밀번호를 입력해주세요." };
  }

  if (!email.includes("@")) {
    return { success: false, message: "유효한 이메일을 입력해주세요." };
  }

  if (password.length < 6) {
    return { success: false, message: "비밀번호는 6자 이상이어야 합니다." };
  }

  // 2단계: 검증 통과 시 서버 요청
  const userDto = { email, password, desc };
  const response = await signUp(userDto);

  return response;
}

const initialState = { success: false, message: "" };

export default function Form() {
  const [state, formAction] = useActionState(clientValidation, initialState);

  return (
    <form action={formAction}>
      <input type="email" name="email" placeholder="이메일 입력" required />
      <input
        type="password"
        name="password"
        placeholder="비밀번호 입력 (6자 이상)"
        required
      />
      <input type="text" name="desc" placeholder="자기소개 (선택사항)" />

      <button type="submit">Submit</button>
      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}

const useForm = () => {
  const initialState = { success: false, message: "" };

  const [state, formAction] = useActionState(clientValidation, initialState);
};
/**
 * // Convetion
 * useActionState(action, initialState, permalink?)
 *
 * action(fn): form 제출 or 버튼 clicked 되면 호출되는 함수
 *
 * initState : 초기값(직렬화 가능하면 무엇이든 상관 X )
 *
 * permalink(optional): 고유한 페이지 URL을 포함하는 문자열
 *
 *
 * 폼을 입력
 * 1
 * 2
 * 3
 * 4
 * 5
 * 오류를 알기위해선 일단 server에 요청을 보내야됨
 * 커스텀 훅을 만들어서
 * 사용하면 될꺼같기도하고
 * 거기다
 */
