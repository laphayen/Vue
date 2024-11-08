<template>
    <div align="center">
      <h1>회원상세</h1>
      <form action="" method="post" id="memberform">
        <table border="1">
          <tr>
            <td>id</td>
            <td><input type="text" id="id" name="id" :value="m.id" readonly="readonly" /></td>
          </tr>
          <tr>
            <td>pw</td>
            <td><input type="text" id="pw" name="pw" v-model="m.pw" /></td>
          </tr>
          <tr>
            <td>name</td>
            <td><input type="text" id="name" name="name" v-model="m.name" /></td>
          </tr>
          <tr>
            <td>age</td>
            <td><input type="text" id="age" name="age" v-model="m.age" /></td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="button" value="수정" @click="updateMember" />
              <input type="button" value="삭제" @click="deleteMember" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "MemberDetail",
    data() {
      return {
        m: {
          id: "",   // 기본값을 빈 문자열로 설정합니다
          pw: "",
          name: "",
          age: ""
        }
      };
    },
    methods: {
      updateMember() {
        // 수정 기능 구현
        console.log("수정 기능 호출");
      },
      deleteMember() {
        // 삭제 기능 구현
        console.log("삭제 기능 호출");
      }
    },
    created() {
      // API 호출을 통해 서버로부터 멤버 데이터를 가져와서 `m`에 할당합니다
      this.fetchMemberData();
    },
    methods: {
      fetchMemberData() {
        // 여기서 실제 서버 API를 호출하고 `m`에 데이터를 저장하세요
        // 예시:
        this.m = {
          id: "sampleId",
          pw: "samplePassword",
          name: "Sample Name",
          age: "30"
        };
      },
      updateMember() {
        // 수정 기능 코드
      },
      deleteMember() {
        // 삭제 기능 코드
      }
    }
  };
  </script>
  
  <style scoped>
  /* 여기에 스타일 작성 */
  </style>
  