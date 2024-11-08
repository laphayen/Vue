<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12">
          <h2 class="my-3 py-3 shadow-sm bg-light text-center">
            <mark class="sky">글보기</mark>
          </h2>
        </div>
        <div class="col-lg-8 col-md-10 col-sm-12">
          <div class="row my-2">
            <h2 class="text-secondary px-5">{{ article.articleNo }}. {{ article.subject }}</h2>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="clearfix align-content-center">
                <img
                  class="avatar me-2 float-md-start bg-light p-2"
                  src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
                />
                <p>
                  <span class="fw-bold">{{ article.userId }}</span> <br />
                  <span class="text-secondary fw-light"> {{ article.registerTime }} 조회: {{ article.hit }} </span>
                </p>
              </div>
            </div>
            <div class="divider mb-3"></div>
            <div class="text-secondary">
              {{ article.content }}
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-outline-primary mb-3" @click="goBack">글목록</button>
              <button v-if="canEdit" type="button" class="btn btn-outline-success mb-3 ms-1" @click="editArticle">글수정</button>
              <button v-if="canEdit" type="button" class="btn btn-outline-danger mb-3 ms-1" @click="deleteArticle">글삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: "BoardDetail",
    props: ["articleNo"],
    setup(props) {
      const route = useRoute();
      const router = useRouter();
      const article = ref({});
      const canEdit = ref(false); // 유저가 해당 글을 수정/삭제할 권한이 있는지 확인
  
      const fetchArticle = () => {
        // 서버에서 articleNo를 이용해 해당 글의 상세 정보를 가져옵니다.
        // 예시 데이터 사용
        article.value = {
          articleNo: props.articleNo,
          subject: "Vue와 Vite 소개",
          userId: "user1",
          registerTime: "2024-11-07",
          hit: 123,
          content: "Vue와 Vite에 대한 자세한 내용입니다."
        };
        // 권한 확인 예시
        canEdit.value = true;
      };
  
      const goBack = () => {
        router.push({ name: "Board" });
      };
  
      const editArticle = () => {
        router.push({ name: "BoardEdit", params: { articleNo: props.articleNo } });
      };
  
      const deleteArticle = () => {
        if (confirm("정말로 글을 삭제하시겠습니까?")) {
          // 서버에서 글을 삭제하는 로직 구현
          alert("글이 삭제되었습니다.");
          router.push({ name: "Board" });
        }
      };
  
      onMounted(fetchArticle);
  
      return {
        article,
        canEdit,
        goBack,
        editArticle,
        deleteArticle
      };
    }
  };
  </script>
  
  <style scoped>
  /* 필요한 경우 스타일 추가 */
  </style>
  