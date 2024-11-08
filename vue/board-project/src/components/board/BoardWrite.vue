<template>
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10 col-sm-12">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글쓰기</mark>
        </h2>
      </div>
      <div class="col-lg-8 col-md-10 col-sm-12">
        <form @submit.prevent="submitForm" ref="formRegister">
          <input type="hidden" name="action" value="write" />
          <div class="mb-3">
            <label for="subject" class="form-label">제목 : </label>
            <input
              type="text"
              class="form-control"
              id="subject"
              v-model="form.subject"
              placeholder="제목..."
            />
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">내용 : </label>
            <textarea
              class="form-control"
              id="content"
              v-model="form.content"
              rows="7"
            ></textarea>
          </div>
          <div class="col-auto text-center">
            <button
              type="button"
              @click="handleSubmit"
              class="btn btn-outline-primary mb-3"
            >
              글작성
            </button>
            <button type="reset" class="btn btn-outline-danger mb-3">
              초기화
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary mb-3"
              @click="goBack"
            >
              뒤로가기
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'BoardWrite',
    setup() {
      const router = useRouter();
      const form = ref({
        subject: '',
        content: ''
      });
  
      const handleSubmit = () => {
        if (!form.value.subject) {
          alert('제목 입력!!');
          return;
        } else if (!form.value.content) {
          alert('내용 입력!!');
          return;
        } else {
          submitForm();
        }
      };
  
      const submitForm = () => {
        // 여기에서 실제로 서버로 POST 요청을 보냅니다.
        // 예: axios.post('/board/write', form.value)
        console.log('Form submitted:', form.value);
      };
  
      const goBack = () => {
        router.push({ name: 'Board' });
      };
  
      return {
        form,
        handleSubmit,
        goBack
      };
    }
  };
  </script>
  
  <style scoped>
  /* 필요한 경우 스타일 추가 */
  </style>
  