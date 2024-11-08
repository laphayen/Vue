<script>
import { ref } from 'vue';
import PageNavigation from './PageNavigation.vue';
import BoardListItem from './BoardListItem.vue';

export default {
  name: 'Board',
  components: {
    PageNavigation,
    BoardListItem
  },
  setup() {
    const articles = ref([]);
    const searchKey = ref('');
    const searchWord = ref('');
    const paginationHtml = ref(''); // 서버에서 페이지네이션 HTML을 받아서 렌더링

    const currentPage = ref(1);
    const totalPages = ref(10); // 총 페이지 수 설정

    const handlePageChange = (page) => {
      currentPage.value = page;
      // 페이지 변경 시 서버에서 데이터 다시 가져오기 등의 로직 추가
    };

    const fetchArticles = () => {
      articles.value = [
        { article_no: 1, subject: 'Vue와 Vite 소개', user_id: 'user1', views: 123, created_at: '2024-11-07' },
        { article_no: 2, subject: 'Vue와 Bootstrap 사용법', user_id: 'user2', views: 456, created_at: '2024-11-06' }
      ];
    };

    const searchArticles = () => {
      fetchArticles();
    };

    fetchArticles(); // 초기 로딩 시 게시글 목록 불러오기

    return {
      articles,
      searchKey,
      searchWord,
      paginationHtml,
      searchArticles,
      currentPage,
      totalPages
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10 col-sm-12">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">게시판</mark>
        </h2>
      </div>
      <div class="col-lg-8 col-md-10 col-sm-12">
        <div class="row align-self-center mb-2">
          <div class="col-md-2 text-start">
            <button type="button" id="btn-mv-register" class="btn btn-outline-primary btn-sm">글쓰기</button>
          </div>
          <div class="col-md-7 offset-3">
            <form class="d-flex" @submit.prevent="searchArticles">
              <input type="hidden" name="pgno" value="1" />
              <select v-model="searchKey" class="form-select form-select-sm ms-5 me-1 w-50" aria-label="검색조건">
                <option value="">검색조건</option>
                <option value="article_no">글번호</option>
                <option value="subject">제목</option>
                <option value="user_id">작성자</option>
              </select>
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  v-model="searchWord"
                  class="form-control"
                  placeholder="검색어..."
                />
                <button class="btn btn-dark" type="submit">검색</button>
              </div>
            </form>
          </div>
        </div>
        <table class="table table-hover">
          <thead>
            <tr class="text-center">
              <th scope="col">글번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">작성일</th>
            </tr>
          </thead>
          <tbody>
            <BoardListItem v-for="article in articles" :key="article.article_no" :article="article" />
            <tr v-if="articles.length === 0">
              <td colspan="5" class="text-center">검색 결과가 없습니다.</td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <div v-if="paginationHtml" v-html="paginationHtml"></div>
        </div>
      </div>
    </div>

    <PageNavigation
      :pgno="currentPage"
      :key="searchKey"
      :word="searchWord"
      :totalPages="totalPages"
      action="/board"
      @page-changed="handlePageChange"
    />
  </div>
</template>

<style scoped>
/* 스타일 추가 가능 */
</style>
