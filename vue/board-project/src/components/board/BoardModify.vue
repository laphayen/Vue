<template>
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10 col-sm-12">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글수정</mark>
        </h2>
      </div>
      <div class="col-lg-8 col-md-10 col-sm-12">
        <form @submit.prevent="submitForm" ref="formModify">
          <input type="hidden" name="articleNo" :value="article.articleNo" />
          <div class="mb-3">
            <label for="subject" class="form-label">제목 :</label>
            <input
              type="text"
              class="form-control"
              id="subject"
              v-model="article.subject"
              placeholder="제목을 입력하세요"
            />
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">내용 :</label>
            <textarea
              class="form-control"
              id="content"
              v-model="article.content"
              rows="7"
              placeholder="내용을 입력하세요"
            ></textarea>
          </div>
          <div class="col-auto text-center">
            <button type="submit" class="btn btn-outline-primary">
              수정하기
            </button>
            <button type="button" class="btn btn-outline-danger" @click="deleteArticle">
              삭제
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: 'BoardModify',
    setup() {
      const router = useRouter();
      const route = useRoute();
      const article = ref({
        articleNo: route.params.articleNo,
        subject: '',
        content: ''
      });
  
      onMounted(() => {
        fetchArticle();
      });
  
      const fetchArticle = () => {
        // 서버에서 articleNo로 데이터를 가져오는 로직을 추가합니다.
        // 예시 데이터로 설정
        article.value = {
          articleNo: route.params.articleNo,
          subject: 'Vue와 Vite 소개',
          content: 'Vue와 Vite에 대한 자세한 내용입니다.'
        };
      };
  
      const submitForm = () => {
        // 실제로 서버에 폼 데이터를 보내는 로직을 구현합니다.
        console.log('Form submitted:', article.value);
        // 예를 들어 axios를 사용한 서버 요청
        // axios.post('/board/modify', article.value).then(response => {
        //   // 성공적으로 수정된 경우
        //   router.push({ name: 'BoardDetail', params: { articleNo: article.value.articleNo } });
        // });
      };
  
      const deleteArticle = () => {
        if (confirm('정말 삭제하시겠습니까?')) {
          // 서버에 삭제 요청을 보내는 로직을 추가합니다.
          console.log(`Deleting article with ID: ${article.value.articleNo}`);
          // 예시로 라우팅
          router.push({ name: 'Board' });
        }
      };
  
      return {
        article,
        submitForm,
        deleteArticle
      };
    }
  };
  </script>
  
  <style scoped>
  /* 필요한 경우 스타일 추가 */
  </style>
  