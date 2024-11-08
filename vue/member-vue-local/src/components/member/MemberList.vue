<template>
    <div align="center">
      <h1>회원조회</h1>
      <table border="1">
        <tr>
          <td>id</td>
          <td>pw</td>
          <td>name</td>
          <td>age</td>
          <td></td>
        </tr>
        
        <tr v-for="m in list" :key="m.id">
          <td><a :href="`${root}/member/memberdetail?id=${m.id}`">{{ m.id }}</a></td>
          <td>{{ m.pw }}</td>
          <td>{{ m.name }}</td>
          <td>{{ m.age }}</td>
          <td><input type="checkbox" name="dels" :value="m.id"></td>
        </tr>
        
        <tr>
          <td colspan="5">
            <input type="button" value="선택삭제" @click="dels">
          </td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        root: "http://localhost:8080",  // 서버의 기본 경로
        list: [] // 회원 데이터 리스트
      };
    },
    created() {
      this.fetchMembers();
    },
    methods: {
      fetchMembers() {
        // 서버에서 회원 데이터를 가져오는 API 호출 (예제 데이터로 대체)
        this.list = [
          { id: "user1", pw: "password1", name: "User One", age: 25 },
          { id: "user2", pw: "password2", name: "User Two", age: 30 },
          { id: "user3", pw: "password3", name: "User Three", age: 28 }
        ];
      },
      dels() {
        // 선택한 회원 삭제 기능 구현
        console.log("선택한 회원 삭제");
      }
    }
  };
  </script>
  
  <style scoped>
  /* 여기에 스타일 작성 */
  </style>
  