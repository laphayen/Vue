<template>
    <div>
      <!-- 페이지 네비게이션 폼 -->
      <form id="form-param" method="get" :action="action">
        <input type="hidden" id="pgno" name="pgno" :value="pgno" />
        <input type="hidden" id="key" name="key" :value="key" />
        <input type="hidden" id="word" name="word" :value="word" />
      </form>
  
      <!-- 페이지 네비게이션 버튼 예시 -->
      <nav aria-label="Page navigation example" class="mt-3">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: pgno === 1 }">
            <a class="page-link" href="#" @click.prevent="goToPage(pgno - 1)">이전</a>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === pgno }">
            <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: pgno === totalPages }">
            <a class="page-link" href="#" @click.prevent="goToPage(pgno + 1)">다음</a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "PageNavigation",
    props: {
      pgno: {
        type: Number,
        required: true
      },
      key: {
        type: String,
        default: ""
      },
      word: {
        type: String,
        default: ""
      },
      totalPages: {
        type: Number,
        required: true
      },
      action: {
        type: String,
        default: ""
      }
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.$emit("page-changed", page); // 부모 컴포넌트로 선택한 페이지를 전달
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 필요한 경우 스타일 추가 */
  </style>
  