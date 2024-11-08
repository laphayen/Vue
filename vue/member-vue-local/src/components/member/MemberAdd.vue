<template>
    <div align="center">
      <h1>회원입력</h1>
      <form @submit.prevent="submitForm">
        <table border="1">
          <tr>
            <td>id</td>
            <td><input type="text" v-model="member.id" required /></td>
          </tr>
          <tr>
            <td>pw</td>
            <td><input type="password" v-model="member.pw" required /></td>
          </tr>
          <tr>
            <td>name</td>
            <td><input type="text" v-model="member.name" required /></td>
          </tr>
          <tr>
            <td>age</td>
            <td><input type="number" v-model="member.age" required /></td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="submit" value="입력" />
              <input type="reset" value="취소" @click="resetForm" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        root: "http://localhost:8080",  // 백엔드 서버의 기본 URL
        member: {
          id: "",
          pw: "",
          name: "",
          age: ""
        }
      };
    },
    methods: {
      submitForm() {
        // 폼 데이터를 서버로 전송하는 메서드
        fetch(`${this.root}/member/memberinsert`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.member)
        })
          .then(response => response.json())
          .then(data => {
            alert("회원이 성공적으로 추가되었습니다.");
            this.resetForm();
          })
          .catch(error => {
            console.error("Error:", error);
            alert("회원 추가에 실패했습니다.");
          });
      },
      resetForm() {
        // 폼 리셋 메서드
        this.member = {
          id: "",
          pw: "",
          name: "",
          age: ""
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* 여기에 스타일 작성 */
  </style>
  